import React from 'react';
import Style from "./style";
import {Link, NavLink} from "react-router-dom";
import {useMediaQuery, useTheme} from "@mui/material";
import {useContext} from "react";
import ProductsContext from "../../context/Products";

const Navbar = () => {
    const productsContext =useContext(ProductsContext)
    const theme = useTheme();
    const classes = Style();
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={classes.root}>
            <div style={{display:"flex",alignItems:'center'}}>
                {
                    isPhoneSize && <img className={classes.image} onClick={productsContext.drawerOpen} src={"/ham.jpg"}/>
                }
                <Link to={'/'} className={classes.titer}>gallery</Link>
            </div>
            {
                !isPhoneSize ?
                    <div className={classes.titerDiv}>
                        <img src='/logo.jpg' className={classes.image}/>
                        <Link to={'/login'}   className={classes.titer}>login</Link>
                        <Link to='#footer' className={classes.titer}>about us</Link>
                        <Link to='#footer' className={classes.titer}>contact us</Link>
                        <Link to='/' className={classes.titer}>home</Link>
                    </div>
                    : <div className={classes.titerDiv2}><img src='/logo.jpg' className={classes.image}/>
                        <Link to='/login' className={classes.titer}>login</Link>
                    </div>

            }

        </div>
    );
};

export default Navbar;