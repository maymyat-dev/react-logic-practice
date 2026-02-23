import React from 'react'
import type { Todo } from '../types'

type TaskListProps = {
  tasks: Todo[];
  onDelete: (id: string)=>void
}

const TaskList = ({tasks, onDelete}: TaskListProps) => {
  return (
    <ul>
      {
        tasks.map(task => (
          <li key={task.id}>{task.text} <button onClick={()=>onDelete(task.id)} className='text-red-500'>Delete</button></li>
        ))
      }
    </ul>
  )
}

export default TaskList