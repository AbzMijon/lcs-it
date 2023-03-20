import React from 'react';
import './outsourcing.scss';
import outsourcingCard1 from '../../../assets/svg/outsorcingCard6.svg';
import outsourcingCard2 from '../../../assets/svg/reactjs.svg';
import outsourcingCard3 from '../../../assets/svg/android.svg';
import outsourcingCard4 from '../../../assets/svg/java.svg';
import outsourcingCard5 from '../../../assets/svg/php.svg';
import ContactBtn from '../../ContactBtn/ContactBtn';

function Outsourcing({ setModal }) {
    return (
        <section className='outsourcing'>
            <div className="outsourcing__wrap">
                <h2 className='outsourcing__title'>Outsourcing</h2>
                <ul className="outsourcing__table">
                    <li className="outsourcing__table-wrapper outsourcing__card-sharp">
                        <span style={{zIndex: '100000'}}></span>
                        <span style={{zIndex: '100000'}}></span>
                        <span style={{zIndex: '100000'}}></span>
                        <span style={{zIndex: '100000'}}></span>
                        <div className="outsourcing__card">
                            <img src={outsourcingCard1} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>C# .NET</h4>
                            <p className='outsourcing__text'>The power of C# stems from its universality. Because it’s used by various frameworks, the number of things this language can create is indefinite. </p>
                        </div>
                    </li>
                    <li className="outsourcing__table-wrapper outsourcing__card-react">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='outsourcing__card'>
                            <img src={outsourcingCard2} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>React/ Angular </h4>
                            <p className='outsourcing__text'>React.js/AngularJS is one of the most popular toolkits for web application development. Based on great technical strength and open source code</p>
                        </div>
                    </li>
                    <li className="outsourcing__table-wrapper outsourcing__card-mob">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='outsourcing__card'>
                            <img src={outsourcingCard3} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>Android/ IOS</h4>
                            <p className='outsourcing__text'>The unique expertise of our mobile app outsourcing in various technologies and industries allows us to be a reliable partner in the launch and development of your mobile application.</p>
                        </div>
                    </li>
                    <li className="outsourcing__table-wrapper outsourcing__card-java">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='outsourcing__card'>
                            <img src={outsourcingCard4} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>Java</h4>
                            <p className='outsourcing__text'>Java is the world’s most commonly used language for developing corporate solutions. We can help your business hire Java developers with vast experience and competence.</p>
                        </div>
                    </li>
                    <li className="outsourcing__table-wrapper outsourcing__card-php">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='outsourcing__card'>
                            <img src={outsourcingCard5} alt="" className="outsourcing__img" />
                            <h4 className='outsourcing__card-name'>PHP</h4>
                            <p className='outsourcing__text'>PHP is one of the main backend languages. It is applied in projects of all scales.  In fact, it’s hard to find a site that doesn’t use this language.</p>
                        </div>
                    </li>
                    <li className="outsourcing__card outsourcing__card-btn">
                        <ContactBtn setModal={setModal}/>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Outsourcing;