import React from 'react';
import ReactDom from 'react-dom';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');

// ReactDom.render(<PrimeraApp saludo = "Hola es mi primera app" />, divRoot);
// ReactDom.render(<PrimeraApp saludo = {123} />, divRoot);
// ReactDom.render(<PrimeraApp saludo = "Hola Mundo" />, divRoot);
ReactDom.render(<CounterApp value = {123} />, divRoot);