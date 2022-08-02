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
    }
}))
export default Style;