import { Suspense } from 'react'
import './App.css'
import { SearchBar } from './Questions'
import { Routes ,Route, Link, NavLink} from 'react-router-dom'

function App() {
  const links = [
    { to: "/SearchBar", label: "Search Bar" },
    { to: "/ThemeContext" , label:"Theme Context"}
  ]
  return (
    <>
      <div className='h-full w-full font-bold'>
        <h1 className='text-center'> HELLO WORLD </h1>
        {
          links.map((item , key)=>{
            return (
              <NavLink 
                className={({isActive})=>(isActive?"text-amber-600":"text-blue-950")} 
                key={key} 
                to={item.to}
              >
                {item.label} |
              </NavLink>
            )
          })
        }
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/SearchBar" element={<SearchBar />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
