import React, { Component } from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Login from './containers/Login'
import Clientes from './containers/Clientes'
import Empresas from './containers/Empresas'
import Proveedores from './containers/Proveedores'
import CuentasCorrientes from './containers/CuentasCorrientes'

import Menu from './components/Menu'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact={true} path='/' component={Login} />
            <Route path='/clientes' component={Clientes} />
            <Route path='/login' component={Login} />
            <Route path='/empresas' component={Empresas} />
            <Route path='/proveedores' component={Proveedores} />
            <Route path='/cuentascorrientes' component={CuentasCorrientes} />
            <Redirect to='/' />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
