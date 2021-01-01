import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dialogsData = [
  {name: 'Vovan', id: 1},
  {name: 'Mila', id: 2},
  {name: 'Olga', id: 3},
  {name: 'Robert', id: 4},
  {name: 'Kirill', id: 5},
  {name: 'Joey', id: 6}
]
let messagesData = [
  {text: 'Will you go to bar after concert?'},
  {text: 'Hope to see you soon)'},
  {text: 'Hi, how are you?'}
]
let PostData = [
  {message: 'Want travel to sea. Like photos please)', likeCount: 25},
  {message: 'Hi, everyone)This is my first post))', likeCount: 30}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={PostData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
