import React from "react";
import classes from "./skills.module.css";
import Progress from "./progress/progress";

const Skills = () => {
  return (
    <div className={classes.outter_div}>
      <div className={classes.header} data-aos="fade-left">
        <label>
          02. <a>Skills</a>
        </label>
      </div>
      <div className={classes.inner_div}>
        <Progress fill="90%">HTML</Progress>
        <Progress fill="85%">CSS</Progress>
        <Progress fill="80%">JavaScript</Progress>
        <Progress fill="80%">NodeJS</Progress>
        <Progress fill="75%">ReactJS</Progress>
        <Progress fill="75%">SQL</Progress>
      </div>
    </div>
  );
};

export default Skills;
