import Spline from '@splinetool/react-spline';
import './cube.scss';

function Cube({ isCubeInView }) {
    return (
        <div className={isCubeInView ? "welcome__cube" : "welcome__cube welcome__cube--hidden"}>
            <div className="cube">
                <Spline scene="https://prod.spline.design/D1U4yp3F1SqMb2-p/scene.splinecode" />
            </div>
        </div>
    )
}

export default Cube;