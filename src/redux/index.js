import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App.jsx';

//the Provider function is where the 'Connect' between the components actually occurs,
//thus only the components within Provider can be connected; ofcourse this connects all components
//because App imports all child components.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
