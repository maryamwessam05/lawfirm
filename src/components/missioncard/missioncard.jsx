import React from 'react';
import "./missioncard.css";

const MissionCard = (props) => {
    return ( 
        <>
            <div className={props.style}>
                <img src={props.img} alt="mission" />
                <div className={props.titleStyle}>
                    <h1 className='titlec'>{props.title}</h1>
                </div>
                <p className='cardp'>{props.desc}</p>
            </div>
        
        </>
     );
}
 
export default MissionCard;