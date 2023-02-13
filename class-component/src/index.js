import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Lifecycle from './Lifecycle';

// <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//import the multible child in the parent class
// class First extends React.Component{
//   render(){
//     console.log("I pass the this", this);
//     return<div>First Class Component {this.props.data}
//     <button onClick={()=>this.props.get('Dataa')}>Click</button>
//     </div>;
//   }
// }

// class Second extends React.Component{
//   render(){
//     return<div>Second Class Component</div>;
//   }
// }

// function Third(){
//   return(
//     <div>Third Function Component</div>
//   )
// }

// class Main extends React.Component{
//   //State
//   constructor(){
//     super();
//     this.state={
      
//     }
//     console.log(this);
//   }

//   getData(param){
//     console.log("passdata",param);
//   }
//   render(){
//     console.log(this);
//     return<div>Class Component<First data='Hard Work' get={this.getData}/>{""}
//     <Second/>
//     <Third/></div>;
//   }
// }

// function updateTime(){
//   const element=(
//     <div>
//      <h1>Virtual DOM</h1>;
//       <h2>HI</h2>
//       <p>{new Date().toLocaleTimeString()}</p>
//     </div>
//   );
//   ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(updateTime,1000)

    // const el= 
    // <div>
    //   <h1>Virtual DOM</h1>
    //   <h2>HI</h2>         
    //   <p>{new Date().toLocaleTimeString()}</p>
    // </div> 

    function Funcomp(){
      return(
        <div>
          <Lifecycle />
          <App />
        </div>
      )
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Funcomp />);