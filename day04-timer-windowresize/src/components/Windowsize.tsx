import React, { useEffect, useState } from 'react'

const Windowsize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    useEffect(() => {
        if (width < 768) {
            document.body.style.backgroundColor = 'red';
        } else {
            document.body.style.backgroundColor = 'blue';
        }

        return () => {
            document.body.style.backgroundColor=''
        }
    },[width])
  return (
    <div className="p-4 bg-yellow-100 rounded">
          <h1 className="text-xl font-bold">Window Width Monitor</h1>
          <p className="text-2xl">{width} px</p>
    </div>
  )
}

export default Windowsize