import React from 'react'
import logo from '../img/logo.svg';

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            
              <nav className="navLink">
                <h3>Quick Links</h3>
                <ul>
                    <a href="/">About us</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                    <a href="/">FAQs</a>
                </ul>
            </nav>
            
            <nav className="navLink">
                <h3>Legal Stuff</h3>
                <ul>
                    <a href="/">Declaimer</a>
                    <a href="/">Financing</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Service</a>
                </ul>
            </nav>

            <div className="form">
                <p>Knowing you're always on the best energy deal.</p>
                <input type="text"  placeholder='Enter your email' />
                <div className="btn">
                    <button>Sign up Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;