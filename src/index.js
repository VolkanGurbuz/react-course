import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";

//first execute code will be run on the html we load on our project
// we want to render our app html element our custom element which in app.js file into this place of this element root id
ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
