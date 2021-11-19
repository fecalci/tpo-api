import React, {Component} from 'react';
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
const controles=localStorage.getItem('Controles')
class controlVisualizar extends Component{

    constructor(props){
        super(props);
        this.state = {
            lista: JSON.parse(localStorage.getItem('Controles')),
            //altura:JSON.parse(localStorage.getItem('ControlesFull').altura)
            };
        }
        
        handleItemList = (item) => {
            let contr= JSON.parse(localStorage.getItem('ControlesFull'))
            contr.map((control) => {
                if (item.toString()==control.fecha_control.toString()) {
                    localStorage.setItem("ActualControl",JSON.stringify(control));
                    //alert(this.state.altura)
                }
            })
        };
        
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
                            {this.state.lista.map(item => (
                            <ListItem button key={item} sx={{
                                color: 'white',
                                [`& .MuiTypography-root`]: { fontSize:'13' },
                                }}
                                onClick={() => {this.handleItemList(item) }} >{item}
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

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Nombre: {localStorage.getItem('ActualBebeName')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Nacimiento: {localStorage.getItem('ActualBebeFecha')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Fecha de Visita: {localStorage.getItem('fecha_control')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Peso: {localStorage.getItem('peso')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Altura: {localStorage.getItem('altura')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Diametro de Cabeza:{localStorage.getItem('cabeza')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Medicamento:{localStorage.getItem('medicamento')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Observacion: {localStorage.getItem('observacion')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Estudios Medicos: {localStorage.getItem('estudio')}
                        </Typography>

                        <Typography
                        component="h1"
                        variant="h10"
                        className={this.props.classes.titleVisual}
                        >
                        Resultado: {localStorage.getItem('resultado')}
                        </Typography>
                </Box>
            </Box>
        </div>
        );
    }
}
export default withStyles(styles)(controlVisualizar)