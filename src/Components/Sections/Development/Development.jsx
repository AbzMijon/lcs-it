import React, { useEffect, useRef, useState } from 'react';
import './development.scss';
import developmentKeyboard from '../../../assets/img/developmentKeyboard.jpg';
import developers1 from '../../../assets/svg/developers1.svg';
import developers2 from '../../../assets/svg/developers2.svg';
import developers3 from '../../../assets/svg/developers3.svg';
import developers4 from '../../../assets/svg/developers4.svg';
import searchIcon from '../../../assets/svg/search-normal.svg';
import logo from '../../../assets/svg/lcsItLogo.svg';
import ContactBtn from '../../ContactBtn/ContactBtn';
import Lottie from "lottie-react";
import activityLottie from '../../../assets/lottieAnimations/activityLottie.json';
import overviewLottie from '../../../assets/lottieAnimations/overviewLottie.json';
import { motion, useInView } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';

function Development({ setModal }) {

    const VIEW_BLOCK1_IN_HTML_SECTION = 1062;

    const [codeStr1, setCodeStr1] = useState(false);
    const [codeStr2, setCodeStr2] = useState(false);
    const [codeStr3, setCodeStr3] = useState(false);
    const [codeStr4, setCodeStr4] = useState(false);
    const [codeStr5, setCodeStr5] = useState(false);
    const [codeStr6, setCodeStr6] = useState(false);
    const [codeStr7, setCodeStr7] = useState(false);
    const [codeStr8, setCodeStr8] = useState(false);
    const [codeStr9, setCodeStr9] = useState(false);
    const [codeStr10, setCodeStr10] = useState(false);
    const [codeStr11, setCodeStr11] = useState(false);
    const [codeStr12, setCodeStr12] = useState(false);
    const [codeStr13, setCodeStr13] = useState(false);
    const [codeStr14, setCodeStr14] = useState(false);
    const [codeStr15, setCodeStr15] = useState(false);
    const [codeStr16, setCodeStr16] = useState(false);

    const [str, setStr] = useState(0); //incudes

    const onScroll = (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;
        if(scrollTop >= VIEW_BLOCK1_IN_HTML_SECTION) {
            setTimeout(() => setCodeStr1(true), 1000); //вложение таймаутов
            setTimeout(() => setCodeStr2(true), 1500);
            setTimeout(() => setCodeStr3(true), 2000);
            setTimeout(() => setCodeStr4(true), 2500);
            setTimeout(() => setCodeStr5(true), 3000);
            setTimeout(() => setCodeStr6(true), 3500);
            setTimeout(() => setCodeStr7(true), 4000);
            setTimeout(() => setCodeStr8(true), 4500);
            setTimeout(() => setCodeStr9(true), 5000);
            setTimeout(() => setCodeStr10(true), 5500);
            setTimeout(() => setCodeStr11(true), 6000);
            setTimeout(() => setCodeStr12(true), 6500);
            setTimeout(() => setCodeStr13(true), 7000);
            setTimeout(() => setCodeStr14(true), 7500);
            setTimeout(() => setCodeStr15(true), 8000);
            setTimeout(() => setCodeStr16(true), 8500);
        }
    }


    useEffect((e) => {
        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, []);

    const ref = useRef();
    const isInView = useInView(ref);
    const [animationStart, setAnimationStart] = useState(false);
    
    useEffect(() => {
        if(isInView) {
            setAnimationStart(true);
        }
    }, [isInView]);

    return (
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
            className='development'
        >
            <motion.h2 variants={motionAnimation} className='development__title'>Software development</motion.h2>
            <div className="development__code">
                <motion.div className="development__blocks" variants={motionAnimation}>
                    <div className="development__blocks-overview">
                        {animationStart &&
                            <Lottie animationData={overviewLottie} loop={false} />
                        }
                    </div>
                    <div className="development__blocks-code">
                        <div className="development__code-left">
                            <img src={logo} alt="" className='development__code-logo' />
                        </div>
                        <div className="development__code-head">
                            <div className='development__code-stroke'>
                                <a href="http://www.lcs-it.com/" className='development__code-str'>http://www.lcs-it.com/</a>
                                <img src={searchIcon} alt="" className='development__code-loop' />
                            </div>
                        </div>
                        <div className="development__code-main">
                            <div className="development__code-main-row">
                                <button className='development__code-btn development__code-btn--active'>index.html</button>
                                <button className='development__code-btn'>script.js</button>
                                <button className='development__code-btn'>package.json</button>
                            </div>

                            <div className="code__text">
                                        {codeStr1 &&
                                        <>
                                            <span className='code__str-num'>1</span>
                                            <p className='code__str1 doctype-name-tag'>{'<!DOCTYPE html>'}</p>
                                        </>
                                        }
                                        {codeStr2 &&
                                        <>
                                            <span className='code__str-num'>2</span> 
                                            <p className='code__str2'>
                                                <span className='tag'>{'<'}</span>
                                                <span className='default-name-tage'>html </span> 
                                                <span className='blue-atribut'>{'lang="en">'}</span>
                                            </p>
                                        </>
                                        }
                                        {codeStr3 &&
                                        <>
                                            <span className='code__str-num'>3</span> 
                                            <p className='code__str3'>
                                                <span className='tag'>{'<'}</span>
                                                <span className='default-name-tage'>head</span>
                                                <span className='tag'>{'>'}</span>
                                            </p>
                                        </>
                                        }
                                        {codeStr4 &&
                                        <>
                                            <span className='code__str-num'>4</span> 
                                            <p className='code__str4'>
                                                <span className='tag'>{'<'}</span>
                                                <span className='default-name-tage'>meta </span>
                                                <span className='blue-atribut'>charset="UTF-8"</span>
                                                <span className='tag'>{'>'}</span>
                                            </p>
                                        </>
                                        }
                                        {codeStr5 &&
                                            <>
                                                <span className='code__str-num'>5</span> 
                                                <p className='code__str5'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>meta </span>
                                                    <span className='atribut'>name</span>
                                                    <span className='atribut-value'>="viewport" </span>
                                                    <span className='atribut'>content</span>
                                                    <span className='atribut-value'>="width=device-width, </span>
                                                    <span className='atribut'>initial-scale</span>
                                                    <span className='atribut-value'>=1.0"</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr6 &&
                                            <>
                                                <span className='code__str-num'>6</span> 
                                                <p className='code__str6'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>meta </span>
                                                    <span className='atribut'>http-equiv</span>
                                                    <span className='atribut-value'>="X-UA-Compatible" </span>
                                                    <span className='atribut'>content</span>
                                                    <span className='atribut-value'>="ie=edge"</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr7 &&
                                            <>
                                                <span className='code__str-num'>7</span> 
                                                <p className='code__str7'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>title</span>
                                                    <span className='tag'>{'>'}</span>
                                                    <span className='tag-text'>My Website</span>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>title</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr8 &&
                                            <>
                                                <span className='code__str-num'>8</span> 
                                                <p className='code__str8'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>link </span>
                                                    <span className='atribut'>rel</span>
                                                    <span className='atribut-value'>="stylesheet" </span>
                                                    <span className='atribut'>href</span>
                                                    <span className='atribut-value'>="./style.css"</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr9 &&
                                            <>
                                                <span className='code__str-num'>9</span> 
                                                <p className='code__str9'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>link </span>
                                                    <span className='atribut'>rel</span>
                                                    <span className='atribut-value'>="icon" </span>
                                                    <span className='atribut'>href</span>
                                                    <span className='atribut-value'>="./favicon.ico" </span>
                                                    <span className='atribut'>type</span>
                                                    <span className='atribut-value'>="image/x-icon"</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr10 &&
                                            <>
                                                <span className='code__str-num'>10</span> 
                                                <p className='code__str10'>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>head</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr11 &&
                                            <>
                                                <span className='code__str-num'>11</span> 
                                                <p className='code__str11'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>body</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr12 &&
                                            <>
                                                <span className='code__str-num'>12</span> 
                                                <p className='code__str12'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>main</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr13 &&
                                            <>
                                                <span className='code__str-num'>13</span> 
                                                <p className='code__str13'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>h1</span>
                                                    <span className='tag'>{'>'}</span>
                                                    <span className='tag-text'>Welcome to My Website</span>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>h1</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr14 &&
                                            <>
                                                <span className='code__str-num'>14</span> 
                                            <p className='code__str14'>
                                                <span className='tag'>{'</'}</span>
                                                <span className='default-name-tage'>main</span>
                                                <span className='tag'>{'>'}</span>
                                            </p>
                                            </>
                                        }
                                        {codeStr15 &&
                                            <>
                                                <span className='code__str-num'>15</span> 
                                                <p className='code__str15'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>script </span>
                                                    <span className='atribut'>src</span>
                                                    <span className='atribut-value'>="index.js"</span>
                                                    <span className='tag'>{'>'}</span>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>script</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {codeStr16 &&
                                            <>
                                                <span className='code__str-num'>16</span> 
                                                <p className='code__str16'>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>body</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                    <>
                                    </>
                            </div>

                        </div>
                    </div>
                    <div className="development__blocks-activityAndDevelopers">
                        <div className="development__blocks-activity">
                            {animationStart &&
                                <Lottie animationData={activityLottie} loop={false} />
                            }
                        </div>
                        <div className="development__blocks-developers" ref={ref}>
                            <div className="development__developers-head">
                                <p className='development__developers-title'>Developers</p>
                                <p className='development__developers-all'>See all</p>
                            </div>
                            <ul className='development__developers-list'>
                                <li className='development__developers-item'>
                                    <div className="development__developers-main-inf">
                                        <img src={developers1} alt="" className='development__developers-avatar transfer-from' />
                                        <div className="development__developers-inf">
                                            <p className='development__developers-transfers'>Tranfers from</p>
                                            <p className='development__developers-name'>Matheus Ferrero</p>
                                        </div>
                                    </div>
                                    <p className='development__developers-position'>Junior</p>
                                </li>
                                <li className='development__developers-item'>
                                    <div className="development__developers-main-inf">
                                        <img src={developers2} alt="" className='development__developers-avatar' />
                                        <div className="development__developers-inf">
                                            <p className='development__developers-transfers'>Tranfers to</p>
                                            <p className='development__developers-name'>Floyd Miles</p>
                                        </div>
                                    </div>
                                    <p className='development__developers-mooney'>-$39.65</p>
                                </li>
                                <li className='development__developers-item'>
                                    <div className="development__developers-main-inf">
                                        <img src={developers3} alt="" className='development__developers-avatar' />
                                        <div className="development__developers-inf">
                                            <p className='development__developers-transfers'>Tranfers to</p>
                                            <p className='development__developers-name'>Jerome Bell</p>
                                        </div>
                                    </div>
                                    <p className='development__developers-mooney'>-$29.78</p>
                                </li>
                                <li className='development__developers-item'>
                                    <div className="development__developers-main-inf">
                                        <img src={developers4} alt="" className='development__developers-avatar' />
                                        <div className="development__developers-inf">
                                            <p className='development__developers-transfers'>Tranfers to</p>
                                            <p className='development__developers-name'>Ralph Edwards</p>
                                        </div>
                                    </div>
                                    <p className='development__developers-mooney'>-$46.61</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2, once: true }}
                    className="development__keyboard"
                >
                    <motion.img src={developmentKeyboard} alt="" variants={motionAnimation} />
                    <motion.div className="development__keyboard-info" variants={motionAnimation}>
                        <p className="development__keyboard-text">We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.</p>
                        <ContactBtn setModal={setModal}/>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Development;