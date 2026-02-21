import React from 'react';
import "./footercol.css";
import Footertitle from '../footertitle/footertitle';
import Footerlink from '../footerlink/footerlink';

const Footercol = (props) => {
    return ( 
        <>
        <div className="footercol">
            <Footertitle title={props.title} />

            <div className="footerlinks">
                <Footerlink link={props.link1} />
                <Footerlink link={props.link2} />
                <Footerlink link={props.link3} />
                <Footerlink link={props.link4} />
                <Footerlink link={props.link5} />
            </div>

        </div>

        </>
     );
}
 
export default Footercol;