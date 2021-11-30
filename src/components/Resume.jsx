import React from "react";
import styles from "../styles/Resume.module.css"
import resumePhoto from "../images/resumePhoto.png"

function Resume() {
  return (
    <div className={styles.home}>
      <div className={styles.center}>
        <a href ="https://docs.google.com/document/d/1QmpOYvcoc0Zip6e4xcVLJnarIIm8BdyE42IO-DY9KUU/edit?usp=sharing">
            <img
             class={styles.resume}
             src={resumePhoto}
             alt=""
             />
             </a>
          </div>
    </div>
  );
}

export default Resume;