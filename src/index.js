import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import { BrowserRouter } from 'react-router-dom';


let renderFullPage = (state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App 
            store = {store}
            state={state} 
            dispatch={store.dispatch.bind(store)}
          />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

renderFullPage(store.getState());
store.subscribe( () => {
  let state = store.getState();  
  renderFullPage(state);
});
reportWebVitals();