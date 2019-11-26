import React from 'react'
import './TaskList.css'
import Task from './Task' 

function TaskList() {
    return (
        <ul className="task_list">
            <Task text='First task'/>
            <Task text='Second task'/>
            <Task text='Afternoon murder'/>
        </ul>
    )
}

export default TaskList