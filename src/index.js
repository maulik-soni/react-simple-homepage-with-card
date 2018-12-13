import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import storeObj from "./components/main";
import {Provider} from "react-redux";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');

ReactDOM.render(
    <Provider store={storeObj.store}>
        <App store={storeObj.store} history={storeObj.history}/>
    </Provider>, 
    target
);

registerServiceWorker();
