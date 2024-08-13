import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './layout.css'
import NavBar from './components/navbar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout '>
      <NavBar/>
    </div>
  )
}

export default App
