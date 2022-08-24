import React, { Fragment } from "react";
import classes from './projects.module.css'
import Card from "./card/card";
import GlassButton from "../buttons/glassButton";
const Projects = (props) => {



    return (
        <div className={classes.outter_div}>
            <div className={classes.header} data-aos='fade-left'>
                <label>02. <a>Things I've made</a></label>
            </div>
            <div className={classes.inner_div}>
                <Card title='E-commerce Website' secondType={true}> <p className={classes.p}>Designed a simple chat application using npm modules such as HandleBars, Socket.io using NodeJS.
                    <br></br>It has some awsome features like,
                </p>
                    <ul className={classes.ul}>
                        <li>Profanitiy filtring</li>
                        <li>Usernames of users in same room</li>
                        <li>Location sharing</li>
                        <li>Massages with name of user and timestamp</li>
                    </ul>
                    <p className={classes.p2}> NodeJS • HandleBars • CSS • Express • Socket.io • Bad-words(npm) • Mustache</p>
                </Card>
                <Card title='Chat-app' secondType={false}>  <p className={classes.p}>Designed a simple chat application using npm modules such as HandleBars, Socket.io using NodeJS.
                    <br></br>It has some awsome features like,
                </p>
                    <ul className={classes.ul}>
                        <li>Profanitiy filtring</li>
                        <li>Usernames of users in same room</li>
                        <li>Location sharing</li>
                        <li>Massages with name of user and timestamp</li>
                    </ul>
                    <p className={classes.p2}> NodeJS • HandleBars • CSS • Express • Socket.io • Bad-words(npm) • Mustache</p>
                
                </Card>
            </div>
            <div className={classes.button_div} >
                <GlassButton id="projectsButton" >View all projects</GlassButton>
            </div>
        </div>
    );
}

export default Projects;