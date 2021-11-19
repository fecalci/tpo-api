import { Box, Grid, Container, Typography } from '@mui/material';
import { Card, Stack } from '@mui/material';
import CardContent from '@material-ui/core/CardContent';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './ControlPediatrico/styles'
import {Component} from 'react';
import {Navigation} from './navigation'
// ----------------------------------------------------------------------
class DashboardApp extends Component {
  constructor(){
      super();
      this.state = {    
        bebe:JSON.parse(localStorage.getItem("ActualBebe")) ,
        bebeName:localStorage.getItem("ActualBebeName") ,    
        bebeCabeza:localStorage.getItem("ActualBebeCabeza") ,
        bebeFecha:localStorage.getItem("ActualBebeFecha") ,
        bebeSangre:localStorage.getItem("ActualBebeSangre") ,
        bebeSexo:localStorage.getItem("ActualBebeSexo") ,
        bebePeso:localStorage.getItem("ActualBebePeso") ,
        bebeAltura:localStorage.getItem("ActualBebeAltura") ,
      };

  }
  render(){
  return (
    <div>
    <Navigation/>
    <Typography 
        component="h1"
        variant="h10"
        className={this.props.classes.title}
        sx={{ marginBottom:'100px', marginTop:'150px' }}>
          Información importante de mi hijo {this.state.bebeName}
        </Typography>      
    <Box sx={{ display: 'flex', justifyContent:'center', gap:'100px' }}>
      <Card component="main">
                {this.state.bebe.map((item,i) => {
                return(
                  <div>
                    <CardContent>
                    <Typography 
                    component="h1"
                    variant="h10"
                    className={this.props.classes.title}
                    key={item} value={item}>
                    </Typography>        
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Listado de alergias: {item.alergias}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Listado de enfermedades: {item.enfermedad}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Tamaño de cabeza: {this.state.bebeCabeza}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Fecha de nacimiento: {this.state.bebeFecha}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Tipo sanguineo: {this.state.bebeSangre}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Sexo: {this.state.bebeSexo}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Peso: {this.state.bebePeso}
                  </Typography>
                  </CardContent>
                </div>                                              
                )})}   
                </Card>                                                           
    <Card component="main" >
                {this.state.bebe.map((item,i) => {
                return(
                  <div>
                    <CardContent>
                    <Typography 
                    component="h1"
                    variant="h10"
                    className={this.props.classes.title}
                    key={item} value={item}>
                    </Typography>        
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Listado de alergias: {item.alergias}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Listado de enfermedades: {item.enfermedad}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Tamaño de cabeza: {this.state.bebeCabeza}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Fecha de nacimiento: {this.state.bebeFecha}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Tipo sanguineo: {this.state.bebeSangre}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Sexo: {this.state.bebeSexo}
                  </Typography>
                  <br></br>
                  <Typography 
                  component="h1"
                  variant="h10"
                  className={this.props.classes.titleVisual}
                  key={item} value={item}>
                  Peso: {this.state.bebePeso}
                  </Typography>
                  </CardContent>
                </div>                                              
                )})}   
                </Card>                                      
    </Box>
    </div>
    );
  }
}

export default withStyles(styles)(DashboardApp);