import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import LineChart from './components/Graphs/LineChar'
import Registro from "./components/Registro/Registro";
// import Main from './components/navbar'

const Routes= () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/signup" component={SignUp} /> 
            <Route exact path="/char" component={LineChart} /> 
            <Route exact path="/registro" component={Registro} /> 

        </Switch>
    </BrowserRouter>
);
export default Routes