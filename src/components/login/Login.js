import React from 'react';
import Style from "./Style";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const Login = () => {
    const classes=Style();
    const handleLogin = () => {
      localStorage.setItem('token',"1");
        window.location.assign('/');
    }
    return (
        <div className={classes.root}>
            <div className={classes.loginDiv}>
                <img src={'/logo.jpg'} className={classes.image}/>
                <h1>Login</h1>
                <div className={classes.div}>
                    <label style={{direction:'ltr'}} >username:</label>
                    <input className={classes.input} placeholder={' نام کاربری'} />
                </div>
                <div className={classes.div}>
                    <label style={{direction:'ltr'}}>password:</label>
                    <input  className={classes.input} placeholder={' رمز'} />
                </div>
                <div className={classes.div}>
                    <Button className={classes.btn} style={{color:'blue'}} onClick={handleLogin}>Login</Button>
                    <Link to={'/'}><Button style={{color:'red'}} onClick={()=>{window.location.replace('/')}} className={classes.btn}>cansel</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;