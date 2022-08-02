import React, {useContext} from 'react';
import Style from "./style";
import ProductsContext from "../../context/Products";
import {Link} from "react-router-dom";
import AddCategory from "../AddCategory/AddCategory";
import Axios from "axios";

const SideBar = () => {
    const productsContext = useContext(ProductsContext);
    const classes = Style();
    const handelAdd = (e) => {
        window.location.assign('/Admin/AddPost')
    }
    const handelDelete = (e) => {
        // eslint-disable-next-line no-restricted-globals
        let isOk = confirm("are you sure!?");
        if (isOk) {
            Axios.delete(`http://localhost:5000/cat/${e}`).then(() => {
                productsContext.setDataCategory(productsContext.dataCategory.filter((item) => {
                    return e !== item.id
                }));
            })
        }
    }
    const handleCategory = (id) => {
        productsContext.setPostCategory(productsContext.dataPost.filter((i) => {
            if (id !== 1)
                return i.id_category === id
            return id > 0
        }));

    }
    return (<>
            <div style={{height: '70%'}}>
                <h2 className={classes.titer}>دسته بندی:</h2>
                <ul className={classes.ul}>
                    {
                        productsContext.dataCategory.map((item) => {
                            return (<li className={classes.li}>
                                <Link to={'/Admin/' + item.name + '/' + item.id} onClick={() => {
                                    handleCategory(item.id)
                                }}>{item.name}</Link>
                                <div className={classes.div}>
                                    <button onClick={() => {
                                        handelAdd(item.id)
                                    }} className={classes.btn} style={{color: 'blue'}}>add
                                    </button>
                                    <button onClick={() => {
                                        handelDelete(item.id)
                                    }} className={classes.btn} style={{color: 'red'}}>delete
                                    </button>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </div>
            <AddCategory/>
        </>
    );
};

export default SideBar;