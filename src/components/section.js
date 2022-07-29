import React from "react";
import classes from './section.module.css'
const Section = (props)=>{


    return <section id={props.id} className={classes.section_wrap}>
        {props.children}
    </section>
}

export default Section