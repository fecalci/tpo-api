import React, {Component} from 'react';
import FormRegristo from './FormRegistro';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import {Paper,Typography,Grid} from '@material-ui/core'
import { Navigation } from '../navigation';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddIcon from '@material-ui/icons/Add';
import {indigo,grey} from '@material-ui/core/colors/';

const drawerWidth = 240;

class RegistroHijo extends Component{

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
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                
                <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                    <Toolbar />
                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.title}
                        >
                        Registra a tu bebe
                        </Typography>
                        <FormRegristo/>
                </Box>
            </Box>
        </div>
        );
    }
}
export default withStyles(styles)(RegistroHijo)