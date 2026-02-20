import React from 'react';
import "./home.css";
import Navbar from '../components/navbar/navbar';
import heroBg from "../assets/heroimg.png"
import { useState, useEffect } from "react";
import Yellowbtn from '../components/yelowbtn/yellowbtn';
import call from "../assets/call.svg"


const Home = () => {
    const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

    
    return ( 
        <>
            <Navbar toggleTheme={() => setDark(!dark)} />
            
            <section className="herosection" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="herotxt">
                    <h1>Trusted Legal Excellence</h1>
                    <p>With over 25 years of experience, we provide comprehensive legal solutions for individuals and businesses. Our commitment to integrity and client success sets us apart.</p>
                    <div className="btns">
                        <Yellowbtn text="Schedule Consultation" />
                        <button className='serv'>Our Services</button>
                    </div>
                    <div className="call">
                        <img src={call} alt="call" />
                        <div className="calltxt">
                            <span>Call us anytime</span>
                            <h1>(123) 456-7890</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section2">
                
            </section>
        
        </>
     );
}
 
export default Home;