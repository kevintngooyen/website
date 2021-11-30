import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <nav class={styles.navbar}>
          <div class={styles.navbar}>
            <ul class={styles.links}>
                <Link class={styles.navlinkHome} to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
                <Link class={styles.navlinkAbout} to="/about">
                  About Me
                </Link>
                <Link class={styles.navlinkProjects} to="/projects">
                  Projects
                </Link>
                <Link class={styles.navlinkResume} to="/resume">
                  Resume
                </Link>
                <Link class={styles.navlinkSnapshots} to="/snapshots">
                  Snapshots
                </Link>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);