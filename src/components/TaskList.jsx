import React from 'react';
import TaskItem from './TaskItem';
import formatDate from '../utils/date';
import '../styles/TaskList.css';



function TaskList({tasks,onToggleTask,onDeleteTask}){


    const groupedTasks=tasks.reduce((acc,task)=>{

        const date=formatDate(task.id);

        if(!acc[date]){
            acc[date]=[];
        }
        acc[date].push(task);

        return acc;
    },{});

    const sortedDates=Object.keys(groupedTasks).reverse();

    return(
        <div className="taskList">
            {sortedDates.length > 0 ? (sortedDates.map((date)=>{
                return(
                    <div key={date}>
                        <h2>{date}</h2>
                        {groupedTasks[date].reverse().map((task)=>{
                            return(
                                <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask}></TaskItem>
                            );
                        })}
                    </div>)
            }) ) : (<h2>Task list is empty!</h2>)}

        </div>
    )


}


export default TaskList