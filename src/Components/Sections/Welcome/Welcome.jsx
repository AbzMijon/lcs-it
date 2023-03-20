import React from 'react';
import ContactBtn from '../../ContactBtn/ContactBtn';
import Cube from '../../Cube/Cube';
import './welcome.scss';

function Welcome({ setModal }) {
    return (
        <section className='welcome'>
            <div className="welcome__info">
                <ul className="welcome__skills">
                    <li className="welcome__skills-item">Functional</li>
                    <li className="welcome__skills-item">Perfomance</li>
                    <li className="welcome__skills-item">Usability</li>
                </ul>
                <h1 className='welcome__title'>Software  Development</h1>
                <p className="welcome__subtitle">LCS-IT is a prompt solution to issues, complex unique technological developments.</p>
                <ContactBtn setModal={setModal}/>
            </div>
            <Cube/>
        </section>
    )
}

export default Welcome;