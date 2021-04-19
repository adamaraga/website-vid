import React from 'react';
import logo from '../../images/microsoft.png';
import {FiMenu} from 'react-icons/fi'
import SideBar from './SideBar';
import {useState} from 'react'
import { Link } from "react-scroll";

function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleClickClose = () => {
        setSidebarOpen(false)
    }

   

    return (
        <>
        <div className='navbar' >
            <div className='logo-con' >
                <a href="/" className='logo-con-link'>
                    <img src={logo} alt="logo" className='logo'/>
                    <h2>microsoft</h2>
                </a>
                
            </div>
            <div className='nav-link-con'>
                <ul>
                    <li className='nav-link'><a href="/">home</a></li>
                    <li className='nav-link'><Link className='nav-link-scroll' activeClass="active" to="footer" spy={true} smooth={true} duration={700}>about us</Link></li>
                    <li className='nav-link'><Link className='nav-link-scroll' activeClass="active" to="footer" spy={true}  smooth={true}   duration={700}>contact us</Link></li>
                    
                </ul>
                <button className='menu-button' onClick={() => setSidebarOpen(true)} >
                        <FiMenu className='menu' />
                </button>
            </div>
        </div>
        <SideBar sidebarOpen={sidebarOpen} handleClickClose={handleClickClose} />
        </>
    )
}

export default Navbar
