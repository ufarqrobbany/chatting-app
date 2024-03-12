import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayTrack({ currentTrack, audioRef, setDuration, progressBarRef }) {

  const onLoadedMetadata = () => {
    // const seconds = audioRef.current.duration;
    const seconds = audioRef.duration;

    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} />

      <div className="audio-info">
        <div className="audio-text">
          <p className="title">{currentTrack.title}</p>
          <p className="author">{currentTrack.author}</p>
        </div>
        <div className="audio-image">
          {
            currentTrack.thumbnail ? (
              <img src={currentTrack.thumbnail} alt="audio image" />
            ) : (
              <div className="icon-wrapper">
                <span className="audio-icon">
                  <FontAwesomeIcon className="icon" icon={faMusic} />
                </span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default DisplayTrack;