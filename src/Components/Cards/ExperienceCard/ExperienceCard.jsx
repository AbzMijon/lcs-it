import { forwardRef } from 'react';
import './experienceCard.scss';

const ExperienceCard = forwardRef(({ src, label, onMouseMove, mouse }, ref) => {
    return (
        <li className='experience__card lightEffectWrapper' onMouseMove={onMouseMove} ref={ref} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className='card lightEffectWrapper__card' id="ex_card">
                <img src={src} alt="" />
                <p className='experience__card-title'>{label}</p>
                <div 
                    id='light' 
                    className="light" 
                    style={{background: 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)'}}>
                </div>
            </div>
        </li>
    )
});

export default ExperienceCard;