import { useState } from "react"
import { useNavigate } from "react-router-dom"

// import React from 'react'
const States = () => {
    const [num, setNum] = useState(0)
    const [todo, settodo] = useState('')
    const navigate = useNavigate()

  
    
    const increase = () => {
        setNum(num + 1)
        // console.log(num);   
    }

    const addTodo = () => {
        if(todo === ''){
            alert('Please Enter Todo')
        }
        else{
            console.log(todo);
            settodo('')
            navigate('/')

        }
    }
  return (
    <>
        <h1>{num}</h1>
        <button onClick={increase}>Increase</button> <br />
        <input type="text" placeholder="Todo" onChange={(e) => {settodo(e.target.value)}} value={todo}/>
        <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default States