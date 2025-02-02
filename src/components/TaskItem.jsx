import React, {useState} from 'react';

function TaskItem({task,onToggleTask,onDeleteTask}){


    const handleChange=()=>{
        onToggleTask(task.id);
    }

    const handleDelete=()=>{
        onDeleteTask(task.id);
    }

    return (
        <div>
            <input type="checkbox" checked={task.completed} onChange={handleChange} />
            <p>{task.text}</p>
            <button onClick={handleDelete}> Delete </button>
        </div>
    )

}

export default TaskItem;