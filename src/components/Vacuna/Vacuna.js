import React, {Component} from 'react';
import FormVacunas from './FormVacunas';
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
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Navigation/>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {backgroundColor: indigo[800], width: drawerWidth, boxSizing: 'border-box' },
                        }}
                >
                    <Toolbar />
                    <Box sx={{ 
                        overflow: 'auto',
                        marginTop: "8%", }}>
                        <List>
                            {['Agregar Registro',].map((text, index) => (
                                <ListItem button key={text}
                                sx={{
                                    color: 'white',
                                    [`& .MuiTypography-root`]: { fontSize:'13' }
                                    }}>
                                    <ListItemIcon>
                                        {index % 1 === 0 ? <AddIcon color="primary"/>:<AddIcon color="primary"/>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['Registro 1', 'Registro 2', 'Registro 3','Registro 4'].map((text, index) => (
                            <ListItem button key={text} sx={{
                                color: 'white',
                                [`& .MuiTypography-root`]: { fontSize:'13' },
                                }}>
                                <ListItemIcon color="primary">
                                    {index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>

                
                <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                    <Toolbar />
                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.title}
                        >
                        Registro de Control Pediatrico
                        </Typography>
                        <FormVacunas/>
                </Box>
            </Box>
        </div>
        );
    }
}
export default withStyles(styles)(Vacunas)