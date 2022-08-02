import React from 'react';
import Style from "./Style";

const Footer = () => {
    const classes=Style();
    return (
        <div className={classes.root} id={"footer"}>
            <div className={classes.div}>
                <h2 className={classes.titre}>ارتباط با ما:</h2>
                <p className={classes.text}>   <span className={classes.span}>ایمیل: </span> <span className={classes.span}>gallery@gmail.com</span></p>
                <p className={classes.text}> <span className={classes.span}>شماره:  </span> <span className={classes.span}>9915364423</span> </p>
            </div>
            <div className={classes.div}>
                <h2 className={classes.titre}>درباره ما:</h2>
                <p className={classes.text}>این یک سایت گالری با ری اکت جی اس است </p>
            </div>
        </div>
    );
};

export default Footer;