import React, { useState, type ChangeEvent, type FormEvent } from 'react'

type TaskFormProps = {
  onAdd : (task: string)=> void
  
}
const TaskForm = ({onAdd}: TaskFormProps) => {
  const [task, setTask] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(task);
    setTask("")
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-between gap-4'>
      <input type="text" value={task} onChange={handleOnChange} className='border border-indigo-500 focus:outline-none py-2' />
      <button className='text-indigo-500'>Add</button>
    </form>
  )
}

export default TaskForm