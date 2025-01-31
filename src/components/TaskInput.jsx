import React, {useState} from 'react';


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
        <div>
            <input value={input} onChange={handleInputChange} placeholder='Add a task'></input>
            <button onClick={handleAddClick}>Add</button>
        </div>
    );

}


export default TaskInput;