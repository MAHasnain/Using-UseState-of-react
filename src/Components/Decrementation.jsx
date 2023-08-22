import React, {useState} from 'react'

const Decrementation = () => {
    const [decrmnt, setdecrmnt] = useState(100)
    const DecNum = () => {
        setdecrmnt (decrmnt - 1)
    }
  return (
    <div>
        <h1>{decrmnt}</h1>
      <button onClick={DecNum} >Decrease</button>
    </div>
  )
}

export default Decrementation
