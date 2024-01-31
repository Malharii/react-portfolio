import React from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Malhari</h1>
        <p className={styles.description}>
          I am a MERN stack developer who is really passionate about full stack
          development. I wish to use my skills to grow my knowledge and pursue
          my passion. I’ve worked hard in my education and now I'm ready to
          apply my knowledge into practise.
        </p>
        <a
          href="https://www.linkedin.com/in/malhari-pawar-6b7484252"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("malhar/malhar.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
