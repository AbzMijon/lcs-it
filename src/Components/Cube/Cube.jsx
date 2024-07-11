import React from 'react';
import './cube.scss';
import cube from '../../assets/video/cube.webm';


function Cube({ isCubeInView }) {
    return (
        <div className={isCubeInView ? "welcome__cube" : "welcome__cube welcome__cube--hidden"} fetchpriority='high'>
            <video src={cube} autoPlay loop muted />
        </div>
    )
}

export default Cube;