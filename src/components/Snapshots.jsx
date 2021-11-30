import React from "react";
import styles from "../styles/Snapshots.module.css"
import cambodia from "../images/picture1.png"
import leaders from "../images/picture2.png"
import something from "../images/picture4.png"
import retreat from "../images/picture3.png"

function Snapshots() {
  return (
    <div className={styles.home}>

      <div className={styles.row1}>
        <div className={styles.topleft}>
            <img
             class={styles.resume}
             src={cambodia}
             alt=""
             />
          <p class={styles.text}>
            My Cambodian students.
          </p>
          </div>

          <div className={styles.topright}>
            <img
             class={styles.image2}
             src={leaders}
             alt=""
             />
          <p class={styles.text1}>
          Volunteers and I taking our students around the city. 
          </p>
          </div>
          </div>

        <div className={styles.row2}>
          <div className={styles.bottomleft}>
            <img
             class={styles.resume}
             src={something}
             alt=""
             />
          <p class={styles.text}>
          My senior class winning a competition. 
          </p>
          </div>

          <div className={styles.bottomright}>
            <img
             class={styles.resume}
             src={retreat}
             alt=""
             />
          <p class={styles.text}>
          My retreat group that I lead.
          </p>
          </div>
          </div>

    </div>
  );
}

export default Snapshots;