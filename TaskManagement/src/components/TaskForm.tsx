import React, { useState, type ChangeEvent, type FormEvent} from 'react'

type TaskFormProps = {
  id: string
  onAdd: (task: string) => void;
}

const TaskForm = ({onAdd} : TaskFormProps) => {
  const [newTask, setNewTask] = useState('');

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
   setNewTask(e.target.value)
  }

  const submitBtn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(newTask);
    setNewTask("")
  }
  return (
    
    <>
      <form onSubmit={submitBtn} className='flex justify-between gap-4'>
        <input value={newTask} onChange={onHandleChange} type="text"  className='focus:outline-none py-2 border border-gray-600'/>
        <button>Add</button>
      </form>
    </>
  )
}

export default TaskForm