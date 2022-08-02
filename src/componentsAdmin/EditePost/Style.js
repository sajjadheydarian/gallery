import {makeStyles} from "@material-ui/styles";

const Style = makeStyles((Theme) => ({
    root: {
        background: '#FBFFE2',
        display:"flex",
        flexDirection:'column'
    },
    form: {
        margin: '2rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        height: 'calc(100vh - 6rem)',
        justifyContent: 'space-evenly',
        alignItems: 'self-start',
        background: '#EDD2F3',
        borderRadius: '10px',
        boxShadow: ' 8px 8px 5px rgba(0,0,0,0.2) ,-8px -8px 5px #fff',
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
    input: {
        border: 'unset',
        boxShadow: 'inset 6px 6px 5px rgb(0 0 0 / 20%), -4px -4px 7px #fff',
        borderRadius: '10px',
        width: '90%',
        height: '20%',
        direction:"ltr",
        padding:'0.5rem'
    },
    label: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    btn: {
        padding: '1rem 2rem',
        borderRadius: '5px',
        boxShadow: ' 4px 4px 4px 2px rgba(0,0,0,0.2) ,-4px -4px 2px rgba(250,250,250,0.5)',
        border: 'unset',
        fontSize: '1.5rem'
    }

}));
export default Style;