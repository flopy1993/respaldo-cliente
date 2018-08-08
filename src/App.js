import React, { Component } from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Clientes from './containers/Clientes'
import Menu from './components/Menu'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (


      <BrowserRouter>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact={true} path='/' component={Clientes} />
            <Route path='/clientes' component={Clientes} />

            <Redirect to='/' />

          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
