import React from 'react';
import "./aboutcard.css";

const AboutCard = (props) => {
    return ( 

        <>
            <div className="aboutcard">
                <img src={props.img} alt="aboutcard" />
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        </>
     );
}
 
export default AboutCard;