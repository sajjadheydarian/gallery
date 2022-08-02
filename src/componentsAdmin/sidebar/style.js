import {makeStyles} from "@material-ui/styles";

const Style=makeStyles(Theme=>({
    ul:{
        margin:'1rem',
        justifyItems:'center',
        overflowY:"scroll",
        height:'87%'
    },
    li:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom:'0.5rem',
        fontSize:'1.5rem',
        background:'#B7E5DD',
        borderRadius:'5px',
        padding:'0 0.5rem',
        height:'2rem',
        alignItems:'center',

    },
    titer:{
        padding:'0.5rem',
        margin:'0.5rem',
        background:'#B689C0',
        borderRadius:'5px',
        color:'white'
    },
    div: {
        width: '50%',
        height: '30%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: ' space-evenly',
        alignItems: 'center',
        direction: 'ltr',
    },
    btn: {
        padding: '0.25rem 0.5rem',
        borderRadius: '5px',
        boxShadow: ' 3px 3px 3px 2px rgba(0,0,0,0.1) ,-3px -3px 2px rgba(250,250,250,0.1)',
        border: 'unset',
        fontSize: '1rem'
    }
}))
export default Style;