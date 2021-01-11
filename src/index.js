import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';


let renderFullPage = (state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App 
            state={state} 
            addPost={store.addPost.bind(store)}
            textPostChange={store.textPostChange.bind(store)} 
            messagePostChange={store.messagePostChange.bind(store)} 
            dialogPost={store.dialogPost.bind(store)}
          />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

renderFullPage(store.getState());
store.renderChanging(renderFullPage);
reportWebVitals();