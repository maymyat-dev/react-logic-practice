import React, { useEffect, useState } from 'react'
import './App.css'



const App = () => {
    
  const initialValues = {
    FirstName: localStorage.getItem("FirstName") || "",
    LastName: localStorage.getItem("LastName") || ""
  }
  const [fullName, setFullName] = useState(initialValues)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    
    setFullName((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const isFirstNameSort = fullName.FirstName.length >= 5;
  const isFirstNameEmpty = fullName.FirstName.length == 0;

  const isLastNameSort = fullName.LastName.length >= 5;
  const isLastNameEmpty = fullName.LastName.length == 0;

  useEffect(() => {
    localStorage.setItem("FirstName", fullName.FirstName);
    localStorage.setItem("LastName", fullName.LastName)
  }, [fullName])

  return (
    <div>
      <input className={`border ${isFirstNameSort ? 'border-green-800' : isFirstNameEmpty ? "border-gray-800" : "border-red-800"}`} type="text" name="FirstName" value={fullName.FirstName} onChange={handleOnChange} />

      <input className={`border ${isLastNameSort ? 'border-green-800' : isLastNameEmpty ? "border-gray-800" : "border-red-800"}`} type="text" name="LastName" value={fullName.LastName} onChange={handleOnChange} />

      <p> Display : {fullName.FirstName} {fullName.LastName}  </p>
    </div>
  )
}

export default App