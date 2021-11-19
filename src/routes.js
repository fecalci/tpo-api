import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Registro from "./components/Registro/Registro";
import LineChart from './components/Graphs/LineChar';
import VaccineRegister from './components/VaccineRegister';
import DashboardApp from './components/DashboardApp'
import Dashboard from './components/Dashboard'
import RegistroHijo from './components/RegistroHijo/FormRegistro'

const Routes= () => (
    <BrowserRouter>
        <Switch>           
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/signup" component={SignUp} /> 
            <Route exact path="/fd" component={LineChart} /> 
            <Route exact path="/registro" component={Registro} /> 
            <Route exact path="/vacreg" component={VaccineRegister} />
            <Route exact path="/profile" component={DashboardApp} />
            <Route exact path="/char" component={Dashboard} />
            <Route exact path="/registrohijo" component={RegistroHijo} />
        </Switch>
    </BrowserRouter>
);
export default Routes