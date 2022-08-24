import React, { useEffect, useState } from "react";
import classes from './progress.module.css'

const Progress =(props) =>{

    return(

        <div className={classes.card} data-aos='flip-up' data-aos-offset='80'>
            <div className={classes.title_div}>
                <span className={classes.title}>{props.children}</span>
            </div>
            <div className={classes.bar_div}>
                <div className={classes.bar}>
                    <div className={classes.bar_fill} style={{width:`${props.fill}`}} data-aos='slide-right' data-aos-offset='50' data-aos-duration='800'></div>
                </div>
            </div>
            <div className={classes.persentage_div}>
                    <span className={classes.persentage}>{props.fill}</span>
                </div>
        </div>

    );
}

export default Progress;