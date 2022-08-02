import React, {useRef, useContext} from 'react';
import Style from "./Style";
import ProductsContext from "../../context/Products";
import Axios from "axios";


const AddPost = () => {
    const productsContext = useContext(ProductsContext);
    const classes = Style();
    const inputTiter = useRef('');
    const inputText = useRef('');
    const inputImage = useRef('');
    const handelSubmit = () => {
        if (inputImage.current.value !== '' && inputText.current.value !== '' && inputTiter.current.value !== '') {
            const s = productsContext.dataPost;
            Axios.post('http://localhost:5000/posts', {
                "name": inputTiter.current.value,
                "text": inputText.current.value,
                "image": inputImage.current.value,
                "id": s.length + 1
            }).then(() => {
                productsContext.setDataPost([...s].concat([{
                    name: inputTiter.current.value,
                    text: inputText.current.value,
                    image: inputImage.current.value,
                    id: s.length + 1
                }]));
            })
            inputImage.current.value = '';
            inputText.current.value = '';
            inputTiter.current.value = '';
            console.log(productsContext.dataPost);
            alert('successful');
            window.location.assign('/Admin/');
        } else {
            alert('The information is not complete!!');
        }
    }
    const handelCancel = () => {
        window.location.assign('/Admin/')
    }
    return (<div className={classes.root}>
            <div className={classes.form}>
                <div className={classes.div}>
                    <label className={classes.label}>:Titre</label>
                    <input ref={inputTiter} className={classes.input}/>
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>:Text</label>
                    <input ref={inputText} className={classes.input}/>
                </div>
                <div className={classes.div}>
                    <label className={classes.label}>:Image</label>
                    <input ref={inputImage} className={classes.input}/>
                </div>
                <div className={classes.div}>
                    <button to={'/Admin/'} onClick={handelSubmit} className={classes.btn}
                            style={{background: '#516BEB'}}>submit
                    </button>
                    <button onClick={handelCancel} className={classes.btn} style={{background: '#FF8A5C'}}>cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddPost;