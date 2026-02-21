import React from 'react';
import "./footertitle.css";

const Footertitle = (props) => {
    return ( 
        <>

        <div className="footertitle">
            <h2>{props.title}</h2>
        </div>
        </>
     );
}
 
export default Footertitle;