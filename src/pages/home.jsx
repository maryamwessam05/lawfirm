import React from 'react';
import "./home.css";
import Navbar from '../components/navbar/navbar';
import heroBg from "../assets/heroimg.png"
import { useState, useEffect } from "react";
import Yellowbtn from '../components/yelowbtn/yellowbtn';
import call from "../assets/call.svg"
import Title from '../components/title/title';
import sec2img from "../assets/sec2img.png"
import AboutCard from '../components/aboutcard/aboutcard';
import abt1 from "../assets/abt01.svg"
import abt2 from "../assets/abt02.svg"
import abt3 from "../assets/abt03.svg"
import MissionCard from '../components/missioncard/missioncard';
import vision from "../assets/vision.svg"
import mission from "../assets/mission.svg" 


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
                <Title subtitle="Excellence in Legal Practice" title="About Our Firm" />
                <div className="sec2img">
                    <img src={sec2img} alt="sec2img" />
                    <div className="sec2imgtxt">
                        <p>Founded in 1999, our law firm has built a reputation for delivering exceptional legal services across multiple practice areas. Our team of experienced attorneys is dedicated to protecting your rights and achieving the best possible outcomes for our clients.</p>
                        <div className="aboutcards">
                            <AboutCard img={abt1} title="500+" desc="Awards Won" />
                            <AboutCard img={abt2} title="5000+" desc="Happy Clients" />
                            <AboutCard img={abt3} title="95%" desc="Success Rate" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section3">
                <MissionCard style="miscard" titleStyle="mistitle" img={mission} title="Mission" desc="To provide exceptional legal services with integrity, professionalism, and a commitment to achieving the best outcomes for our clients." />
                <MissionCard style="miscardy" titleStyle="mistitley" img={vision} title="Vision" desc="To be the leading law firm known for excellence, innovation, and client satisfaction in the legal industry." />
            </section>
        
        </>
     );
}
 
export default Home;