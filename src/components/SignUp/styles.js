import lightBlue from '@material-ui/core/colors/lightBlue';

const styles = theme => ({
    background: {
        backgroundColor: '#efefef',
        //backgroundColor: '#c6d6d8',
        [theme.breakpoints.down(516)]: {
            backgroundColor: 'white'
        }
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "400px",
        borderRadius: 5,
        boxShadow: '0px 0px 12px -8px rgba(0, 0, 0, 0.75)',
        marginTop: "2.5%",
        marginBottom: "2.5%",
        [theme.breakpoints.down(516)]: {
            maxWidth: '80%',
            padding: 10,
            boxShadow: "none",
            margin: 0,
            borderRadius: 0,
        },
        padding: "35px 50px 35px 50px",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: 5,
    },
    submit: {
        marginTop: 15,
        backgroundColor: lightBlue[800],
        color: "white",
        '&:hover': {
            backgroundColor: lightBlue[900]
        }
    },
    inputSignUp: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        marginRight: 5,
        color: "grey"
    },
    title: {
        marginBottom: 15,
        color: '#20485d',
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center'
    },
    link:{
        marginTop: 15,
        textAlign: "center",
        fontSize: 14,
    }
});

export default styles;
