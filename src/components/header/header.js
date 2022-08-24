import React from "react";
import classes from "./header.module.css";
const Header = () => {
    const logo = "<A/>";
    return (
        <header id="header" className={classes["header"]}>
            <a href="/" className={classes.logo}>
                {logo}
            </a>
            <div className={classes.right_div}>
                <label className={classes.label}>
                    01.
                    <a className={classes.navigation} href="/">
                        Home
                    </a>
                </label >
                <label className={classes.label}>
                    02.
                    <a className={classes.navigation} href="#secondSection">
                        Projects
                    </a>
                </label>
                <label className={classes.label}>
                    03.
                    <a className={classes.navigation} href="#thirdSection">
                        Skills
                    </a>
                </label>
                <label className={classes.label}>
                    04.
                    <a className={classes.navigation} href="/">
                        Contact
                    </a>
                </label>
                <label className={classes.label}>
                    05.
                    <a className={classes.navigation} href="/">
                        About
                    </a>
                </label>
            </div>
        </header>
    );
};

export default Header;
