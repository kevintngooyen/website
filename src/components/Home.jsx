import React from "react";
import styles from "../styles/Home.module.css"

function Home() {
  return (
    <div className={styles.home}>
      <div className = {styles.major}>
        <div className={styles.center}>
        <p class={styles.infodescription2}>
            Data Scientist at University of California, Berkeley
          </p>
          <h1 class={styles.infotitle}>
            Hi! I am
            </h1>
          <p class={styles.infotitle}>
            Kevin Nguyen
          </p>
          <p class={styles.infodescription}>
            Data Scientist at University of California, Berkeley
          </p>
          <p class={styles.infodescription2}>
            Data Scientist at University of California, Berkeley
          </p>
          <p class={styles.infodescription2}>
            Data Scientist at University of California, Berkeley
          </p>
          <p class={styles.infodescription2}>
            Data Scientist at University of California, Berkeley
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;