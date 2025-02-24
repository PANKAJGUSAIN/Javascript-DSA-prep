import React from 'react'
import './App.css'

function App() {

  const [color , setColor] = React.useState('olive');
  
  const handleClick = (color) =>{
    setColor(color)
  }
  

  return (
    <div className='h-screen w-full duration-200 relative'
        style={{backgroundColor:color}}
    >
      <div className='fixed flex justify-center bottom-12 w-[90%] h-10 m-10 bg-white rounded-[5px] cursor-pointer overflow-auto'>
      <div className='bg-amber-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('amber')}>Amber</div>
        <div className='bg-blue-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('blue')}>Blue</div>
        <div className='bg-green-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('green')}>Green</div>
        <div className='bg-red-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('red')}>Red</div>
        <div className='bg-yellow-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('yellow')}>Yellow</div>
        <div className='bg-purple-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('purple')}>Purple</div>
        <div className='bg-pink-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('pink')}>Pink</div>
        <div className='bg-teal-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('teal')}>Teal</div>
        <div className='bg-indigo-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('indigo')}>Indigo</div>
        <div className='bg-gray-400 m-2 rounded-[5px] p-1 font-bold' onClick={() => handleClick('gray')}>Gray</div>
      </div>
    </div>
  )
}

export default App
