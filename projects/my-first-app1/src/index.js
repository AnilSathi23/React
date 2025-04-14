import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstApp from './App';
import Bike from './Bike';
import MyList from './MyList';
import App_Notes from './App_Notes';
import App_Books from './App_Books';
import App_Form from './App_Form';
import App_Timer from './App_Timer';

const items =[
  {id:0, name:'First'},
  {id:1, name:'Second'},
  {id:2, name:'Third'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstApp />
    <Bike/>
    <MyList items={items} /> 
    <App_Notes />
    <App_Books />
    <App_Form />
    <App_Timer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
