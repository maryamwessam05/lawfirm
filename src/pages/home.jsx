import React from 'react';
import "./home.css";
import Navbar from '../components/navbar/navbar';
import { useState, useEffect } from "react";


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
        
        </>
     );
}
 
export default Home;