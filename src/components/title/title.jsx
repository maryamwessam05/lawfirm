import React from 'react';
import "./title.css";


const Title = (props) => {
    return ( 
        <>
        <div className="titletxt">

            <span>
                {props.subtitle}
            </span>
            <h1>
                {props.title}
            </h1>
            <hr />
        </div>
        
        </>
     );
}
 
export default Title;