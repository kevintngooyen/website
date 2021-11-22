import React from "react";
import styles from "../styles/Projects.module.css"

function Projects() {
  return (
    <div className={styles.home}>
      <div className={styles.major}>
        <div className={styles.left}>
          <h1 class={styles.title}>
            Ants vs. Some Bees:
          </h1>
          <p class={styles.text}>
          A tower defense game based off of Plants vs. Zombies
          Used ants and bees instead of plants and Zombies
          Used object orientated programing
          </p>
          <div className={styles.right}>
            <img
             class={styles.plants}
             src="images/plants.png"
             alt=""
             />
          </div>
          <h1 class={styles.title}>
          Type Racer:
          </h1>
          <p class={styles.text}>
            Measured typing speed
            Implements typing autocorrect
            Knows when correct word was typed
          </p>
          <div className={styles.right}>
            <img
             class={styles.typeracer}
             src="images/typeracer.png"
             alt=""
             />
          </div>
          <h1 class={styles.title}>
          Enigma Simulation:
          </h1>
          <p class={styles.text}>
          Based of World War II German encrption tool
          Able to create coded messages and decoded message
          </p>
          <div className={styles.right}>
            <img
             class={styles.enigma}
             src="images/enigma.png"
             alt=""
             />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;