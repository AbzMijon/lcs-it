import './cube.scss';

function Cube({ isCubeInView }) {
    return (
        <div className="welcome__cube" style={isCubeInView ? {display: 'block'} : {display: 'none'}}>
            <div className="cube">
                <canvas id="canvas3d"></canvas>
            </div>
        </div>
    )
}

export default Cube;