import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/RootReducer';
//boxicon
import './assets/boxicons-2.0.9 2/css/boxicons.min.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


