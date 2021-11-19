import React, {Component} from 'react';
// eslint-disable-next-line 
import {FormControl,Typography, Button, Grid,RadioGroup,TextField, Radio} from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import DatePicker from './Datepicker';
import { IconButton} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import AppBar from '@mui/material/AppBar';
import { Navigation } from '../navigation';
import {registerControl,getControlesByBebe} from '../../controllers/ControlController'
class FormRegistroControl extends Component{

    constructor(props){
        super(props);
        this.state = {
            fecha_control: new Date(),
            peso:'',
            altura:'',
            cabeza:'',
            medicamento:'',
            observacion:'',
            estudio:'',
            resultado:'',
            loading: false,
            errorfecha: new Date(),
            errorpeso:'',
            erroraltura:'',
            errorcabeza:'',
            errorobservaciones:'',
            errormedicamentos:'',
            errorestudio:'',
            errorresultado:'',
            formValues:[{ estudio: "", resultado : "" }],
            formValues2:[{ medicamento: "", observacion : "" }]
            };
        }
        handleChangeFields(i, e) {
            let formValues = this.state.formValues;
            formValues[i][e.target.name] = e.target.value;
            this.setState({ formValues });
          }
        
          addFormFields() {
            this.setState(({
              formValues: [...this.state.formValues, { estudio: "", resultado: "" }]
            }))
          }

          addFormFieldsEstudios() {
            this.setState(({
              formValues2: [...this.state.formValues2, { medicamento: "", observacion: "" }]
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
        
          handleSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.state.formValues));
          }

        handleChange = e => {
            const { name, value } = e.target;
            this.errorReset();
            this.setState({
                [name]: value
            });
        };

        errorReset = () => {
            this.setState({
                errorfecha: new Date(),
                errorpeso:'',
                erroraltura:'',
                errorcabeza:'',
                errorobservaciones:'',
                errormedicamentos:'',
                errorestudio:'',
                errorresultados:''
            });
        };
        
        validar= async function(){
            let datos = {
                estudio: this.state.estudio,
              cabeza: this.state.cabeza,
              peso:this.state.peso,
              altura:this.state.altura,
              fecha_control:this.state.fecha_control,
              observacion:this.state.observacion,
              medicamento:this.state.medicamento,
              observacion:this.state.observacion,
              resultado:this.state.resultado
            }
            let getRegister = await registerControl(datos);
            if (getRegister.rdo===0 )
            {
                let getControles = await getControlesByBebe();
              this.props.history.push("/controlVisualizar");
            }
            if (getRegister.rdo===1)
            {
              alert(getRegister.mensaje)
            }
            
        }
        
        handleSubmit = (e) => {
            e.preventDefault();
            const {estudio, resultado, cabeza,observacion,medicamento,peso,altura,fecha_control} = this.state;
            if (estudio !== '' && resultado !== '' && observacion !== '' && peso !== '' &&
            cabeza !== '' && medicamento !== '' && altura !== '' && medicamento !== '' &&  fecha_control !== '') {
                this.validar() // Llama a funcion para ir al controller
                } };

        emptyInputs = () => {
            // eslint-disable-next-line
            const {fecha, peso, altura, cabeza, observaciones, medicamentos, estudio, resultado} = this.state;
            if (peso === '') 
                this.setState({ errorusername: 'Complete el nombre de usuario' });
            
            if (altura === '') 
                this.setState({ errorpassword: 'Complete la contraseña' });
            
            this.setState({ loading: false });
        };

    render(){
        return (
            <div>
                <div>
                    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Navigation/>
                    </AppBar>
                </div>
                <div className={this.props.classes.divnav}> 
                    <form className={this.props.classes.form}
                    onSubmit={this.handleSubmit}>
                            <Grid container>
                                <Grid item xs={6}>
                                <Typography
                                    component="h1"
                                    variant="h10"
                                    className={this.props.classes.titleformpading}
                                >
                                    Fecha de Visita:
                                    </Typography>
                                    <DatePicker
                                    name="fecha"
                                    label="Fecha"
                                    value={this.state.fecha_control}
                                    onChange={this.handleChange}
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
                                <Grid item xs={6} >
                                    <Typography
                                        component="h1"
                                        variant="h10"
                                        className={this.props.classes.titleformpading}
                                    >
                                    Medicamento:
                                    </Typography>
                                    <TextField
                                        variant='outlined'
                                        label='Medicamento'
                                        name='medicamento'
                                        value={this.state.medicamento}
                                        onChange={this.handleChange}
                                        autoFocus
                                    />
                                    <Typography
                                        component="h1"
                                        variant="h10"
                                        className={this.props.classes.titleform}
                                    >
                                    Observacion:
                                    </Typography>
                                    <TextField
                                        variant='outlined'
                                        label='Observacion'
                                        name='observacion'
                                        value={this.state.observacion}
                                        onChange={this.handleChange}
                                        autoFocus
                                    />
                                    
                                    <Typography
                                        component="h1"
                                        variant="h10"
                                        className={this.props.classes.titleformpading}
                                    >
                                    Estudios Medicos:
                                    </Typography>
                                    <TextField
                                        variant='outlined'
                                        label='Estudio'
                                        name='estudio'
                                        value={this.state.estudio}
                                        onChange={this.handleChange}
                                        autoFocus
                                    />
                                    <Typography
                                        component="h1"
                                        variant="h10"
                                        className={this.props.classes.titleform}
                                    >
                                    Resultado:
                                    </Typography>
                                    <TextField
                                        variant='outlined'
                                        label='Resultado'
                                        name='resultado'
                                        value={this.state.resultado}
                                        onChange={this.handleChange}
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    style={{ marginTop: 20 }}
                                    className={this.props.classes.signInButton}
                                >
                                    Agregar Control
                            </Button>
                    </form>
            </div>   
        </div>
        );
    }
}
export default withStyles(styles)(FormRegistroControl);