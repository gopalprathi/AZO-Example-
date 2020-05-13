import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import * as serviceWorker from './serviceWorker';

let store = createStore(reducers);
ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
