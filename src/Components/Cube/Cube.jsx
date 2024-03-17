import React, { Suspense } from 'react';
import './cube.scss';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Cube({ isCubeInView }) {
    return (
        <div className={isCubeInView ? "welcome__cube" : "welcome__cube welcome__cube--hidden"} fetchpriority='high'>
            <Suspense>
                <Spline scene="https://prod.spline.design/aMm7nD09t3VjF49r/scene.splinecode" />
            </Suspense>
        </div>
    )
}

export default Cube;