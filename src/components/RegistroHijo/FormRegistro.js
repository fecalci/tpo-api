import React, {Component} from 'react';
// eslint-disable-next-line 
import {FormControl,Typography, Button, Grid,RadioGroup,TextField, Radio} from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import DatePicker from './Datepicker';
import { IconButton} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
class FormRegristo extends Component{

    constructor(props){
        super(props);
        this.state = {
            fecha: new Date(),
            sexo:'',
            peso:'',
            altura:'',
            loading: false,
            errorfecha: new Date(),
            errorpeso:'',
            erroraltura:'',
            errorcabeza:'',
            errorobservaciones:'',
            errormedicamentos:'',
            errorestudio:'',
            errorresultado:'',
            formValues:[{ alergias: ""}],
            formValues2:[{ enfermedad: ""}]
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

        
        handleClick = (e) => {
            this.props.history.push('/main');
        };



    render(){
        return (
            <form className={this.props.classes.form}
            onSubmit={this.handleClick}>
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
                            value={this.state.peso}
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
                            Grupo Sanguineo:
                            </Typography>
                            <TextField
                            variant='outlined'
                            label='Ej: -A'
                            name='altura'
                            value={this.state.altura}
                            onChange={this.handleChange}
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={6} >
                            {this.state.formValues2.map((element, index) => (
                                <div className="form-inline" key={index}>
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
                                        value={element.alergia || ""}
                                        onChange={e => this.handleChangeFields(index, e)}
                                        autoFocus
                                    />
                                {
                                index ? 
                                    <IconButton
                                        className="button remove"
                                        onClick={() => this.removeFormFieldsEstudios(index)}>
                                        <RemoveIcon/>
                                    </IconButton>
                                : null
                                }
                                </div>
                            ))}
                            <div className="button-section">
                            
                                <IconButton
                                    className="button add"
                                    onClick={() => this.addFormFieldsEstudios()}>
                                    <AddIcon/>
                                </IconButton>
                            </div>


                            
                            {this.state.formValues.map((element, index) => (
                                <div className="form-inline" key={index}>
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
                                        value={element.enfermedad || ""}
                                        onChange={e => this.handleChangeFields(index, e)}
                                        autoFocus
                                    />
                                {
                                index ? 
                                    <IconButton
                                        className="button remove"
                                        onClick={() => this.removeFormFields(index)}>
                                        <RemoveIcon/>
                                    </IconButton>
                                : null
                                }
                                </div>
                            ))}
                            <div className="button-section">
                            
                                <IconButton
                                    className="button add"
                                    onClick={() => this.addFormFields()}>
                                    <AddIcon/>
                                </IconButton>
                            </div>

                        </Grid>
                    </Grid>
                    <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginTop: 20 }}
                            className={this.props.classes.signInButton}
                        >
                            Completar Registro
                    </Button>
            </form>
        );
    }
}
export default withStyles(styles)(FormRegristo);