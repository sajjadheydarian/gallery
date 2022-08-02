import {makeStyles} from "@material-ui/styles";

const Style=makeStyles(Theme=>({
    ul:{
        margin:'1rem',
        justifyItems:'center',
        overflowY:"scroll",
        height:'87%'
    },
    li:{
        marginBottom:'0.5rem',
        fontSize:'1.5rem',
        background:'#B7E5DD',
        borderRadius:'5px',
        padding:'0 0.5rem'
    },
    titer:{
        padding:'0.5rem',
        margin:'0.5rem',
        background:'#B689C0',
        borderRadius:'5px',
        color:'white'
    }
}))
export default Style;