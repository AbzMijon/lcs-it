import './cube.scss';

function Cube({ isCubeInView }) {
    return (
        <div className={isCubeInView ? "welcome__cube" : "welcome__cube welcome__cube--hidden"}>
            <div className="cube">
                <canvas id="canvas3d"></canvas>
            </div>
        </div>
    )
}

export default Cube;