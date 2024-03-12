import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";

import useDocumentTitle from "../../useDocumentTitle";

import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faCaretLeft, faCaretRight, faForwardStep, faHeart, faMoon, faPause, faPlay, faScaleBalanced, faSun, faUser } from "@fortawesome/free-solid-svg-icons";

function LoginPage(props) {
  const [mode, setMode] = useState(0);

  useDocumentTitle(`${props.title}`);

  return (
    <div className={`container ${(mode === 0) ? `dark` : `light`}`} >
      <div className="login-card">
        <h2 className="card-head"><span className="blue">Duid</span> Management</h2>
        <nav className="tab">
          <ul>
            <li><NavLink to="/login" className={({isActive}) => [isActive ? "active" : ""].join(" ")}>MASUK</NavLink></li>
            <li><NavLink to="/register" className={({isActive}) => [isActive ? "active" : ""].join(" ")}>DAFTAR</NavLink></li>
          </ul>
        </nav>
        <div className="card-body">
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button className="enabled">MASUK</button>
          </form>
        </div>
        <div className="card-footer">
          <Link to="/forgot">Lupa Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;