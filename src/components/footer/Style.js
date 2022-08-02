import {makeStyles} from "@material-ui/styles";


const Style = makeStyles(Theme => ({
    root:{
        height:'15vh',
        backgroundColor: 'white',
        padding:'0.5rem',
        margin:'0.5rem 1rem',
        borderRadius:'5px',
        direction:'ltr !important',
        display:'flex',
        justifyContent:'space-evenly'
    },
    titre:{
        padding: '0.5rem',
        margin: '0.5rem',
        background: '#B689C0',
        borderRadius: '5px',
        color: 'white'
    },
    text:{
        margin:'0.5rem'
    },
    span:{
        margin:'0.5rem'
    },
    div:{
        width:'50%'
    }
}));

export default Style;