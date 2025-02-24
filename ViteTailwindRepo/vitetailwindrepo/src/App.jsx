import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () =>{
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    console.log(count) // still gets the old value . if you want to use new value use useeffect
  }

  return (
    <>
     <button className='font-extrabold' onClick={handleClick}>test tailwind {count}</button>
    </>
  )
}

export default App
