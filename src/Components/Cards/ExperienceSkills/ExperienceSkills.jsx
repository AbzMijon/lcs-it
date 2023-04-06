import React from 'react';
import './experienceSkills.scss';

function ExperienceSkills({ id, src, label }) {
    return (
        <div className='experience__skills-card' key={id}>
            <img src={src} alt="" className='experience__skills-img' />
            <h5 className='experience__skills-name'>{label}</h5>
        </div>
    )
}

export default ExperienceSkills;