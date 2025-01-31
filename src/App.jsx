import { useState } from 'react';
import TaskInput from './components/TaskInput';

function App() {

  const [tasks, setTasks]= useState([]);

  const handleAddTask = (input) =>{
      setTasks([...tasks,input]);
  }

  return (
   <div>
      <TaskInput onAddTask={handleAddTask}/>
      {tasks.map((task)=>{
        return <li>{task}</li>
      })}
   </div>
  )
}

export default App;
