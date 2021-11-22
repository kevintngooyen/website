import React from "react";
import styles from "../styles/Snapshots.module.css"

function Snapshots() {
  return (
    <div className={styles.home}>
      <div className={styles.right}>
            <img
             class={styles.resume}
             src="images/picture1.png"
             alt=""
             />
          </div>
          <p class={styles.text}>
            All my Cambodia students.
          </p>
          <div className={styles.right}>
            <img
             class={styles.resume}
             src="images/picture2.png"
             alt=""
             />
          </div>
          <p class={styles.text}>
          Me and other volunteers taking our students on a trip around the city. 
          </p>
          <div className={styles.right}>
            <img
             class={styles.resume}
             src="images/picture3.png"
             alt=""
             />
          </div>
          <p class={styles.text}>
          My highschool senior class winning an all grade competition. 
          </p>
          <div className={styles.right}>
            <img
             class={styles.resume}
             src="images/picture4.png"
             alt=""
             />
          </div>
          <p class={styles.text}>
          My retreat group that I lead and supporting during the retreat. 
          </p>
    </div>
  );
}

export default Snapshots;