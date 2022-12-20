import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3>
            {task.text} <FaTimes className='fatimes' style={{ cursor: 'pointer' }} onClick={() => {
                onDelete(task.id)
            }} />
        </h3>
        <small>{task.day }</small>
    </div>
  )
}

export default Task