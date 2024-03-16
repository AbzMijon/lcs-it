import React, { Suspense } from 'react';
import './cube.scss';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Cube({ isCubeInView }) {
    return (
        <div className={isCubeInView ? "welcome__cube" : "welcome__cube welcome__cube--hidden"}>
            <Suspense fallback={<div>Loading...</div>}>
                <Spline scene="https://prod.spline.design/H8nHCWNUx4ogLNkX/scene.splinecode" />
            </Suspense>
        </div>
    )
}

export default Cube;