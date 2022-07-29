import React, { Fragment } from "react";
import classes from './projects.module.css'
import Card from "./card/card";

const Projects = () => {



    return (
        <div className={classes.outter_div}>
            <div className={classes.inner_div}>
                <Card title='Chat-App'> <p className={classes.p}>Designed a simple chat application using npm modules such as HandleBars, Socket.io using NodeJS.
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
                <Card title='E-commerce Website'> </Card>
                <Card title='Bluetooth Controlled Arduino Car'> </Card>
            </div>
        </div>
    );
}

export default Projects;