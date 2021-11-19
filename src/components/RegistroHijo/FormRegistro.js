
// eslint-disable-next-line 
import {FormControl,Typography, Button, Grid,RadioGroup,TextField, Radio} from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import DatePicker from './Datepicker';
import {registerBebe} from '../../controllers/registerBebeController'
import React, {Component} from 'react';


class FormRegristoHijo extends Component{

    constructor(props){
        super(props);
        this.state = {
            fecha: new Date(),
            name:'',
            sexo:'',
            peso:'',
            altura:'',
            cabeza:'',
            sangre:'',
            alergias:'',
            enfermedad:'',
            loading: false,
            errorfecha: new Date(),
            errorpeso:'',
            erroraltura:'',
            errorcabeza:'',
            errorobservaciones:'',
            errormedicamentos:'',
            errorestudio:'',
            errorresultado:'',
            };
        }
        handleChangeFields(i, e) {
            let formValues = this.state.formValues;
            formValues[i][e.target.name] = e.target.value;
            this.setState({ formValues });
          }
        
          addFormFields() {
            this.setState(({
              formValues: [...this.state.formValues, { alergias: ""}]
            }))
          }

          addFormFieldsEstudios() {
            this.setState(({
              formValues2: [...this.state.formValues2, { enfermedad: "" }]
            }))
          }

          removeFormFields(i) {
            let formValues = this.state.formValues;
            formValues.splice(i, 1);
            this.setState({ formValues });
          }
          removeFormFieldsEstudios(i) {
            let formValues2 = this.state.formValues2;
            formValues2.splice(i, 1);
            this.setState({ formValues2 });
          }

        handleChange = e => {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            });
        };

        validar= async function(){
            let datos = {
                sangre: this.state.sangre,
              cabeza: this.state.cabeza,
              peso:this.state.peso,
              altura:this.state.altura,
              fecha:this.state.fecha,
              name:this.state.name,
              alergias:this.state.alergias,
              enfermedad:this.state.enfermedad,
              sexo:this.state.sexo
            }
            let getRegister = await registerBebe(datos);
            if (getRegister.rdo===0 )
            {
              this.props.history.push("/");
            }
            if (getRegister.rdo===1)
            {
              alert(getRegister.mensaje)
            }
            
        }
        
        handleSubmit = (e) => {
            e.preventDefault();
            const {name, fecha, altura,peso,cabeza,sangre,sexo,alergias,enfermedad} = this.state;
            if (name !== '' && fecha !== '' && altura !== '' && peso !== '' &&
            cabeza !== '' && sangre !== '' && sexo !== '' && alergias !== '' &&  enfermedad !== '') {
                this.validar() // Llama a funcion para ir al controller
                } };
    render(){
        return (
            <form className={this.props.classes.form}
            onSubmit={this.handleSubmit}>
                <Typography
                component="h1"
                variant="h10"
                className={this.props.classes.title}
                >
                Registra a tu bebe
                </Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography
                            component="h1"
                            variant="h10"
                            className={this.props.classes.titleformpading}
                        >
                            Fecha de Nacimiento:
                            </Typography>
                            <DatePicker
                            name="fecha"
                            label="Fecha"
                            value={this.state.fecha}
                            onChange={this.handleChange}
                            />
                            <Typography
                            component="h1"
                            variant="h10"
                            className={this.props.classes.titleformpading}
                        >
                            Sexo:
                            </Typography>
                            <TextField
                            variant='outlined'
                            label='Ej: Masculino, Femenino'
                            name='sexo'
                            value={this.state.sexo}
                            onChange={this.handleChange}
                            autoFocus
                            />
                            <Typography
                            component="h1"
                            variant="h10"
                            className={this.props.classes.titleformpading}
                        >
                            Nombre del bebe:
                            </Typography>
                            <TextField
                            variant='outlined'
                            label='Nombre'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                            autoFocus
                            />

                            <Typography
                            component="h1"
                            variant="h10"
                            className={this.props.classes.titleform}
                        >
                            Grupo Sanguineo:
                            </Typography>
                            <TextField
                            variant='outlined'
                            label='Ej: -A'
                            name='sangre'
                            value={this.state.sangre}
                            onChange={this.handleChange}
                            autoFocus
                            />
                    </Grid>
                    <Grid item xs={6} className="gridinline">
                            <Typography
                            component="h1"
                            variant="h10"
                            className={this.props.classes.titleformpading}
                        >
                            Alergias:
                            </Typography>
                            <TextField
                                variant='outlined'
                                label='Ej: Mani'
                                name='alergias'
                                value={this.state.alergias}
                                onChange={this.handleChange}
                                autoFocus
                            />


                            <Typography
                                component="h1"
                                variant="h10"
                                className={this.props.classes.titleformpading}
                        >
                            Enfermedades Crónicas:
                            </Typography>
                            <TextField
                                variant='outlined'
                                label='Ej: Diabetes'
                                name='enfermedad'
                                value={this.state.enfermedad}
                                onChange={this.handleChange}
                                autoFocus
                            />

                            <Typography
                            component="h1"
                            variant="h10"
                            className={this.props.classes.titleformpading}
                        >
                            Peso del bebe:
                            </Typography>
                            <TextField
                            variant='outlined'
                            label='Kg: ( ej: 5,5 )'
                            name='peso'
                            value={this.state.peso}
                            onChange={this.handleChange}
                            autoFocus
                            />

                            <Typography
                            component="h1"
                            variant="h10"
                            className={this.props.classes.titleform}
                        >
                            Altura:
                            </Typography>
                            <TextField
                            variant='outlined'
                            label='Cm: ( ej: 50,5)'
                            name='altura'
                            value={this.state.altura}
                            onChange={this.handleChange}
                            autoFocus
                            />

                            <Typography
                            component="h1"
                            variant="h10"
                            className={this.props.classes.titleform}
                            >
                            Diametro de cabeza:
                            </Typography>
                            <TextField
                            variant='outlined'
                            label='Cm: ( ej: 50,5)'
                            name='cabeza'
                            value={this.state.cabeza}
                            onChange={this.handleChange}
                            autoFocus
                            />
                    
                        </Grid>
                    </Grid>
                    <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginTop: 50 , marginLeft:550, width:300}}
                            className={this.props.classes.signInButton}
                        >
                            Completar Registro
                    </Button>
            </form>
        );
    }
}
export default withStyles(styles)(FormRegristoHijo);