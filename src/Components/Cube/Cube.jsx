import Spline from '@splinetool/react-spline';
import './cube.scss';

function Cube({ isCubeInView }) {
    if(1 === 2) {
        return (
            <div className={isCubeInView ? "welcome__cube" : "welcome__cube welcome__cube--hidden"}>
                <Spline scene="https://prod.spline.design/H8nHCWNUx4ogLNkX/scene.splinecode" />
            </div>
        )
    }
    return null;
}

export default Cube;