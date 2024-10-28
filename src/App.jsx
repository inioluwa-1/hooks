import './App.css'
import { useState } from 'react'
// import Test from './Components/Test.jsx'
import States from './Components/States'
import { Route, Routes } from 'react-router-dom'
import Test from './Components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/'  element={<Test/>}/>
      <Route path='/road/sabo'  element={<States/>}/>

    </Routes>
    </>
  )
}

export default App
