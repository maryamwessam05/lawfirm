import React from 'react';
import "./contactlink.css";
import Footerlink from '../footerlink/footerlink';

const Contactlink = (props) => {
    return ( 
        <>
            <div className="contactlink">
                <img src={props.img} alt="" />
                <Footerlink link={props.link} />
            </div>
        </>
     );
}
 
export default Contactlink;