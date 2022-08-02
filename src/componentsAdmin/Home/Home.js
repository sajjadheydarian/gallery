import React, {useContext, useEffect} from 'react';
import Style from "./style";
import ProductsContext from "../../context/Products";
import Checkbox from '@mui/material/Checkbox';
import {Button} from "@mui/material";
import Axios from "axios";


const Home = (props) => {
    const productsContext = useContext(ProductsContext);
    const classes = Style();
    const deletePost = (e) => {
        // eslint-disable-next-line no-restricted-globals
        let isOk = confirm("are you sure!?");
        if (isOk) {
            Axios.delete(`http://localhost:5000/posts/${e}`).then(() => {
                productsContext.setPostCategory(productsContext.postCategory.filter((i) => {
                    return e !== i.id
                }));
            })
        }
    }
    const editePost = (item) => {
        props.prop.history.push({
            pathname: '/Admin/EditePost',
            state: item
        })
        // window.location.replace('/Admin/EditePost' + '/' + name + '/' + text + '/' + image)
    };
    const handleChange = (event) => {
        if (event.show === 1) {
            Axios.put(`http://localhost:5000/posts/${event.id}`, {...event, "show": 0}).then(() => {
                productsContext.setPostCategory(productsContext.postCategory.map((i) => {
                    if (i.id === event.id)
                        return {
                            ...i,
                            show: 0
                        }
                    else return i;
                }));
            })
        } else {
            Axios.put(`http://localhost:5000/posts/${event.id}`, {...event, "show": 1}).then(() => {
                productsContext.setPostCategory(productsContext.postCategory.map((i) => {
                    if (i.id === event.id)
                        return {
                            ...i,
                            show: 1
                        }
                    else return i;
                }));
            })
        }
    };
    return (
        <div className={classes.rootMain}>
            <h2 className={classes.root}>{props.name}</h2>
            <div className={classes.news}>

                {
                    productsContext.postCategory.map((item) => {
                        if (item.id_category == props.id || props.id == 1)
                            return (<div className={classes.postNews}>
                                <img src={item.image} className={classes.image}/>
                                <h2 className={classes.titrePost}>{item.name}</h2>
                                <p className={classes.text}>{item.text}</p>
                                <div className={classes.div}>
                                    <Button className={classes.btn} style={{color: 'red'}} onClick={() => {
                                        deletePost(item.id)
                                    }}>Delete</Button>
                                    <Button className={classes.btn} onClick={() => {
                                        editePost(item)
                                    }}>Edite</Button>

                                </div>
                                <div className={classes.div} style={{margin: '5px 0'}}>
                                <span className={classes.text}
                                      style={{fontWeight: 'bold', fontSize: 'x-large'}}>show :</span>
                                    <Checkbox
                                        checked={item.show}
                                        onChange={() => {
                                            handleChange(item)
                                        }}
                                        inputProps={{'aria-label': 'controlled'}}
                                    />
                                </div>
                            </div>)
                    })
                }

            </div>
        </div>
    );
};

export default Home;

