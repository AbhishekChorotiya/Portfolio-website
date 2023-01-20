import React, { Fragment } from "react";
import classes from "./mainSection.module.css";
import photo from "../../dummy.jpg";
import GlassButton from "../buttons/glassButton";

const MainSection = () => {


  return (
    <Fragment>
      <div className={classes.outter_div}>
          <div className={classes.first_div_wrap}>
            <div className={classes.first_div}>
              <p>Hi, My name is</p>
              <h1>ABHISHEK CHOROTIYA</h1>
              <h2>Turning ideas into Websites.</h2>
              <h3 className={classes.p2}>
                I'm student at Indian Instute of Information Technology, KOTA
                currently persuing BTech in Electronics and communication
                engineering.<br></br>
                I'm a full stack web developer with good problem solving skills <br></br>Seeking a position in a competitive environment that would challenge me to push my boundaries and expand my knowledge in this field of computer science. 
              </h3>
              <div className={classes.glass_button_div}>
                <div className={classes.glass_button_wrap1}>
                  <GlassButton>Get in touch!</GlassButton>
                </div>
                <div className={classes.glass_button_wrap2}>
                  <GlassButton>Resume</GlassButton>
                </div>
              </div>
            </div>
          </div>
            <div className={classes.second_div}>
              <img className={classes.photo} src={photo} alt="user"></img>
            </div>
        </div>
    </Fragment>
  );
};
export default MainSection;
