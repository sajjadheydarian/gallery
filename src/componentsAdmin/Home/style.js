import {makeStyles} from "@material-ui/styles";

const Style = makeStyles(Theme => ({
    rootMain:{
        background:'#faebd7',
        borderRadius:'5px',
        padding:'0.5rem'
    },
    root: {
        padding: '0.5rem',
        margin: '0.5rem',
        background: '#B689C0',
        borderRadius: '5px',
        color: 'white'
    },
    news: {
        display: ' grid',
        gridTemplateColumns: 'repeat(auto-fit , minmax(230px ,1fr))',
        height:'calc(100vh - 320px)',
        overflowY:'scroll',


    },
    postNews: {
        backgroundColor: '#C4DDFF',
        margin: '10px',
        border: ' rgb(206, 110, 110) solid 2px',
        borderRadius: '20px',
        padding: '6px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 5px 3px rgb(0 0 0 / 30%), -4px -5px 3px #ffff',
        transition: 'all .3s ease-in',
        alignItems:'center',
    },
    image:{
        width: '96%',
        borderRadius: '10px',
    },
    text:{
        direction:'ltr !important'
    },
    titrePost:{
        margin:'0.5rem '
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
        marginTop:'1rem',
        width: '98%',
        height: '30%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: ' space-evenly',
        alignItems: 'center',
        direction: 'ltr',
    }
}))
export default Style;