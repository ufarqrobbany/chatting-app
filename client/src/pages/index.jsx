import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import useDocumentTitle from "../useDocumentTitle";

import "./pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faCaretLeft, faCaretRight, faForwardStep, faHeart, faMoon, faPause, faPlay, faScaleBalanced, faSun, faUser } from "@fortawesome/free-solid-svg-icons";

function Pages(props) {
  const [mode, setMode] = useState(0);

  useDocumentTitle(`${props.title}`);

  return (
    <div className={`container ${(mode === 0) ? `dark` : `light`}`} >
      
    </div>
  );
}

export default Pages;