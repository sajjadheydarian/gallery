import React from 'react';
import Style from "./style";
import {useContext} from "react";
import ProductsContext from "../../context/Products";
import {Link} from "react-router-dom";

const SideBar = () => {
    const productsContext = useContext(ProductsContext);
    const classes=Style();
    const handleCategory = (id) => {
        productsContext.setPostCategory(productsContext.dataPost.filter((i)=>{
            if (id!==1)
                return i.id_category=== id
            return id>0
        }));

    }
    return (
        <div style={{height:'90%'}}>
            <h2 className={classes.titer}>دسته بندی:</h2>
            <ul className={classes.ul}>
                {
                    productsContext.dataCategory.map((item)=>{
                        return(<li className={classes.li}><Link  to={'/' + item.name +'/' + item.id} onClick={() => {
                            handleCategory(item.id)
                        }}>{item.name}</Link></li>)
                    })
                }
            </ul>
        </div>
    );
};

export default SideBar;