import React, { useState } from 'react'
import logo from "../../assets/youssef-booking-Nobg.png"
import "./navbar.css"
import { IoIosCloseCircleOutline, IoMdClose, IoMdMenu } from 'react-icons/io'
import { navbarList } from '../../constant'
import useNavBar from './useNavbar'
import { Link } from 'react-router-dom'
function NavBar() {
    const {openSideMenu,handleOpenSideMenu}=useNavBar();


  return (
    <nav className='navbar'>
        <div className='left'>
            <Link to="/" className='logoContainer'>
                <img src={logo} className='logo' alt=""/>
                <span className='appNameStyle'>Youssef Booking</span>
            </Link>
            <div className='navitems'>
               {navbarList.map((navElement,i)=>(
                <Link to={navElement.link} key={i}>{navElement.name}</Link>
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
                <Link to={navElement.link} key={i}>{navElement.name}</Link>
               ))}
                </div>
            </div>
        </div>
       

    </nav>
  )
}

export default NavBar