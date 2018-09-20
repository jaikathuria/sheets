import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import App from './components/App'
const numberOfRows = 10;
const numberOfColumns = 10;

ReactDOM.render(
    <App
        numberOfColumns={numberOfColumns}
        numberOfRows={numberOfRows}
    />, 
    document.getElementById('root'))
