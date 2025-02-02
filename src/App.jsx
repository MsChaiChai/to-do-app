import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks]= useState([]);

  const handleAddTask = (input) =>{
    if(input.trim()===""){
      alert("No task added!")
      return;
    }
      let newTask={
        id:Date.now(),
        text:input,
        completed: false
      }
      setTasks([...tasks,newTask]);
  }

  const onToggleTask=(taskId)=>{
      setTasks(tasks=>tasks.map(task => task.id===taskId? {...task, completed: !task.completed} : task))
  }

  const onDeleteTask=(taskId)=>{
      setTasks(tasks=>tasks.filter(task=>task.id !== taskId))
  }

  return (
   <div>
      <TaskInput onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask}/>
   </div>
  )
}

export default App;
