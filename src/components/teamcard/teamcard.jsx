import React from 'react';
import "./teamcard.css";

const Teamcard = (props) => {
    return ( 
        <>
        <div className="team">
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
            <p>{props.role}</p>

        </div>
        </>
     );
}
 
export default Teamcard;