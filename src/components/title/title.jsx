import React from 'react';
import "./title.css";


const Title = (props) => {
    return ( 
        <>
            <span>
                {props.subtitle}
            </span>
            <h1>
                {props.title}
            </h1>
            <hr />
        
        </>
     );
}
 
export default Title;