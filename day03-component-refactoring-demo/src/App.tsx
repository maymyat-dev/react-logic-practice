import React, { useState } from 'react'
import type { Todo } from './types'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';

const App = () => {
  const [taskList, setTaskList] = useState<Todo[]>([]);

  const addNewTask = (newTask: string) => {
    const Task = {
      id: crypto.randomUUID(),
      text: newTask
    }
    setTaskList((prev)=> [...prev, Task])
  }

  const addDeleteTask = (id: string) => {
    setTaskList((prev)=> prev.filter((task)=> task.id !== id))
  }
  return (
    <div>
      <TaskForm onAdd={addNewTask} />
      <TaskList tasks={taskList} onDelete={addDeleteTask} />
    </div>
  )
}

export default App