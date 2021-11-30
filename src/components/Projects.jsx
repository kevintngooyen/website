import React from "react";
import styles from "../styles/Projects.module.css"
import enigma from "../images/enigma.png"
import plants from "../images/plants.png"
import race from "../images/typeracer.png"

function Projects() {
  return (
    <div className={styles.home}>
      <div className={styles.major}>
        <div className={styles.left}>
        <div className={styles.right1}>
            <img
             class={styles.plant}
             src= {plants}
             alt=""
             />
          </div>
          <h1 class={styles.title}>
            Ants vs. Some Bees:
          </h1>
          <ul class={styles.text}>
          <li>A tower defense game based off of Plants vs. Zombies</li>
          <li>Used ants and bees instead of plants and Zombies</li>
          <li>Used object orientated programing</li>
          </ul>
          <div className={styles.right2}>
            <img
             class={styles.typeracer}
             src={race}
             alt=""
             />
          </div>
          <h1 class={styles.title}>
          Type Racer:
          </h1>
          <ul class={styles.text}>
          <li>Measured typing speed</li>
          <li>Implements typing autocorrect</li>
          <li>Knows when correct word was typed</li>
          </ul>
          <div className={styles.right3}>
            <img
             class={styles.enigma}
             src={enigma}
             alt=""
             />
          </div>
          <h1 class={styles.title}>
          Enigma Simulation:
          </h1>
          <ul class={styles.text}>
          <li>Based of World War II German encrption tool</li>
          <li>Able to create coded messages and decoded message</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;