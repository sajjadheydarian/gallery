import {makeStyles} from "@material-ui/styles";

const Style=makeStyles(Theme=>({
    root:{
        height:'100vh',
        backgroundColor: '#dcdcdc',
        // overflow:'hidden'
        display:'flex',
        alignContent:'space-around',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    main:{
        display: 'flex',
        padding:'1rem',
        justifyContent:'space-between',
    },
    sidebar:{
        height: 'calc(100vh - 247px)',
        width: '25%',
        // display: 'inline',
        background: '#faebd7',
        borderRadius:'5px',
        display:"flex",
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    home:{
        height: 'calc(100vh - 247px)',
        width: 'calc(75% - 1rem)',
        background: '#faebd7',
        borderRadius:'5px',
    }
}));
export default Style;