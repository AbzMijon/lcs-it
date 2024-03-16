import { forwardRef } from 'react';
import './experienceSkills.scss';

const ExperienceSkills = forwardRef(({ id, src, label }, ref) => {
    return (
        <div className='experience__skills-card' key={id} ref={ref}>
            <img src={src} alt="" className='experience__skills-img' loading="lazy" />
            <h5 className='experience__skills-name'>{label}</h5>
        </div>
    )
})

export default ExperienceSkills;