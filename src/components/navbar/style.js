import {makeStyles} from "@material-ui/styles";

const Style=makeStyles(Theme=>({
    root:{
        display:'flex',
        justifyContent:'space-between',
        margin:' 0.5rem 1rem 0 1rem',
        background:'#B1BCE6',
        borderRadius:'5px',
        padding:'0.5rem' ,
        color:'black'
    },
    titer:{
        fontSize:'1.3rem !important',
        color:'white',
        marginRight:'0.5rem',
    },
    image:{
        width:'30px',
        height:'30px',
        borderRadius:'50%',
        marginRight:'0.5rem'
    },
    titerDiv:{
        display:'flex',
        justifyContent:'space-between',
        width:'40%',
        direction:'ltr'
    },
    titerDiv2:{
        display:'flex',
        width:'40%',
        direction:'ltr'
    }
}))
export  default Style;