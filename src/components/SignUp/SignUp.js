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
import {register} from '../../controllers/registerController'

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
    validarRegister= async function(){
        let datos = {
          email: this.state.mail,
          password: this.state.password,
          passwordRepetida:this.state.passwordRepetida,
          telefono:this.state.telefono,
          dni:this.state.dni,
          name:this.state.username
        }
        let getRegister = await register(datos);
        if (getRegister.rdo===0 )
        {
          this.props.history.push("/registrohijo")
        }
        if (getRegister.rdo===1)
        {
          alert(getRegister.mensaje)
        }
        
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
            errorapellido:'',
            errormail:'',
            errortelefono:'',
            errordni:'',
            errorusername: '',
            errorpassword: '',
            errorpasswordRepetida: '',
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
            this.setState({errordni: "Complete el dni"});
        }
        if (apellido === '') {
            this.setState({errorapellido: "Complete el apellido"});
        }
        if (mail === '') {
            this.setState({errormail: "Complete el mail"});
        }
        if (telefono === '') {
            this.setState({errortelefono: "Complete el telefono"});
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
            this.validarRegister() // Llama a funcion para ir al controller
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
                                value={this.state.apellido}
                                handleChange={this.handleChange}
                                name="apellido"
                                error={this.state.errorapellido}
                                autoFocus
                                icon={<PersonIcon className={this.props.classes.icon}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                label="Mail"
                                value={this.state.mail}
                                handleChange={this.handleChange}
                                name="mail"
                                error={this.state.errormail}
                                autoFocus
                                icon={<PersonIcon className={this.props.classes.icon}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                label="Dni"
                                value={this.state.dni}
                                handleChange={this.handleChange}
                                name="dni"
                                error={this.state.errordni}
                                autoFocus
                                icon={<PersonIcon className={this.props.classes.icon}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputSignUp}>
                            <CustomInput
                                label="Numero de Telefono"
                                value={this.state.telefono}
                                handleChange={this.handleChange}
                                name="telefono"
                                error={this.state.errortelefono}
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