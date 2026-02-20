import React from 'react';
import "./areacard.css"

const AreaCard = (props) => {
    return ( 
        <>
            <div className="areacard">
                <img src={props.img} alt='' />
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        </>
     );
}
 
export default AreaCard;