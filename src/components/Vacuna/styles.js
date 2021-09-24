import lightBlue from '@material-ui/core/colors/lightBlue';

const styles = theme => ({
    background: {
        backgroundColor: '#eeeeee',
        //backgroundColor: '#c6d6d8',
    },
    
    form:{
            '& .MuiFormControl-root':{
            width:'90%',
            margin:theme.spacing(1),
        }
    },
    grid:{
        margin:theme.spacing(1),
    },
    paperForm: {
        margin:theme.spacing(10),
        padding:theme.spacing(3),
    },

    paper: {
        //display: 'flex',
        backgroundColor: lightBlue[50],
        flexDirection: 'column',
        alignItems: 'center',
        width: "600px",
        height:"500px",
        borderRadius: 5,
        boxShadow: '0px 0px 12px -8px rgba(0, 0, 0, 0.75)',
        marginTop: "2.5%",
        marginBottom: "2.5%",
        marginLeft:"2.5%",
        padding: "35px 50px 35px 50px",
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
