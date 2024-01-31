import React from "react";

import styles from "./Education.module.css";
import skills from "../../data/skills.json";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Eduaction</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {" "}
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <div className={styles.educationItemDetails}>
                  <h1>{`${educationItem.title}`}</h1>
                  <h1>{` ${educationItem.CollegeName}`}</h1>
                  <h2>{`${educationItem.passoutyear}`}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
