import React, {useState, useEffect, useCallback, useRef} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faForwardStep, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function Controls({audioRef, progressBarRef, duration, setTimeProgress}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  }

  useEffect(() => {
    if(isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button>
          <FontAwesomeIcon className="icon" icon={faBackwardStep} />
        </button>

        <button>
          <FontAwesomeIcon onClick={togglePlayPause} className="icon" icon={
            isPlaying ? faPause : faPlay
          } />
        </button>

        <button>
          <FontAwesomeIcon className="icon" icon={faForwardStep} />
        </button>
      </div>
    </div>
  )
}

export default Controls;