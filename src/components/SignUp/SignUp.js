import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import Button from "@material-ui/core/Button";
import KeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import CircularProgress from "@material-ui/core/CircularProgress";
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import CustomInput from '../CustomInput'

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            apellido:'',
            mail:'',
            telefono:'',
            dni:'',
            password: '',
            passwordRepetida: '',
            errorapellido:'',
            errormail:'',
            errortelefono:'',
            errordni:'',
            errorusername: '',
            errorpassword: '',
            errorpasswordRepetida: '',
            loading: false,
            smallScreen: false,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    };

    resize() {
        this.setState({ smallScreen: window.innerWidth <= 630 });
    };

    validarPassword = (p1, p2) => {
        if (p1 !== p2) {
            this.setState({
                errorpasswordRepetida: "Las contraseñas no coinciden",
            });
        }
    };

    errorReset = () => {
        this.setState({
            errorusername: '',
            errorpassword: '',
            errorpasswordRepetida: '',
            errorapellido:'',
            errormail:'',
            errortelefono:'',
            errordni:'',
        });
    };

    noErrors = () => {
        return this.state.errorusername === '' && this.state.errorpassword === '' && this.state.errorpasswordRepetida === ''
    };

    emptyInputs = () => {
        const {username, password, passwordRepetida,dni,apellido,mail,telefono} = this.state;
        if (username === '') {
            this.setState({errorusername: "Complete el nombre de usuario"});
        }
        if (password === '') {
            this.setState({errorpassword: "Complete la contraseña"});
        }
        if (passwordRepetida === '') {
            this.setState({errorpasswordRepetida: "Repita la contraseña"});
        }
        if (dni === '') {
            this.setState({errorpasswordRepetida: "Complete el dni"});
        }
        if (apellido === '') {
            this.setState({errorpasswordRepetida: "Complete el apellido"});
        }
        if (mail === '') {
            this.setState({errorpasswordRepetida: "Complete el mail"});
        }
        if (telefono === '') {
            this.setState({errorpasswordRepetida: "Complete el telefono"});
        }
    };

    // handle400 = err => {
    //     err.text().then(error => {
    //         let errorObject = JSON.parse(error);
    //         if (errorObject.code === "BAD_PASSWORD") {
    //             this.setState({ errorpassword: errorObject.msg });
    //         }
    //         if (errorObject.code === "BAD_USERNAME") {
    //             this.setState({ errorusername: errorObject.msg });
    //         }
    //     });
    //     return Promise.reject(401);
    // };

    handleChange = e => {
        const { name, value } = e.target;
        this.errorReset();
        this.setState(
            {[name]: value},
            () => {
                if (name === 'passwordRepetida')
                    this.validarPassword(this.state.password, this.state.passwordRepetida)
            });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password, passwordRepetida,dni,apellido,mail,telefono} = this.state;
        if (username !== '' && password !== '' && passwordRepetida !== '' && this.noErrors()) {
            this.setState(
                { loading:true },
                () => {//aca iria el post y abajo en el () iria data
                    this.setState(
                        { loading: false },
                        () => {
                                Swal.fire(
                                        'Registrado!',
                                        'Su usuario ha sido registrado correctamente.',
                                        'success'
                                ).then(() => {
                                    this.props.history.push("/main")
                                    });
                                });
                });
        } else {
            this.emptyInputs();
        }
    };

    render(){
        return (
            <div className={this.props.classes.background}>
                {this.state.loading && (
                    <div
                        style={{
                            width: '100%',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            position: 'fixed',
                            zIndex: 1
                        }}
                    >
                        <CircularProgress />
                    </div>
                )}
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Paper className={this.props.classes.paper}>
                        <Typography
                            component="h1"
                            variant="h5"
                            className={this.props.classes.title}
                        >
                            Registro de usuario
                        </Typography>
                    <form className={this.props.classes.form}>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                label="Nombre"
                                value={this.state.username}
                                handleChange={this.handleChange}
                                name="username"
                                error={this.state.errorusername}
                                autoFocus
                                icon={<PersonIcon className={this.props.classes.icon}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                label="Apellido"
                                value={this.state.username}
                                handleChange={this.handleChange}
                                name="username"
                                error={this.state.errorusername}
                                autoFocus
                                icon={<PersonIcon className={this.props.classes.icon}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                label="Mail"
                                value={this.state.username}
                                handleChange={this.handleChange}
                                name="username"
                                error={this.state.errorusername}
                                autoFocus
                                icon={<PersonIcon className={this.props.classes.icon}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                label="Dni"
                                value={this.state.username}
                                handleChange={this.handleChange}
                                name="username"
                                error={this.state.errorusername}
                                autoFocus
                                icon={<PersonIcon className={this.props.classes.icon}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                label="Nombre"
                                value={this.state.username}
                                handleChange={this.handleChange}
                                name="Numero de Telefono"
                                error={this.state.errorusername}
                                autoFocus
                                icon={<PersonIcon className={this.props.classes.icon}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                name="password"
                                label="Contraseña"
                                value={this.state.password}
                                handleChange={this.handleChange}
                                type="password"
                                error={this.state.errorpassword}
                                icon={<KeyIcon className={this.props.classes.icon} />}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                name="passwordRepetida"
                                label="Repetir Contraseña"
                                value={this.state.passwordRepetida}
                                handleChange={this.handleChange}
                                type="password"
                                error={this.state.errorpasswordRepetida}
                                icon={<KeyIcon className={this.props.classes.icon} />}
                            />
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={this.props.classes.submit}
                            onClick={this.handleSubmit}
                        >
                            Registrarme
                        </Button>
                    </form>
                    <Typography className={this.props.classes.link}>
                        ¿Ya estás registrado? {this.state.smallScreen ? <br /> : ' '}
                        <Link to='/login' style={{color: "blue", fontVariant: "underline"}}>
                            Ingresá a tu cuenta aquí
                        </Link>
                    </Typography>
                    <Typography className={this.props.classes.link}>
                        ¿Olvidaste tu constraseña? {this.state.smallScreen ? <br /> : ' '}
                        <Link to='/login' style={{color: "blue", fontVariant: "underline"}}>
                            Ingresa aquí
                        </Link>
                    </Typography>
                    </Paper>
                </Grid>
            </div>
        );
    }
};

export default withStyles(styles)(SignUp);