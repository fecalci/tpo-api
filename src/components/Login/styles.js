import teal from '@material-ui/core/colors/teal';
import lightBlue from '@material-ui/core/colors/lightBlue';

const styles = theme => ({
    background: {
        backgroundColor: '#efefef',
        //backgroundColor: '#c6d6d8',
        [theme.breakpoints.down(516)]: {
            backgroundColor: 'white'
        }
    },
    gridLogin: {
        minHeight: '100vh',
    },
    title: {
        marginBottom: 15,
        color: '#20485d',
        marginTop: 10,
        fontSize: 30,
    },
    formLogin: {
        marginTop:"2.5%",
        marginBottom:"2.5%",
        width: 400,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: "35px 50px 35px 50px",
        borderRadius: 5,
        boxShadow: '0px 0px 12px -8px rgba(0, 0, 0, 0.75)',
        [theme.breakpoints.down(516)]: {
            minHeight: '80vh',
            maxHeight: '90vh',
            maxWidth: '80%',
            padding: 10,
            margin: 0,
            boxShadow: "none",
            borderRadius: 0,
        },
        backgroundColor: 'white',
    },
    inputLogin: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInButton: {
        marginTop: 20,
        backgroundColor: lightBlue[800],
        '&:hover': {
            backgroundColor: lightBlue[900]
        }
    },
    signUpButton: {
        background: teal[800],
        '&:hover': {
            backgroundColor: teal[900]
        }
    }
});

export default styles;
