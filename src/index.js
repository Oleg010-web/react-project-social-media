import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {addPost} from './redux/state'
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { textPostChange } from './redux/state';
import { dialogPost } from './redux/state';
import { messagePostChange } from './redux/state';
import { renderChanging } from './redux/state';

let renderFullPage = (state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} textPostChange={textPostChange} dialogPost={dialogPost} messagePostChange={messagePostChange} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

renderFullPage(state);
renderChanging(renderFullPage);
reportWebVitals();