import {makeStyles} from "@material-ui/styles";

const Style = makeStyles(Theme => ({
    root: {
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background:'#F1F0C0',
        fontWeight:"bold"
    },
    loginDiv:{
        width: '50%',
        height: 'calc(100% - 20rem)',
        display: 'flex',
        margin: '10rem 25%',
        direction:'ltr',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        background: '#F2FA5A',
        borderRadius:'40px',
        boxShadow:' 4px 4px 4px rgb(0 0 0 / 20%), -4px -4px 4px #ffffff',
        padding:'2rem'
    },
    image:{
        width:'80px',
        height:'80px',
        borderRadius:'50%',
        boxShadow:' 2px 2px 2px rgb(0 0 0 / 20%), -2px -2px 2px #ffffff'
    },
    labelDiv: {
        direction: 'ltr !important',
        display: 'flex',
        justifyContent: 'space-between',
        width: '34vh',
        alignItems:'center'
    },
    input: {
        border: 'none',
        background: 'white',
        borderRadius: '20px',
        padding: '0.5rem',
        marginLeft:'1rem',
        width:'80%'
    },
    btn:{

        padding: '0.25rem 0.5rem !important',
        borderRadius: '5px !important',
        boxShadow: ' 4px 4px 4px 2px rgba(0,0,0,0.1) ,-4px -4px 2px rgba(250,250,250,0.3) !important',
        border: 'unset !important',
        fontSize: '1rem !important',
        background:'white !important',
        margin:'0.5rem !important'
    },
    div:{
        width: '98%',
        height: '30%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: ' space-evenly',
        alignItems: 'center',
        direction: 'ltr',
    }
}));

export default Style;