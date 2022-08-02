import React from 'react';
import Style from "./style";
import {Link, NavLink} from "react-router-dom";
import {useMediaQuery, useTheme} from "@mui/material";
import {useContext} from "react";
import ProductsContext from "../../context/Products";

const Navbar = () => {
    const productsContext =useContext(ProductsContext);
    const theme = useTheme();
    const classes = Style();
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('md'));
    const handleExit = () => {
        localStorage.removeItem('token');
    }
    return (
        <div className={classes.root}>
            <div style={{display:"flex",alignItems:'center'}}>
                {
                    isPhoneSize && <img className={classes.image} onClick={productsContext.drawerOpen} src={"/ham.jpg"}/>
                }
                <a href={'/Admin'} className={classes.titer}>gallery</a>
            </div>
            {
                !isPhoneSize ?
                    <div className={classes.titerDiv}>
                        <img src='/logo.jpg' className={classes.image}/>
                        <NavLink to={'/login'} onClick={handleExit} className={classes.titer}>Exit</NavLink>
                        <a href='#footer' className={classes.titer}>about us</a>
                        <a href='#footer' className={classes.titer}>contact us</a>
                        <a href='/Admin' className={classes.titer}>home</a>
                    </div>
                    : <div className={classes.titerDiv2}><img src='/logo.jpg' className={classes.image}/>
                        <NavLink to={'/login'} onClick={handleExit} className={classes.titer}>Exit</NavLink>
                    </div>

            }
        </div>
    );
};

export default Navbar;