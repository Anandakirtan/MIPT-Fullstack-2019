import React from 'react'
import './TaskList.css'
import Task from './Task' 

function TaskList() {
    return (
        <ul className="task_list">
            <li><Task /></li>
            <li><Task /></li>
            <li><Task /></li>
        </ul>
    )
}

export default TaskList