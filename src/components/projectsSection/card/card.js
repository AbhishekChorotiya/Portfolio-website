import React from "react";
import classes from './card.module.css'
import chatapp from './chatapp.jpg'
const Card = (props)=>{



    return (
        <div className={classes.card_div}>
            <div className={classes.img_div}>
                <img src={chatapp} className={classes.img}></img>
            </div>
            <div className={classes.desc_div}>
                <div className={classes.title_div}>
                    <a className={classes.title}> {props.title}</a>
                </div>
                <div className={classes.content_div}>
                    {props.children}
                </div>
            </div>


        </div>
    );

}

export default Card;