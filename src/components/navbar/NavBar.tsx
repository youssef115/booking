import React, { useState } from 'react'
import logo from "../../assets/youssef-booking-Nobg.png"
import "./navbar.css"
import { IoIosCloseCircleOutline, IoMdClose, IoMdMenu } from 'react-icons/io'
import { navbarList } from '../../constant'
function NavBar() {

    const [openSideMenu,setOpenSideMenu]=useState(false);

    const handleOpenSideMenu=()=>{
       setOpenSideMenu(prev=>!prev)
       
    }


  return (
    <nav className='navbar'>
        <div className='left'>
            <a className='logoContainer'>
                <img src={logo} className='logo' alt=""/>
                <span className='appNameStyle'>Youssef Booking</span>
            </a>
            <div className='navitems'>
               {navbarList.map((navElement,i)=>(
                <a href="/" key={i}>{navElement}</a>
               ))}
            </div>
            
            
        </div>
        <div className='right'>

            <div className='right-menu-btn'>
             <IoMdMenu  onClick={handleOpenSideMenu}/> 
            </div>

            <div className='btns'>
                <button>
                    SignIn
                </button>
                <button className='signUpBtn'>
                    SignUp
                </button>
            </div>
        </div>

       
        <div className={openSideMenu?"right-menu-container":""}>
            <div className={`${openSideMenu?"right-menu":"right-menu-active"}`}>
                <span className="close-btn"  onClick={handleOpenSideMenu}><IoMdClose /></span>
                <div className='navitem-vertical'>
                {navbarList.map((navElement,i)=>(
                <a href="/" key={i}>{navElement}</a>
               ))}
                </div>
            </div>
        </div>
       

    </nav>
  )
}

export default NavBar