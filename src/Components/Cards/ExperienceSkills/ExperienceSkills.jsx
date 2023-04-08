import React, { forwardRef } from 'react';
import './experienceSkills.scss';
import { motion } from 'framer-motion';

const ExperienceSkills = forwardRef(({ id, src, label }, ref) => {
    return (
        <div className='experience__skills-card' key={id} ref={ref}>
            <img src={src} alt="" className='experience__skills-img' />
            <h5 className='experience__skills-name'>{label}</h5>
        </div>
    )
})

export default ExperienceSkills;
export const MExperienceSkills = motion(ExperienceSkills);