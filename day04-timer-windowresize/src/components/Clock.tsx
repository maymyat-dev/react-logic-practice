import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 5000)
        
        return () => {
            clearInterval(timer)
        }
    }, [])
  return (
      <div>
          
          <p>{time.toLocaleString()}</p>
    </div>
  )
}

export default Clock