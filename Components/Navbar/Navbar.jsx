import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from  '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import  notifi_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu_icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon}alt="" />
           <Link to='/'> <img className='logo'
             src={logo} alt="" /></Link> 

        </div>

        <div className="nav-middle f;ex-div">
           <div className="search-box flex-div">
            <input type="text" placeholder='Search' />
            <img src={search_icon} alt="" />
            

          </div>

           

        </div>

        <div className="nav-right flex-div">
            <img src={upload} alt="" />
            <img src={more_icon} alt="" />
            <img src={notifi_icon} alt="" />
            <img src={profile_icon}  className="user-icon" alt="" />

        </div>
     
    </nav>
  )
}

export default Navbar