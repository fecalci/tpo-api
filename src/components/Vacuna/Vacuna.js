import React, {Component} from 'react';
import FormVacunas from './FormVacunas';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import {Paper} from '@material-ui/core'


class Vacunas extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            };
        }
        
    render(){
        return (
            <div>
            
            <Paper className={this.props.classes.paperForm}>
                <FormVacunas/>
            </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Vacunas)