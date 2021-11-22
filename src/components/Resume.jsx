import React from "react";
import styles from "../styles/Resume.module.css"

function Resume() {
  return (
    <div className={styles.home}>
      <div className={styles.center}>
            <img
             class={styles.resume}
             src="images/resume.png"
             alt=""
             />
          </div>
    </div>
  );
}

export default Resume;