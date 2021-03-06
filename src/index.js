import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const store=createStore(reducer);
 
const appRoot=(
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'));
registerServiceWorker();
