import React from 'react';
import './cube.scss';
import cube from '../../assets/video/cube.webm';


function Cube() {
    return (
        <div className={"welcome__cube"} fetchpriority='high'>
            <video src={cube} autoPlay loop muted defaultmuted preload="auto" playsInline />
        </div>
    )
}

export default Cube;