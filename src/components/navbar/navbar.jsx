import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.svg";
import lightmode from "../../assets/light.svg";
import darkmode from "../../assets/darkmode.svg";
import Navlink from '../navlink/navlink';
import Yellowbtn from '../yelowbtn/yellowbtn';
import logod from "../../assets/logod.svg"

const Navbar = ({ toggleTheme }) => {
    return ( 
        <>
            <nav className="navbar">
                <div className="logo">
                    <img className='logod' src={logod} alt="dar" />
                    <img className='logol' src={logo} alt="logo" />
                </div>

                <div className="nav-links">
                    <Navlink navlink="Home" />
                    <Navlink navlink="About Us" />
                    <Navlink navlink="Practice Areas" />
                    <Navlink navlink="Our Team" />
                    <Navlink navlink="Contact Us" />
                </div>

                <div className="navbtns">
                    <div className="mode" onClick={toggleTheme}>
                        <img className='light' src={lightmode} alt="lightmode" />
                        <img className='dark' src={darkmode} alt="darkmode" />
                    </div>
                       <Yellowbtn text="Free Consultation" />
                </div>
            </nav>
        
        </>
     );
}
 
export default Navbar;