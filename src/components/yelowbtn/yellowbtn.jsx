import React from 'react';
import "./yellowbtn.css";

const Yellowbtn = (props) => {
    return ( 
        <>
        <button className="yellowbtn">{props.text}</button>
        </>
     );
}
 
export default Yellowbtn;