import React from 'react';
import logo from '../images/microsoft.png';

function Footer() {
    return (
        <section id='footer' className='footer'>
            <div className="footer-info">
                <div className="contact">
                    <h4>Contact</h4>
                   <p>Phone: +234 909 41 232</p> 
                   <p>Email: aragaadam@gmail.com</p>
                   <p>Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor.</p>
                </div>
                <div className="about-us">
                    <h4>About us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores totam molestiae sunt, similique consectetur porro dolore debitis voluptatibus ex ea ad dicta laborum quasi et reiciendis assumenda nostrum esse.</p>
                </div>
            </div>
            <div className="copy-right">
                <div className='footer-logo-con'>
                    <img src={logo} alt="logo" className='logo'/>
                    <h2>microsoft</h2>
                </div>
                <div className="copy">copyright @ microsoft</div>
            </div>
        </section >
    )
}

export default Footer
