import React from 'react';
import "./input.css";

const Input = (props) => {
    return ( 
        <>
            <div className="input">
                <label>{props.label}</label>
                <input className={props.style} type="text" />
            </div>
        </>
     );
}
 
export default Input;