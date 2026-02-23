import React, { useEffect, useState } from 'react'
import './index.css'

type UserItem = {
  userName: string;
}
const App = () => {

  const [userList, setUserList] = useState<UserItem[]>(() => {
    const storedUsers = localStorage.getItem("userName");
    return storedUsers ? JSON.parse(storedUsers) : []
  });
  const [name, setName] = useState({userName : ""});

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setName((prevName) => ({
      ...prevName,
      [name] : value
    }))
  }

  const addUserBtn = () => {
    setUserList((prevList) => [...prevList, name]);
    setName({userName: ""})
  }


  const deleteBtn = (userId: number) => {
    setUserList(userList.filter((_,index) => index !== userId ))
  }

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userList))
  },[userList])
  return (
    <div>
      <input name="userName" value={name.userName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={onHandleChange} />
      <button onClick={addUserBtn}>Add</button>

      <ul>
        {
          userList.map((user, index) => (
            <li key={index}>{user.userName} <button onClick={()=>deleteBtn(index)} className='text-red-800'>Delete</button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default App