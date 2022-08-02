import React, {useRef, useContext} from 'react';
import Style from "./Style";
import ProductsContext from "../../context/Products";
import Axios from "axios";

const AddCategory = () => {
    const productsContext = useContext(ProductsContext);
    const classes = Style();
    const inputRef = useRef();
    const handelSubmit = () => {
        if (inputRef.current.value !== '') {
            const id = Math.floor(Math.random() * 1000)
            Axios.post(`http://localhost:5000/cat`, {"id": id, "name": inputRef.current.value}).then(() => {
                const s = productsContext.dataCategory;
                productsContext.setDataCategory([...s].concat([{name: inputRef.current.value, id: s.length + 1}]));
                inputRef.current.value = '';
            })
        }
    }
    return (
        <div className={classes.root}>
            <div className={classes.div}>
                <label className={classes.label}>new category:</label>
                <input className={classes.input} ref={inputRef}/>
            </div>
            <button className={classes.btn} onClick={handelSubmit}>submit</button>
        </div>
    );
};

export default AddCategory;