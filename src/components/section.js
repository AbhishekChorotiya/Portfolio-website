import React from "react";
import classes from './section.module.css'
// import GlassButton from "./buttons/glassButton";
const Section = (props)=>{


    return <section id={props.id} className={classes.section_wrap}>
        {props.children}

    </section>
}

export default Section