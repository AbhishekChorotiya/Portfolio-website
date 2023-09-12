import React, { Fragment } from "react";
import classes from './projects.module.css'
import Card from "./card/card";
import chatapp from "./chatapp.jpg"
import ecommerce from "./ecommerce.png"
import lms from "./lms.jpg"
import GlassButton from "../buttons/glassButton";
const Projects = (props) => {



    return (
        <div className={classes.outter_div} id={'projects'}>
            <div className={classes.header} data-aos='fade-left'>
                <label>03. <a>Things I've made</a></label>
            </div>
            <div className={classes.inner_div}>
                <Card photo={ecommerce} github='https://github.com/AbhishekChorotiya/e-commerce-app' live='https://silverstore.onrender.com' title='E-commerce Website' secondType={true}> <p className={classes.p}>Designed a E-commerce Website using NodeJS and ReactJS.
                    <br></br>It has some awsome features like,
                </p>
                    <ul className={classes.ul}>
                        <li>Customers can view, search products and can also add items to the cart.</li>
                        <li>Cart displays all the products image, title and user can adjust the quantity of products.</li>
                        <li>Users can see profile, upload a profile photo and can update the personal details.</li>
                        <li>Related 5 products listed with the products.</li>
                    </ul>
                    <p className={classes.p2}> NodeJS • ReactJS • CSS Module • Express • MongoDB • JWT • Cookie-parser</p>
                </Card>
                <Card photo={lms} github='https://github.com/AbhishekChorotiya/Major-Project-goup' title='Advanced LMS (Learning Management System)' secondType={false}>  <p className={classes.p}>Desiging Advanced Learning Management System for Our Institute.
                    <br></br>It has some awsome features like,
                </p>
                    <ul className={classes.ul}>
                        <li>Admin can register faculty members and students using excel sheet.</li>
                        <li>Faculty can make quiz and students can attempt quiz on the platform.</li>
                        <li>Personlized Dashboad for student and faculty.</li>
                        <li>Student and Faculty feedback System.</li>
                    </ul>
                    <p className={classes.p2}> NodeJS • ReactJS • CSS Module • Express • MongoDB • XLSX • Cookie-parser</p>
                
                </Card>
                <Card photo={chatapp} github='https://github.com/AbhishekChorotiya/node-chatApp' live='https://chat-app-tvkq.onrender.com' title='Chat-app' secondType={false}>  <p className={classes.p}>Designed a simple chat application using npm modules such as HandleBars, Socket.io using NodeJS.
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
        </div>
    );
}

export default Projects;