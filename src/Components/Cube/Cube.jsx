import Spline from '@splinetool/react-spline';
import './cube.scss';

function Cube({ isCubeInView }) {
    return (
        <div className={isCubeInView ? "welcome__cube" : "welcome__cube welcome__cube--hidden"}>
            <Spline scene="https://prod.spline.design/jilfObIVBbQscoVw/scene.splinecode" />
        </div>
    )
}

export default Cube;