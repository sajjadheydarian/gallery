import React, {useEffect, useState} from 'react';
// import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import HomeAdmin from "./componentsAdmin/Home/Home";
import SideBar from "./components/sidebar/SideBar";
import SideBarAdmin from "./componentsAdmin/sidebar/SideBar";
import Style from "./style";
import {BrowserRouter, Switch, Route, Redirect, HashRouter} from "react-router-dom";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import FooterAdmin from "./componentsAdmin/footer/Footer";
import DrawerRight from "./components/Drawer/DrawerRight";
import DrawerRightAdmin from "./componentsAdmin/Drawer/DrawerRight";
import ProductsContext from "./context/Products";
import {useMediaQuery, useTheme} from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import NavbarAdmin from "./componentsAdmin/navbar/Navbar";
import EditePost from "./componentsAdmin/EditePost/EditePost";
import AddPost from "./componentsAdmin/AddPost/AddPost";
import Axios from "axios";

const App = () => {
    const dataPost = [
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 1,
            show: 1,
            id_category: 5
        },
        {
            name: 'غروب افتاب',
            image: 'http://pic.photo-aks.com/large/beautifull_sunset.jpg',
            text: 'غروب خورشید طلایی',
            id: 2,
            show: 1,
            id_category: 2
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 3,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 4,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 5,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 6,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 7,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 8,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 8,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 9,
            show: 1,
            id_category: 5
        },
        {
            name: 'lamborghini',
            image: 'https://twitterapi.liara.run//uploads/images/2022/3/17/1647442088974-263822.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 10,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 11,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 12,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 13,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 14,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 15,
            show: 1,
            id_category: 5
        },
        {
            name: 'bugatti',
            image: 'http://pic.photo-aks.com/large/bugatti-divo.jpg',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            id: 16,
            show: 1,
            id_category: 5
        }
    ]
    const [dataPostState, setDataPostState] = useState([]);
    const data = [
        {name: 'همه عکس ها', id: 1},
        {name: 'خورشید', id: 2},
        {name: 'ورزش', id: 3},
        {name: 'حیوانات', id: 4},
        {name: 'ماشین', id: 5},
        {name: 'سگ', id: 6},
        {name: 'اسب', id: 7},
        {name: 'مو', id: 8},
        {name: 'گیاه', id: 9},
        {name: 'دختر', id: 10},
        {name: 'پسر', id: 11},
        {name: 'کوه', id: 12},
        {name: 'برکه', id: 13},
        {name: 'دریا', id: 14},
        {name: 'مناظر', id: 15},
    ]
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/posts')
            .then((e) => {
                setDataPostState(e.data)
                setPostCategory(e.data)
            })

        Axios.get('http://localhost:5000/cat')
            .then((e) => {
                setDataCategory(e.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])
    const classes = Style();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const isPhoneSize = useMediaQuery(theme.breakpoints.down('md'));
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const main = (props) => {
        return (<div className={classes.root}>
            <Navbar/>
            {
                !isPhoneSize ? <div className={classes.main}>
                    <div className={classes.sidebar}><SideBar/></div>
                    <div className={classes.home}><Home name={props.match.params.name + ":"}
                                                        id={props.match.params.id}/></div>
                </div> : <div className={classes.main} style={{display: 'block'}}><DrawerRight
                    name={props.match.params.name + ":"}
                    id={props.match.params.id}/></div>
            }
            <Footer/>
        </div>)
    }
    const mainAdmin = (props) => {
        return (<div className={classes.root}>
            <NavbarAdmin/>
            {
                !isPhoneSize ? <div className={classes.main}>
                    <div className={classes.sidebar}><SideBarAdmin/></div>
                    <div className={classes.home}><HomeAdmin prop={props} name={props.match.params.name + ":"}
                                                             id={props.match.params.id}/></div>
                </div> : <div className={classes.main} style={{display: 'block'}}><DrawerRightAdmin prop={props}
                                                                                                    name={props.match.params.name + ":"}
                                                                                                    id={props.match.params.id}/>
                </div>
            }
            <FooterAdmin/>
        </div>)
    }
    const [postCategory, setPostCategory] = useState([]);
    return (
        <ProductsContext.Provider value={{
            open: open,
            drawerOpen: handleDrawerOpen,
            drawerClose: handleDrawerClose,
            dataCategory: dataCategory,
            setDataCategory: setDataCategory,
            dataPost: dataPostState,
            setDataPost: setDataPostState,
            postCategory: postCategory,
            setPostCategory: setPostCategory
        }}>
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <PrivateRoute path={'/Admin'} render={() => <>
                        <Switch>
                            <Route exact path={"/Admin"} render={(e) =>
                                <div className={classes.root}>
                                    <NavbarAdmin/>
                                    {
                                        !isPhoneSize ? <div className={classes.main}>
                                                <div className={classes.sidebar}><SideBarAdmin/></div>
                                                <div className={classes.home}><HomeAdmin prop={e} id={1}
                                                                                         name={'همه عکس ها:'}/></div>
                                            </div> :
                                            <div className={classes.main} style={{display: 'block'}}><DrawerRightAdmin
                                                prop={e} id={1} name={'همه عکس ها:'}/>
                                            </div>
                                    }
                                    <FooterAdmin/>
                                </div>
                            }/>
                            <Route path={"/Admin/AddPost"} component={AddPost}/>
                            <Route path={"/Admin/EditePost"} component={EditePost}/>
                            <Route path={"/Admin/:name/:id"} component={mainAdmin}/>
                        </Switch>
                    </>
                    }/>
                    <PublicRoute path={'/'} render={() => <>
                        <Switch>
                            <Route exact path={"/"} render={() =>
                                <div className={classes.root}>
                                    <Navbar/>
                                    {
                                        !isPhoneSize ? <div className={classes.main}>
                                                <div className={classes.sidebar}><SideBar/></div>
                                                <div className={classes.home}><Home id={1} name={'همه عکس ها:'}/></div>
                                            </div> :
                                            <div className={classes.main} style={{display: 'block'}}><DrawerRight id={1}
                                                                                                                  name={'همه عکس ها:'}/>
                                            </div>
                                    }
                                    <Footer/>
                                </div>
                            }/>
                            <Route path={"/login"} component={Login}/>
                            <Route path={"/:name/:id"} component={main}/>
                        </Switch>
                    </>
                    }/>
                </Switch>
            </BrowserRouter>
        </ProductsContext.Provider>
    );
};


const isLogin = () => !!localStorage.getItem('token');
const PublicRoute = ({render, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={'/Admin'}/>
        else {
            return render(props);
        }
    }}/>

}
const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={(props) => {
        if (!isLogin())
            return <Redirect to={'/'}/>
        else {
            return render(props);
        }
    }}/>

}
export default App;