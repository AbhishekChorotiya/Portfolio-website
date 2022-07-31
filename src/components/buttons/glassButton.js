import React from "react";
import classes from './glassButton.module.css'

const GlassButton =(props)=>{

    return(

        <a href={props.redirect} id={props.id} className={classes.button}>{props.children}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </a>

    );

}

export default GlassButton;