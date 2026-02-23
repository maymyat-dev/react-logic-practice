import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Todo } from "./types";


const App = () => {
  const [taskList, setTaskList] = useState<Todo[]>([])

  const addTask = (newTask: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: newTask,
      completed: false
    }
    setTaskList((prevTask) => [...prevTask, newTodo]);
    
  }

  const deleteTask = (taskId: string) => {
    setTaskList((prev)=> prev.filter(task => task.id !== taskId))
  }


  return (
    <div>
      <TaskForm onAdd={addTask} />

      <TaskList tasks={taskList} onDelete={deleteTask} />
    </div>
  )
}

export default App