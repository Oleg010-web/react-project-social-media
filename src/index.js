import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


let renderFullPage = (state)=>{
    ReactDOM.render(
      <BrowserRouter>
          <Provider store = {store}>
            <App />
            </Provider>
        </BrowserRouter>,
      document.getElementById('root')
    );
}

renderFullPage(store.getState());
reportWebVitals();