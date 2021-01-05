import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state'
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export let renderFullPage = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
export default render;