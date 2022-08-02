import {makeStyles} from "@material-ui/styles";


const Style =makeStyles((Theme) => ({
    root:{
        display:"flex",
        flexDirection:'column',
        direction:'ltr',
        background:'#FFAFAF',
        margin:'0.5rem',
        padding:'0.5rem',
        borderRadius:'10px'
    },
    btn: {
        margin:'0.5rem',
        marginTop:'1rem',
        padding: '0.25rem 0.5rem',
        borderRadius: '5px',
        boxShadow: ' 4px 4px 4px 2px rgba(0,0,0,0.2) ,-4px -4px 2px rgba(250,250,250,0.2)',
        border: 'unset',
        fontSize: '1rem'
    },
    div: {
        width: '98%',
        height: '30%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: ' space-evenly',
        alignItems: 'center',
        direction: 'ltr',
    },
    label:{
        direction:'ltr',
        fontWeight:'bold'
    },
    input: {
        border: 'unset',
        boxShadow: 'inset 6px 6px 5px rgb(0 0 0 / 20%), -4px -4px 2px rgba(250,250,250,0.2)',
        borderRadius: '10px',
        width: '50%',
        height: '20%',
        direction:"ltr",
        padding:'0.5rem'
    },
}));

export default Style;