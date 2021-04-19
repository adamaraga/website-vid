import React from 'react';
import logo from '../../images/microsoft.png';
import {CgClose} from 'react-icons/cg';
import { Link } from "react-scroll";

function SideBar({handleClickClose, sidebarOpen}) {
    
    return (
        <div className={sidebarOpen ? 'sidebar sidebar-open' : 'sidebar'}>
            <button className='sidebar-btn' onClick={handleClickClose} >
                <CgClose className='sidebar-icon' />
            </button>
            <ul className={sidebarOpen? 'sidebar-links sidebar-link-show' : 'sidebar-links' }>
                <li> <a href="/" onClick={handleClickClose} className='sidebar-link nav-link-scroll' >Home</a></li>
                <li> <Link onClick={handleClickClose}  className='sidebar-link nav-link-scroll' to="footer" spy={true} smooth={true} duration={700}>About us</Link></li>
                <li> <Link onClick={handleClickClose}  className='sidebar-link nav-link-scroll' to="footer" spy={true} smooth={true} duration={700}>Contact us</Link></li>
               
            </ul>
            <div className='logo-con' >
                <a href="/" className='logo-con-link'>
                    <img src={logo} alt="logo" className='logo'/>
                    <h2>microsoft</h2>
                </a>
                
            </div>
        </div>
    )
}

export default SideBar
