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
          <h1 class={styles.title}>
            Interests:
          </h1>
          <ul class={styles.text}>
            <li>Traveling</li>
            <li>Cooking</li>
            <li>Trying new foods to eat</li>
            <li>Riding my long board</li>
            <li>Building computers</li>
          </ul>
          <h1 class={styles.title}>
            Contact Me:
          </h1>
          <ul class={styles.text}>
          <li>Email: kevin4nguyen1@gmail.com</li>
          <li>Mobile number: (669) 238 - 9403</li>
          </ul>
        </div>
        <div className={styles.right}>
            <img
              class={styles.mypicture}
              src="images/mypicture.png"
              alt=""
             />
          </div>
      </div>
    </div>
  );
}

export default About;