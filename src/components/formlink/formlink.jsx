import React from 'react';
import "./formlink.css";

const FormLink = (props) => {
    return ( 
        <>
            <div className="formlink">
                <img src={props.img} alt=""/>
                <div className="formlinktxt">
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </div>
        </>
     );
}        

 
export default FormLink;