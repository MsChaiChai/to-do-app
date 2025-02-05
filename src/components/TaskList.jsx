import React from 'react';
import TaskItem from './TaskItem';


function TaskList({tasks,onToggleTask,onDeleteTask}){

    return(
        <ul>
            {tasks.map(task=>(
                <li key={task.id}><TaskItem task={task} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask}/></li>
            ))}
        </ul>
    )

}


export default TaskList