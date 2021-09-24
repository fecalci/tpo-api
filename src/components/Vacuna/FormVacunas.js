import React, {Component} from 'react';
// eslint-disable-next-line 
import {FormControl,FormControlLabel, FormLabel, Grid,RadioGroup,TextField, Radio} from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import DatePicker from './Datepicker';
class FormVacunas extends Component{

    constructor(props){
        super(props);
        this.state = {
            fecha: new Date(),
            peso:'',
            altura:'',
            cabeza:'',
            observaciones:'',
            medicamentos:'',
            estudio:'',
            resultado:'Si',
            errorfecha: new Date(),
            errorpeso:'',
            erroraltura:'',
            errorcabeza:'',
            errorobservaciones:'',
            errormedicamentos:'',
            errorestudio:'',
            errorresultado:''
            };
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

    render(){
        return (
            <form className={this.props.classes.form}>
                    <Grid container>
                        <Grid item xs={6}>
                            <DatePicker
                            name="fecha"
                            label="Fecha"
                            value={this.state.fecha}
                            onChange={this.handleChange}
                            />
                            <TextField
                            variant='outlined'
                            label='Peso'
                            name='peso'
                            value={this.state.peso}
                            onChange={this.handleChange}
                            autoFocus
                            />
                            <TextField
                            variant='outlined'
                            label='Altura'
                            name='altura'
                            value={this.state.altura}
                            onChange={this.handleChange}
                            autoFocus
                            />
                            <TextField
                            variant='outlined'
                            label='Cabeza'
                            name='cabeza'
                            value={this.state.cabeza}
                            onChange={this.handleChange}
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={6} >
                        <TextField
                            variant='outlined'
                            label='Observaciones'
                            name='observaciones'
                            value={this.state.observaciones}
                            onChange={this.handleChange}
                            autoFocus
                            />
                            <TextField
                            variant='outlined'
                            label='Medicamentos'
                            name='medicamentos'
                            value={this.state.medicamentos}
                            onChange={this.handleChange}
                            autoFocus
                            />
                            <TextField
                            variant='outlined'
                            label='Estudio'
                            name='estudio'
                            value={this.state.estudio}
                            onChange={this.handleChange}
                            autoFocus
                            />
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
            </form>
        );
    }
}
export default withStyles(styles)(FormVacunas);