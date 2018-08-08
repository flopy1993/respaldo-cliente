import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './Store'

const Aplication = () => (
    <Provider store={store}>
        <App/>
    </Provider>

)
ReactDOM.render(<Aplication />, document.getElementById('root'));
registerServiceWorker();
