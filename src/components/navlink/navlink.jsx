import React from 'react';
import "./navlink.css";

const Navlink = (props) => {
    return (  
        <a href="/">
            {props.navlink}
        </a>
    );
}
 
export default Navlink;