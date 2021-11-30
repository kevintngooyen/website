import React from "react";
import styles from "../styles/Resume.module.css"
import resumePhoto from "../images/resumePhoto.png"

function Resume() {
  return (
    <div className={styles.home}>
      <div className={styles.center}>
            <img
             class={styles.resume}
             src={resumePhoto}
             alt=""
             />
          </div>
    </div>
  );
}

export default Resume;