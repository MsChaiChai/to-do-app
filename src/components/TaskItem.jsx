import React, {useState} from 'react';
import '../styles/TaskItem.css';


function TaskItem({task,onToggleTask,onDeleteTask}){


    const handleChange=()=>{
        onToggleTask(task.id);
    }

    const handleDelete=()=>{
        onDeleteTask(task.id);
    }

    return (
        <div className={task.completed? "taskItemCompleted": "taskItem"}>
            <input type="checkbox" checked={task.completed} onChange={handleChange} className="customCheckbox" />
            <p className={task.completed? "line-through" : ""}>{task.text}</p>
            <button onClick={handleDelete} id="deleteBtn"> 
            <span className="line line1"></span>
            <span className="line line2"></span>
            </button>
        </div>
    )

}

export default TaskItem;