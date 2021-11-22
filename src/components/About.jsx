import React from "react";
import styles from "../styles/About.module.css"

function About() {
  return (
    <div className={styles.home}>
      <div className={styles.major}>
        <div className={styles.left}>
          <h1 class={styles.title}>
            Introduction:
          </h1>
          <p class={styles.text}>
          I am a sophmore at University of California majoring
          in Data Science and minoring in computer science. 
          </p>
          <div className={styles.right}>
            <img
             class={styles.mypicture}
             src="images/mypicture.png"
             alt=""
             />
          </div>
          <h1 class={styles.title}>
            Interests:
          </h1>
          <p class={styles.bullettext}>
          Traveling
          </p>
          <p class={styles.bullettext}>
          Cooking
          </p>
          <p class={styles.bullettext}>
          Trying new food to eat
          </p>
          <p class={styles.bullettext}>
          Riding my electric long board
          </p>
          <p class={styles.bullettext}>
          Building computers
          </p>
          <h1 class={styles.title}>
            Contact Me:
          </h1>
          <p class={styles.text}>
          Email: kevin4nguyen1@gmail.com
          </p>
          <p class={styles.text}>
          Mobile number: (669) 238 - 9403
          </p>

        </div>
      </div>
    </div>
  );
}

export default About;