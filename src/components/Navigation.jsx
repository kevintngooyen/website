import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <nav class={styles.navbar}>


          <div class={styles.navbar}>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class={styles.navlinkHome} to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li> 
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class={styles.navlinkAbout} to="/about">
                  About Me
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <Link class={styles.navlinkProjects} to="/projects">
                  Projects
                </Link>
                </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/resume" ? "active" : ""
                }`}
              >
                <Link class={styles.navlinkResume} to="/resume">
                  Resume
                </Link>
                </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/snapshots" ? "active" : ""
                }`}
              >
                <Link class={styles.navlinkSnapshots} to="/snapshots">
                  Snapshots
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);