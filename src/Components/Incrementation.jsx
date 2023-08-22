import React, {useState} from 'react'

const Incrementation = () => {
  const [incrmnt, setincrmnt] = useState(0)
  
  const Incnum = () => {
    setincrmnt (incrmnt + 1)
  }
  return (
    <div>
      <h1>{incrmnt}</h1>
      <button onClick={Incnum}> Increase </button>
    </div>
  )
}

export default Incrementation
