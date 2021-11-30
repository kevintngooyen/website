import React from "react";
import styles from "../styles/Snapshots.module.css"
import cambodia from "../images/picture1.png"
import leaders from "../images/picture2.png"
import something from "../images/picture4.png"
import retreat from "../images/picture3.png"

function Snapshots() {
  return (
    <div className={styles.home}>
      <div className={styles.right}>
            <img
             class={styles.resume}
             src={cambodia}
             alt=""
             />
          </div>
          <p class={styles.text}>
            My Cambodian students.
          </p>
          <div className={styles.right}>
            <img
             class={styles.resume}
             src={leaders}
             alt=""
             />
          </div>
          <p class={styles.text}>
          Me and other volunteers taking our students on a trip around the city. 
          </p>
          <div className={styles.right}>
            <img
             class={styles.resume}
             src={something}
             alt=""
             />
          </div>
          <p class={styles.text}>
          My senior class winning an all grade competition. 
          </p>
          <div className={styles.right}>
            <img
             class={styles.resume}
             src={retreat}
             alt=""
             />
          </div>
          <p class={styles.text}>
          My retreat group that I lead and supported.
          </p>
    </div>
  );
}

export default Snapshots;