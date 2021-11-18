import React, {Component} from 'react';
import { Grid } from '@material-ui/core/index';
import Typography from "@material-ui/core/Typography/index";
import Button from "@material-ui/core/Button/index";
import CustomInput from '../CustomInput';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import Swal from 'sweetalert2'
import {login} from '../../controllers/loginController'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            usuarioValido:false,
            errorusername: '',
            errorpassword: '',
        };        
    }

    validarLogin= async function()
{
    let datos = {
      email: this.state.email,
      password: this.state.password
    }
    let getLogin = await login(datos);
    if (getLogin.rdo===0 )
    {
      this.state.usuarioValido=true
      this.props.history.push("/")
    }
    if (getLogin.rdo===1)
    {
      alert(getLogin.mensaje)
    }
    
}

    loginUser=()=>
        {
        if (this.state.email!=="" && this.state.password!=="")
        {
            this.validarLogin();
        }
            
        }
        

    errorReset = () => {
        this.setState({
            errorusername: '',
            errorpassword: ''
        });
    };

    emptyInputs = () => {
        const { email, password } = this.state;
        if (email === '') 
            this.setState({ errorusername: 'Complete el nombre de usuario' });
        
        if (password === '') 
            this.setState({ errorpassword: 'Complete la contraseña' });
        
        this.setState({ loading: false });
    };


    handleClick = () => {
        this.props.history.push('/signup');
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.errorReset();
        this.setState({
            [name]: value
        });
    };

    // handle401 = err => {
    //     err.text().then(error => {
    //         let errorObject = JSON.parse(error);
    //         if (errorObject.code === "BAD_PASSWORD") {
    //             this.setState({ errorpassword: errorObject.msg });
    //         }
    //         if (errorObject.code === "USER_NOT_FOUND") {
    //             this.setState({ errorusername: errorObject.msg });
    //         }
    //     });
    //     return Promise.reject(401);
    // };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.usuarioValido) {
            alert("ESTA OK");
            this.setState(
                { loading:true },
                () => {
                        this.setState(
                            { loading: false },
                            () => {
                                Swal.fire(
                                    'Bienvenido!',
                                    'Login realizado.',
                                    'success'
                            ).then(() => {
                                this.props.history.push("/")
                                });
                            });
                        });
            } 
        else {
            this.emptyInputs();
        }
    };

    // componentDidMount() {
    //     if (window.localStorage.getItem('token')) {
    //         const role = getCookie("role");
    //         if (role === "user")
    //             this.props.history.push('/main');
    //         else
    //             this.props.history.push('/users');
    //     }
    // };

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
                    className={this.props.classes.gridLogin}
                >
                    <form
                        className={this.props.classes.formLogin}
                        onSubmit={this.handleSubmit}
                    >
                        <Typography
                            component="h1"
                            variant="h5"
                            className={this.props.classes.title}
                        >
                            Inicio de sesión
                        </Typography>
                        <div className={this.props.classes.inputLogin}>
                            <CustomInput
                                error={this.state.errorusername}
                                name="email"
                                label="Usuario"
                                type="text"
                                handleChange={this.handleChange}
                                value={this.state.email}
                                icon={<PersonIcon style={{marginRight: 5, color: "grey"}}/>}
                            />
                        </div>
                        <div className={this.props.classes.inputLogin}>
                            <CustomInput
                                error={this.state.errorpassword}
                                name="password"
                                label="Contraseña"
                                type="password"
                                handleChange={this.handleChange}
                                value={this.state.password}
                                icon={<VpnKeyIcon style={{marginRight: 5, color: "grey"}}/>}
                            />
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginTop: 20 }}
                            className={this.props.classes.signInButton}
                            onClick={this.loginUser}
                        >
                            Iniciar sesión
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.handleClick}
                            style={{ marginTop: 20 }}
                            className={this.props.classes.signUpButton}
                        >
                            Crear una cuenta
                        </Button>
                    </form>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Login);