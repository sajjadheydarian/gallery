import React, {useRef, useContext, useEffect, useState} from 'react';
import Style from "./Style";
import ProductsContext from "../../context/Products";
import Axios from "axios";


const EditePost = (props) => {
    const [post, setPost] = useState({});
    useEffect(() => {
        setPost(props.location.state);
    }, [])
    const productsContext = useContext(ProductsContext);
    const classes = Style();
    const inputTiter = useRef('');
    const inputText = useRef('');
    const inputImage = useRef('');
    const handelSubmit = (e) => {
        e.preventDefault();
        if (inputImage.current.value !== '' && inputText.current.value !== '' && inputTiter.current.value !== '') {
            const s = productsContext.dataPost;
            Axios.put(`http://localhost:5000/posts/${post.id}`, {
                "name": inputTiter.current.value,
                "text": inputText.current.value,
                "image": inputImage.current.value,
                "id": post.id
            }).then(() => {
                productsContext.setDataPost([...s].concat([{
                    name: inputTiter.current.value,
                    text: inputText.current.value,
                    image: inputImage.current.value,
                    id: post.id
                }]));
                alert('successful');
                window.location.assign('/Admin/');
            }).catch((e) => {
                console.log(e)
            })
        } else {
            alert('The information is not complete!!');
        }
    }
    const handelCancel = () => {
        window.location.assign('/Admin/')
    }
    const changeName = (e) => {
        setPost({...post, name: e.target.value})
    }
    const changeText = (e) => {
        setPost({...post, text: e.target.value})
    }
    const changeImage = (e) => {
        setPost({...post, image: e.target.value})
    }
    return (<form className={classes.root} onSubmit={(e)=>handelSubmit(e)}>
            <div className={classes.form}>
                <div className={classes.div}>
                    <label className={classes.label}>:Titre</label>
                    <input ref={inputTiter} className={classes.input} value={post.name} onChange={e => changeName(e)}/>
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>:Text</label>
                    <input ref={inputText} className={classes.input} value={post.text} onChange={(e) => changeText(e)}/>
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>:Image</label>
                    <input ref={inputImage} className={classes.input} value={post.image}
                           onChange={(e) => changeImage(e)}/>
                </div>
                <div className={classes.div}>
                    <button to={'/Admin/'}  className={classes.btn} type={'submit'}
                            style={{background: '#516BEB'}}>submit
                    </button>
                    <button onClick={handelCancel} className={classes.btn} style={{background: '#FF8A5C'}}>cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditePost;