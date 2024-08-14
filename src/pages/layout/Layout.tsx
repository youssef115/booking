
import NavBar from '../../components/navbar/NavBar'
import { Outlet } from 'react-router-dom'
import "./layout.css"



function Layout() {
  return (
        <div className='layout'>
            <header >
                <NavBar/>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>

            </footer>

        </div>
  )
}

export default Layout