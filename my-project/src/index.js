import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sample from './sample.js';
import Footer from './Footer.js';
import Content from './content.js';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//document.getElementById("root").innerHTML="React JS";

//const element=createElement('h1',{},'Hello');
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(element);

//const el=createElement('div',{},
//createElement('h1',{},'head-1'),
//createElement('p',{},'para'),
//createElement('span',{},'span'),
//);

//const name='veni';
//const el=<div className="heading" style={{backgroundColor:"yellow"}}>
  //<h1>Hello</h1>
  //<h1>World</h1>
  //{name} //this is variable (or)
  //{"veni"}//this is value (or)
  //veni //just apply the value
  //{true ? "True" : "false"}
  //{10-4}
//</div>;
//Expression solve {10-4}=6 , condition operator

// const el=createElement('div',{className:"head"},
// createElement('h1',{},'head-1'),
// createElement('p',{},'para'),
// createElement('span',{},'span'),
// );


function Sampl(){

  return <div>
  <Sample />
  <Content />
  <Footer />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sampl />);