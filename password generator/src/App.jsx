import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setlength] = useState(8);
  const [numberallow, setnumberallow] = useState(false);
  const [charallow, setcharallow] = useState(false);
  const [input, setInput] = useState("");
  const passwordref = useRef(null);


  const Passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallow) str += "0123456789"
    if (charallow) str += "!@#$%^&*()_+~"

    for (let i = 1; i <= length ; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      setInput(pass)
    }

  }, [length, numberallow, charallow, setInput])

  useEffect(()=>{
    Passwordgenerator()
  },[length ,numberallow , charallow ])

  const copypasstoclipboard = useCallback(()=>{
    if(passwordref){
      passwordref.current.select()
      //passwordref.current.setSelectionRange(0,3) //Sets the start and end positions of a selection in a text field.
    }
    window.navigator.clipboard.writeText(passwordref.current.value)
  },[input])

  return (
    <>
      <div className='h-full w-screen flex flex-col '>
        <div className='min-h-[100px] w-[100%] bg-amber-700'>
          <div className='flex h-full w-full items-center justify-center text-2xl font-bold'>Password Generator</div>
        </div>
        <div className='h-full w-full pt-2 bg-amber-200 '>
          <div className='flex justify-center '>
            <input type="text" ref={passwordref} value={input} placeholder='password' readOnly className=' border-amber-900 w-[50%] outline-none border-2 rounded-2xl h-[40px] py-1 px-3' />
            <button className='h-[40px] py-1 px-3 rounded-2xl bg-blue-500 cursor-pointer ml-1 font-bold' onClick={copypasstoclipboard}>Copy</button>
          </div>
          <div className='flex justify-center mt-4 text-orange-800 font-medium'>
          
            <input type='range' 
              name="length"  
              id='length'
              min={8} 
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value); }}
            />
            <label htmlFor='length'>Length:{length}</label>
            <input 
              type='checkbox'
              defaultChecked={numberallow}
              id='numberInput'
              className='cursor-pointer ml-5'
              onChange={()=>{setnumberallow((prev)=>!prev)}}
            />
            <label htmlFor='numberInput'>Numbers</label>
            <input 
              type='checkbox'
              defaultChecked={charallow}
              id='charInput'
            className='cursor-pointer ml-5'
              onChange={()=>{setcharallow((prev)=>!prev)}}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
