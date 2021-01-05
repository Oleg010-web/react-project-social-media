import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { renderFullPage } from "./render";
import state from './redux/state';



renderFullPage(state);
reportWebVitals();
