import React,{useContext} from 'react';
import Style from "./style";
import ProductsContext from "../../context/Products";
const Home = ({name,id}) => {
    const productsContext =useContext(ProductsContext);
    const classes = Style();
    return (
        <div className={classes.rootMain}>
            <h2 className={classes.root}>{name}</h2>
            <div className={classes.news}>
                {
                    productsContext.postCategory.map((item) => {
                        if(item.id_category==id || id==1)
                        return (<div className={classes.postNews}>
                            <img src={item.image} className={classes.image}/>
                            <h2 className={classes.titrePost}>{item.name}</h2>
                            <p className={classes.text}>{item.text}</p>
                        </div>)
                    })
                }

            </div>
        </div>
    );
};

export default Home;