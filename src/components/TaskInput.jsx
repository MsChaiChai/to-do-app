import React, {useState} from 'react';
import '../styles/TaskInput.css';

function TaskInput({onAddTask}){

    const[input,setInput]=useState('');

    const handleInputChange = (e) =>{ 
        setInput(e.target.value);
    }

    const handleAddClick=()=>{
        onAddTask(input);
        setInput('');
    }
    
    return(
        <div className="taskInput">
            <input value={input} onChange={handleInputChange} placeholder='Add a task' className="inputField"></input>
            <button onClick={handleAddClick}>Add</button>
        </div>
    );

}


export default TaskInput;