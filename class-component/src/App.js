import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


 const App = () => {

  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: e.target.name.value,
      description: e.target.description.value,
      isPriority: e.target.isPriority.checked,
      isComplete: e.target.isComplete.checked,
    };

    setTask([...task, newTask]);

    e.target.name.value = "";
    e.target.description.value = "";
    e.target.isPriority.checked = "";
    e.target.isComplete.checked = "";
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input onChange={(ev)=>console.log()}></input><br></br>
        <label>Task Name : </label><br></br>
        <input type="text" name="name"/> <br />
        <label>Description : </label><br></br>
        <input type="text" name="description"/>
        <br />
        <input type="checkbox" name="isPriority" />Is Priority<br />
        <input type="checkbox" name="isComplete" />Is Completed <br/>
        <input type="submit" value="Add Task" />
      </form>
      <h1>My Tasks</h1>
      <input type="checkbox" name="isPriority1" />
      Priority<br />
      <input type="checkbox" name="isComplete1" />
      Completed
      <ul>
        {task.map((task, index) => {
          if (task.name !== "" && task.description !== "")
            return (
              <li key={index}>
                <h3>Task Name : {task.name}</h3>
                <p>Desctiption : {task.description}</p>
                <p>
                  Is Priority :{" "}
                  {task.isPriority ? (
                    <input type="checkbox" name="isPriority" checked />
                  ) : (
                    <input type="checkbox" name="isPriority" />
                  )}
                </p>
                <p>
                  Is Completed :{" "}
                  {task.isComplete ? (
                    <input type="checkbox" name="isComplete" checked />
                  ) : (
                    <input type="checkbox" name="isComplete" />
                  )}
                </p>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default App; 