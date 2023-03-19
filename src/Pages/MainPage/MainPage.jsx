import React, { useEffect, useState } from 'react';
import logo from '../../assets/svg/lcsItLogo.svg';
import './mainPage.scss';
import mainBg from '../../assets/img/sectionBg.png';
import { AiOutlineArrowDown } from 'react-icons/ai';
import cssIcon from '../../assets/svg/css.svg';
import figmaIcon from '../../assets/svg/figma.svg';
import gitIcon from '../../assets/svg/git.svg';
import mssqlIcon from '../../assets/svg/mssql.svg';
import pgsqlIcon from '../../assets/svg/pgsql.svg';
import mongoIcon from '../../assets/svg/mongodb.svg';
import nestIcon from '../../assets/svg/nest-js.svg';
import experienceCard1 from '../../assets/img/experienceCard1.jpg';
import experienceCard2 from '../../assets/img/experienceCard2.jpg';
import experienceCard3 from '../../assets/img/experienceCard3.jpg';
import outsourcingBg1 from '../../assets/img/moleculaBg1.png';
import outsourcingBg2 from '../../assets/img/moleculaBg2.png';
import outsourcingBg3 from '../../assets/img/moleculaBg3.png';
import outsourcingCard1 from '../../assets/svg/outsorcingCard6.svg';
import outsourcingCard2 from '../../assets/svg/reactjs.svg';
import outsourcingCard3 from '../../assets/svg/android.svg';
import outsourcingCard4 from '../../assets/svg/java.svg';
import outsourcingCard5 from '../../assets/svg/php.svg';
import seoIcon1 from '../../assets/svg/seoIcon1.svg';
import seoIcon2 from '../../assets/svg/seoIcon2.svg';
import seoIcon3 from '../../assets/svg/seoIcon3.svg';
import { FiArrowUpRight } from 'react-icons/fi';
import usaFlag from '../../assets/svg/usa.svg';
import ukFlag from '../../assets/svg/uk.svg';
import canadaFlag from '../../assets/svg/canada.svg';
import usaLine from '../../assets/img/usaLine.png';
import ukLine from '../../assets/img/ukLine.png';
import canadaLine from '../../assets/img/canadaLine.png';
import usaResult from '../../assets/svg/usaResult.svg';
import ukResult from '../../assets/svg/ukResult.svg';
import canadaResult from '../../assets/svg/canadaResult.svg';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/inst.svg';
import linkedIn from '../../assets/svg/linkedIn.svg';
import telegram from '../../assets/svg/telegram.svg';
import gitHub from '../../assets/svg/github.svg';
import designBg from '../../assets/img/designBg.png';
import designCard1 from '../../assets/img/designCard1.png';
import designCard2 from '../../assets/img/designCard2.png';
import designCard3 from '../../assets/img/designCard3.png';
import designCard4 from '../../assets/img/designCard4.png';
import user from '../../assets/svg/user.svg';
import blocknot from '../../assets/svg/blaknot.svg';
import rocket from '../../assets/svg/rocket.svg';
import circleIcon1 from '../../assets/svg/facebookPurple.svg';
import circleIcon2 from '../../assets/svg/ELEMENTS.svg';
import circleIcon3 from '../../assets/svg/telegaPurple.svg';
import circleIcon4 from '../../assets/svg/Subtract.svg';
import circleIcon5 from '../../assets/svg/Group 9.svg';
import circleIcon6 from '../../assets/svg/Group 81.svg';
import circleIcon7 from '../../assets/svg/isntPurple.svg';
import moonkle from '../../assets/svg/moonkle.svg';
import softTech from '../../assets/svg/softTech.svg';
import plaid from '../../assets/svg/plaid.svg';
import estimation from '../../assets/img/estimation.png';
import teamSelection from '../../assets/img/teamSelection.png';
import contract from '../../assets/img/contract.png';
import payment from '../../assets/img/payment.png';
import bigCoubes from '../../assets/img/bigCoubes.png';
import keyboard from '../../assets/img/keyboard.png';
import miniCoubes from '../../assets/img/miniCoubes.png';
import teamBg from '../../assets/img/teamBg.png';
import grid from '../../assets/img/grid.png';
import locationBg from '../../assets/img/locationBg.jpg';
import poland from '../../assets/svg/poland.svg';
import locationLocation from '../../assets/svg/locationLocation.svg';
import locationMain from '../../assets/svg/locationMain.svg';
import locationPhone from '../../assets/svg/locationPhone.svg';
import developmentKeyboard from '../../assets/img/developmentKeyboard.jpg';
import developers1 from '../../assets/svg/developers1.svg';
import developers2 from '../../assets/svg/developers2.svg';
import developers3 from '../../assets/svg/developers3.svg';
import developers4 from '../../assets/svg/developers4.svg';
import Marquee from "react-fast-marquee";
import searchIcon from '../../assets/svg/search-normal.svg';
import activity from '../../assets/img/Activity.png';
import overview from '../../assets/img/Overview.png';
import letterA from '../../assets/img/letterA.png';
import server from '../../assets/img/Server.png';
import activeServer from '../../assets/img/activeServer.png';
import Modal from '../../Components/Modal';

function MainPage() {

    const VIEW_BLOCK1_IN_HTML_SECTION = 1062;
    const VIEW_BLOCK2_IN_HTML_SECTION = 1121;
    const VIEW_BLOCK3_IN_HTML_SECTION = 1231;
    const VIEW_BLOCK4_IN_HTML_SECTION = 1311;
    
    const [viewFirstBlock, setViewFirstBlock] = useState(false);
    const [viewSecondBlock, setViewSecondBlock] = useState(false);
    const [viewThirdBlock, setViewThirdBlock] = useState(false);
    const [viewFouthBlock, setViewFouthBlock] = useState(false);

    const onScroll = (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;
        if(scrollTop >= VIEW_BLOCK1_IN_HTML_SECTION) {
            setViewFirstBlock(true);
        }
        if(scrollTop >= VIEW_BLOCK2_IN_HTML_SECTION) {
            setViewSecondBlock(true);
        }
        if(scrollTop >= VIEW_BLOCK3_IN_HTML_SECTION) {
            setViewThirdBlock(true);
        }
        if(scrollTop >= VIEW_BLOCK4_IN_HTML_SECTION) {
            setViewFouthBlock(true);
        }
    }


    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, []);


/*     useEffect(() => {
        let mouse = {
            X   : 0,
            Y   : 0,
            CX  : 0,
            CY  : 0
        };
        
        let box = document.getElementById('experience__list');
        
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = '<h2>Hover Me</h2><p>Weelcome to updated card effect</p>';
        
        let light = document.createElement('div');
        light.className = 'light';
        
        box.appendChild(card);
        card.appendChild(light);
        
        document.body.onmousemove = function(e) 
        {
            mouse.X = (e.clientX - card.offsetLeft) ;
            mouse.Y = (e.clientY - card.offsetTop);
        };
        
        function step(timestamp) 
        {
            let targetY = mouse.Y;
            let dy = targetY - mouse.CY;
            mouse.CY += dy * 0.05;
        
            let targetX = mouse.X;
            let dx = targetX - mouse.CX;
            mouse.CX += dx * 0.05;
            
            light.style.background = 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)';
        
            requestAnimationFrame(step);
        }
        
        requestAnimationFrame(step);
    }, []); */


    const codeElem = `<!DOCTYPE html> 
    <html lang="en">  
      <head>   
         <meta charset="UTF-8">    
         <meta name="viewport" content="width=device-width, initial-scale=1.0">     
         <meta http-equiv="X-UA-Compatible" content="ie=edge">7      
         <title>My Website</title>       
         <link rel="stylesheet" href="./style.css">       
         <link rel="icon" href="./favicon.ico" type="image/x-icon">      
     </head>     
        <body>    
            <main>   
                <h1>Welcome to My Website</h1>    
            </main>
            <script src="index.js"></script>
        </body>`
    const [modal, setModal] = useState(false);

    return (
        <React.Fragment>
            {modal &&
                <Modal />
            }
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="" className='header__logo-img' />
                    <p className='header__logo-name'>LCS-IT</p>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item">Contacts</li>
                        <li className="header__list-item">Company</li>
                        <li className="header__list-item">Outsourcing</li>
                        <li className="header__list-item">Services</li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <section className='welcome'>
                    <div className="welcome__info">
                        <ul className="welcome__skills">
                            <li className="welcome__skills-item">Functional</li>
                            <li className="welcome__skills-item">Perfomance</li>
                            <li className="welcome__skills-item">Usability</li>
                        </ul>
                        <h1 className='welcome__title'>Software  Development</h1>
                        <p className="welcome__subtitle">LCS-IT is a prompt solution to issues, complex unique technological developments.</p>
                        <button className='welcome__btn btn-contact' onClick={() => setModal(true)}>Contact Us</button>
                    </div>
                    <div className="welcome__cube">
                        <div className="cube">
                            <canvas id="canvas3d"></canvas>
                        </div>
                    </div>
                </section>
                <p className='main__scroll-text'>scroll down <AiOutlineArrowDown className='main__scroll-icon' /></p>
                <section className='experience'>
                    <div className="experience__block">
                        <h2 className='experience__title'>Tremendous experience</h2>
                        
                        <ul className='experience__list' id='experience__list'>
                            <li className='experience__card'>
                                <div className='experience__card-item'>
                                    <span class="circleLight"></span>
                                    <img src={experienceCard1} alt="" />
                                    <p className='experience__card-title'>Software development</p>
                                </div>
                            </li>
                            <li className='experience__card'>
                                <img src={experienceCard2} alt="" />
                                <p className='experience__card-title'>Outsourcing</p>
                            </li>
                            <li className='experience__card'>
                                <img src={experienceCard3} alt="" />
                                <p className='experience__card-title'>Design</p>
                            </li>
                        </ul>

                        <p className='experience__text'>LCS-IT is a modern and creative IT company, where products of any complexityand scale are created! Our team consists of only experienced developers,designers, and friendly managers who implement all your bold ideas using thelatest technology. We implement, maintain, and service. We provide an On-Demand Developers service. On call 24/7.</p>
                    </div>
                    <Marquee
                        delay={0}
                        speed={30}
                        loop={0}
                        gradient={false}
                        className='swiper'
                    >
                        <div className='experience__skills-card'>
                            <img src={cssIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>CSS 3</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={figmaIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Figma</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={gitIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Git</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={mssqlIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>MSSQL</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={pgsqlIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>PostgreSQL</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={mongoIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>MongoDB</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={nestIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Nest.Js</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={cssIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>CSS 3</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={figmaIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Figma</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={gitIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Git</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={mssqlIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>MSSQL</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={pgsqlIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>PostgreSQL</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={mongoIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>MongoDB</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={nestIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Nest.Js</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={cssIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>CSS 3</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={figmaIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Figma</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={gitIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Git</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={mssqlIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>MSSQL</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={pgsqlIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>PostgreSQL</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={mongoIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>MongoDB</h5>
                        </div>
                        <div className='experience__skills-card'>
                            <img src={nestIcon} alt="" className='experience__skills-img' />
                            <h5 className='experience__skills-name'>Nest.Js</h5>
                        </div>
                    </Marquee>
                </section>
                <section className='development'>
                    <h2 className='development__title'>Software development</h2>
                    <div className="development__code">
                        <div className="development__blocks">
                            <div className="development__blocks-overview">
                                <img src={overview} alt="" />
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
                                        {viewFirstBlock &&
                                            <>
                                                <span className='code__str-num'>1</span>
                                                <p className='code__str1 doctype-name-tag'>{'<!DOCTYPE html>'}</p>
                                                <span className='code__str-num'>2</span> 
                                                <p className='code__str2'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>html </span> 
                                                    <span className='blue-atribut'>{'lang="en">'}</span>
                                                </p>
                                                <span className='code__str-num'>3</span> 
                                                <p className='code__str3'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>head</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                                <span className='code__str-num'>4</span> 
                                                <p className='code__str4'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>meta </span>
                                                    <span className='blue-atribut'>charset="UTF-8"</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {viewSecondBlock &&
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
                                        {viewThirdBlock &&
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
                                                <span className='code__str-num'>10</span> 
                                                <p className='code__str10'>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>head</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                                <span className='code__str-num'>11</span> 
                                                <p className='code__str11'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>body</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                                <span className='code__str-num'>12</span> 
                                                <p className='code__str12'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>main</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                        {viewFouthBlock &&
                                            <>
                                                <span className='code__str-num'>13</span> 
                                                <p className='code__str13'>
                                                    <span className='tag'>{'<'}</span>
                                                    <span className='default-name-tage'>h1</span>
                                                    <span className='tag'>{'>'}</span>
                                                    <span className='tag-text'>Welcome to My Website</span>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>h1</span>
                                                    <span className='tag'>{'<'}</span>
                                                </p>
                                                <span className='code__str-num'>14</span> 
                                                <p className='code__str14'>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>main</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
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
                                                <span className='code__str-num'>16</span> 
                                                <p className='code__str16'>
                                                    <span className='tag'>{'</'}</span>
                                                    <span className='default-name-tage'>body</span>
                                                    <span className='tag'>{'>'}</span>
                                                </p>
                                            </>
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="development__blocks-activityAndDevelopers">
                                <div className="development__blocks-activity">
                                    <img src={activity} alt="" />
                                </div>
                                <div className="development__blocks-developers">
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
                        </div>
                        <div className="development__keyboard">
                            <img src={developmentKeyboard} alt="" />
                            <div className="development__keyboard-info">
                                <p className="development__keyboard-text">We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.</p>
                                <button className='btn-contact'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </section>
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
                                <button className='btn-contact'>Contact Us</button>
                            </li>
                        </ul>
                    </div>
                    <img src={outsourcingBg1} alt="" className='outsourcing__bg1' />
                    <img src={outsourcingBg2} alt="" className='outsourcing__bg2' />
                    <img src={outsourcingBg3} alt="" className='outsourcing__bg3' />
                </section>
                <section className='seo'>
                    <h2 className='seo__title'>SEO</h2>
                    <div className="seo__navigate">
                        <div className="seo__titles">
                            <button className='seo__navigate-btn seo__navigate-btn--active'>Keyword Research</button>
                            <button className='seo__navigate-btn'>Proactive Strategy</button>
                            <button className='seo__navigate-btn'>Content Optimization</button>
                            <button className='seo__navigate-btn'>Site Performance</button>
                            <button className='seo__navigate-btn'>Monitoring And Reporting</button>
                        </div>
                        <div className="seo__icons">
                            <button>
                                <img src={seoIcon1} alt="" className='seo__icons-img' />
                            </button>
                            <button>
                                <img src={seoIcon2} alt="" className='seo__icons-img' />
                            </button>
                            <button>
                                <img src={seoIcon3} alt="" className='seo__icons-img' />
                            </button>
                        </div>
                    </div>
                    <ul className="seo__row">
                        <li className='seo__card'>
                            <div className="seo__card-header">
                                <div className="seo__card-header-left">
                                    <img src={usaFlag} alt="" className='seo__card-flag' />
                                    <p className='seo__card-country'>USA</p>
                                    <FiArrowUpRight className='seo__card-arrow' />
                                </div>
                                <button className='seo__card-volume-btn usa-volume'>Volume</button>
                            </div>
                            <div className="seo__card-statistic">
                                <img src={usaLine} alt="" className='seo__graphic-bg' />
                                <div className="seo__card-result">
                                    <div className="seo__card-result-img">
                                        <img src={usaResult} alt="" />
                                    </div>
                                    <p className='seo__card-result-title'>Result</p>    
                                </div>
                                <div className="seo__card-kd">
                                    <p className='seo__card-kd-proccent'>55%</p>
                                    <p className='seo__card-kd-title'>KD</p>
                                </div>
                                <div className="seo__card-volume">
                                    <p className='seo__card-volume-count'>1,2K</p>
                                    <p className='seo__card-volume-title'>Volume</p>
                                </div>
                            </div>
                            <p className='seo__card-text'>You have a decent chance of ranking for</p>
                            <button className='btn-contact seo-btn'>Contact Us</button>
                        </li>
                        <li className='seo__card'>
                            <div className="seo__card-header">
                                <div className="seo__card-header-left">
                                    <img src={ukFlag} alt="" className='seo__card-flag' />
                                    <p className='seo__card-country'>UK</p>
                                    <FiArrowUpRight className='seo__card-arrow' />
                                </div>
                                <button className='seo__card-volume-btn uk-volume'>Volume</button>
                            </div>
                            <div className="seo__card-statistic">
                                <img src={ukLine} alt="" className='seo__graphic-bg' />
                                <div className="seo__card-result">
                                    <div className="seo__card-result-img">
                                        <img src={ukResult} alt="" />
                                    </div>
                                    <p className='seo__card-result-title'>Result</p>
                                </div>
                                <div className="seo__card-kd">
                                    <p className='seo__card-kd-proccent'>55%</p>
                                    <p className='seo__card-kd-title'>KD</p>
                                </div>
                                <div className="seo__card-volume">
                                    <p className='seo__card-volume-count'>1,2K</p>
                                    <p className='seo__card-volume-title'>Volume</p>
                                </div>
                            </div>
                            <p className='seo__card-text'>You have a decent chance of ranking for</p>
                            <button className='btn-contact seo-btn'>Contact Us</button>
                        </li>
                        <li className='seo__card'>
                            <div className="seo__card-header">
                                <div className="seo__card-header-left">
                                    <img src={canadaFlag} alt="" className='seo__card-flag' />
                                    <p className='seo__card-country'>CAN</p>
                                    <FiArrowUpRight className='seo__card-arrow' />
                                </div>
                                <button className='seo__card-volume-btn canada-volume'>Volume</button>
                            </div>
                            <div className="seo__card-statistic">
                                <img src={canadaLine} alt="" className='seo__graphic-bg' />
                                <div className="seo__card-result">
                                    <div className="seo__card-result-img">
                                        <img src={canadaResult} alt="" />
                                    </div>
                                    <p className='seo__card-result-title'>Result</p>
                                </div>
                                <div className="seo__card-kd">
                                    <p className='seo__card-kd-proccent'>55%</p>
                                    <p className='seo__card-kd-title'>KD</p>
                                </div>
                                <div className="seo__card-volume">
                                    <p className='seo__card-volume-count'>1,2K</p>
                                    <p className='seo__card-volume-title'>Volume</p>
                                </div>
                            </div>
                            <p className='seo__card-text'>You have a decent chance of ranking for</p>
                            <button className='btn-contact seo-btn'>Contact Us</button>
                        </li>
                    </ul>
                    <div className="seo__pagination">
                        <div className="seo__pagination-wrap">
                            <HiArrowLeft className='seo__pagination-icon'/>
                        </div>
                        <div className="seo__pagination-wrap">
                            <HiArrowRight className='seo__pagination-icon' />
                        </div>
                    </div>
                </section>
                <section className='design'>
                    <img src={designBg} alt="" className='design__bg' />
                    <h2 className='design__title'>Design</h2>
                    <p className='design__text'>As a full-service UX design agency, we work closely with our clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.</p>
                    <ul className='design__types'>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Graphic Design</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Branding</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Competitor Analysis</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Packaging Design</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Social Media</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Digital Advertising</p>
                        </li>
                    </ul>
                    <Marquee
                        delay={0}
                        speed={30}
                        loop={0}
                        gradient={false}
                        className='swiper-design'
                    >
                        <div className="design__card">
                            <img src={designCard1} alt="" className='design__card-img' />
                            <p className='design__card-title'>Product Strategy</p>
                            <p className='design__card-text'>We help to build your brand’s mission, vision and values while creating your unique identity and position in the market. We love to make people feel something by crafting stories that connect to people’s hearts.</p>
                        </div>
                        <div className="design__card">
                            <img src={designCard2} alt="" className='design__card-img' />
                            <img src={letterA} alt="" className='design__card-img-letter' />
                            <p className='design__card-title'>Brand Identity</p>
                            <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                        </div>
                        <div className="design__card">
                            <img src={designCard3} alt="" className='design__card-img' />
                            <p className='design__card-title'>UI/UX Design</p>
                            <p className='design__card-text'>Boost your brand awareness and customer loyalties, increase product revenues and conversion rates with the implementation of user experience and user interface design.</p>
                        </div>
                        <div className="design__card">
                            <div className="design__card-square"></div>
                            <img src={server} alt="" className='design__card-server-img' />
                            <img src={activeServer} alt="" className='design__card-server-img--active' />
                            {/* <img src={designCard4} alt="" className='design__card-img' /> */}
                            <p className='design__card-logo-title'>Logo</p>
                            <p className='design__card-title'>Prototype</p>
                            <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                        </div>
                        <div className="design__card">
                            <img src={designCard3} alt="" className='design__card-img' />
                            <p className='design__card-title'>Web Design</p>
                            <p className='design__card-text'>The process of planning and building the elements of the website. Creation of the overall visual appearance of the website.</p>
                        </div>
                    </Marquee>
                </section>
                <section className='scheme'>
                    <h2 className='scheme__title'>Scheme of Work</h2>
                    <div className="scheme__content">
                        <div className="scheme__list">
                            <div className="scheme__row-icons">
                                <div className="scheme__row-icon-wrap">
                                    <img src={user} alt="" className='scheme__row-icon' />
                                </div>
                                <div className='scheme__row-line'></div>

                                <div className="scheme__row-icon-wrap">
                                    <img src={blocknot} alt="" className='scheme__row-icon' />
                                </div>
                                <div className='scheme__row-line'></div>

                                <div className="scheme__row-icon-wrap">
                                    <img src={rocket} alt="" className='scheme__row-icon' />
                                </div>
                            </div>
                            <ul className='scheme__row-cards'>
                                <li className='scheme__row-card'>
                                    <h3 className='scheme__row-title'>Contact us</h3>
                                    <p className='scheme__row-text'>Fill out the contact form, brifle descride your project or ask us a question</p>
                                </li>
                                <li className='scheme__row-card'>
                                    <h3 className='scheme__row-title'>Discovery call</h3>
                                    <p className='scheme__row-text'>Andrew - our CEO will arrange a video meeting with you in order to clarify the project assumptions</p>
                                </li>
                                <li className='scheme__row-card'>
                                    <h3 className='scheme__row-title'>Project estimation</h3>
                                    <p className='scheme__row-text'>On the basis of the collected information, we will prepare an estimate of the costs and  duration of the project</p>
                                </li>
                            </ul>
                        </div>
                        <div className="scheme__ilustration">
                            <div className="scheme__ilustration-content">
                                <div className="scheme__ilustration-circle">
                                    <div className="scheme__ilustration-logo">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div className="scheme__ilustration-circle-icon scheme__ilustration-icon1">
                                        <img src={circleIcon1} alt="" />
                                    </div>
                                    <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon2">
                                        <img src={circleIcon2} alt="" />
                                    </div>
                                    <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon3">
                                        <img src={circleIcon3} alt="" />
                                    </div>
                                    <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon4">
                                        <img src={circleIcon4} alt="" />
                                    </div>
                                    <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon5">
                                        <img src={circleIcon5} alt="" />
                                    </div>
                                    <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon6">
                                        <img src={circleIcon6} alt="" />
                                    </div>
                                    <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon7">
                                        <img src={circleIcon7} alt="" />
                                    </div>
                                    <div className="scheme__ilustration-circle-icon  scheme__ilustration-icon8">
                                        <img src={circleIcon1} alt="" />
                                    </div>
                                </div>
                                <div className="sheme__cards-wrap">
                                    <div className="scheme__recents">
                                        <div className="scheme__triangles">
                                            <div className="scheme__triangle scheme__triangle-mini"></div>
                                            <div className="scheme__triangle scheme__triangle-mid"></div>
                                            <div className="scheme__triangle scheme__triangle-big"></div>
                                        </div>
                                        <p className='scheme__recents-title'>Recents Contacts</p>
                                        <ul className='scheme__recents-list'>
                                            <li className='sheme__recents-item'>
                                                <img src={moonkle} alt="" className='sheme__recents-icon' />
                                                <div className="sheme__recents-info">
                                                    <p className="sheme__recents-item-name">Moonkle LTD</p>
                                                    <p className="sheme__recents-item-subtitle">Bank - 0987 3422 8756</p>
                                                </div>
                                            </li>
                                            <li className='sheme__recents-item'>
                                                <img src={softTech} alt="" className='sheme__recents-icon' />
                                                <div className="sheme__recents-info">
                                                    <p className="sheme__recents-item-name">Soft Tech</p>
                                                    <p className="sheme__recents-item-subtitle">Bank - 0987 3422 8756</p>
                                                </div>
                                            </li>
                                            <li className='sheme__recents-item'>
                                                <img src={plaid} alt="" className='sheme__recents-icon' />
                                                <div className="sheme__recents-info">
                                                    <p className="sheme__recents-item-name">PLAID</p>
                                                    <p className="sheme__recents-item-subtitle">Bank - 0987 3422 8756</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="sheme__plan">
                                        <div className="scheme__triangles scheme__triangles-plan ">
                                            <div className="scheme__triangle scheme__triangle-mini"></div>
                                            <div className="scheme__triangle scheme__triangle-mid"></div>
                                            <div className="scheme__triangle scheme__triangle-big"></div>
                                        </div>
                                        <li className="scheme__plan-item">
                                            <img src={estimation} alt="" className="scheme__plan-img" />
                                            <p className='scheme__plan-name'>Estimation</p>
                                        </li>
                                        <li className="scheme__plan-item">
                                            <img src={teamSelection} alt="" className="scheme__plan-img" />
                                            <p className='scheme__plan-name'>Team selection</p>
                                        </li>
                                        <li className="scheme__plan-item">
                                            <img src={contract} alt="" className="scheme__plan-img" />
                                            <p className='scheme__plan-name'>Contract</p>
                                        </li>
                                        <li className="scheme__plan-item">
                                            <img src={payment} alt="" className="scheme__plan-img" />
                                            <p className='scheme__plan-name'>Payment</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='business'>
                    <h2 className='business__title'>Business model</h2>
                    <div className="business__model">
                        <div className="business__big-coubes">
                            <img src={bigCoubes} alt="" />
                        </div>
                        <div className="business__keyboard">
                            <img src={keyboard} alt="" />
                        </div>
                        <div className="business__cards">
                            <div className="business__outstaffing">
                                <img src={outsourcingCard1} alt="" className='business__outstaffing-icon' />
                                <h4 className='business__outstaffing-title'>Outstaffing</h4>
                            </div>
                            <div className="business__team">
                                <img src={teamBg} alt="" className='business__team-bg' />
                                <h4 className='business__team-title'>Dedicated Team</h4>
                            </div>
                            <div className="business__outsorcing">
                                <img src={outsourcingCard1} alt="" className='business__outsorcing-icon' />
                                <h4 className='business__outsorcing-title'>Outsourcing</h4>
                                <img src={grid} alt="" className='business__outsorcing-bg' />
                            </div>
                        </div>
                        <div className="business__mini-coubes">
                            <img src={miniCoubes} alt="" />
                        </div>
                    </div>
                </section>
                <section className='location'>
                    <h2 className='location__title'>Our Locations</h2>
                    <div className="location__content">
                        <div className="location__selector">
                            <div className="location__selector-uk location__selector--active">
                                <img src={ukFlag} alt="" className='location__selector-img' />
                                <p className='location__selector-name'>United Kingdom</p>
                            </div>
                            <div className="location__selector-poland">
                                <img src={poland} alt="" className='location__selector-img' />
                                <p className='location__selector-name'>Poland</p>
                            </div>
                        </div>
                        <div className="location__card">
                            <ul>
                                <li className='location__card-item'>
                                    <img src={locationPhone} alt="" className='location__card-icon' />
                                    <p className='location__inf'>+44(0)2070 528 406</p>
                                </li>
                                <li className='location__card-item'>
                                    <img src={locationMain} alt="" className='location__card-icon' />
                                    <p className='location__inf'>info@lcs-it.com</p>
                                </li>
                                <li className='location__card-item'>
                                    <img src={locationLocation} alt="" className='location__card-icon' />
                                    <p className='location__inf'>United Kingdom London SW1X 7NE  Knightsbridge Green </p>
                                </li>
                            </ul>
                            <div className="location__btn">
                                <button className='btn-contact'>Contact us</button>
                            </div>
                        </div>
                    </div>
                    <img src={locationBg} alt="" className='location__bg' />
                </section>
            </main>
            
            <footer className='footer'>
                <div className="footer__content">
                    <div className="footer__logo">
                        <img src={logo} alt="" className='footer__logo-img' />
                        <p className='footer__logo-name'>LCS-IT</p>
                    </div>
                    <div className="footer__adress">
                        <p className='footer__adress-title'>Adress</p>
                        <ul className='footer__adress-list'>
                            <li className='footer__adress-item'>1 Knightsbridge Green London SW1X 7NE United Kingdom</li>
                            <li className='footer__adress-item'>info@lcs-it.com</li>
                            <li className='footer__adress-item'>+44(0)2070 528 406</li>
                        </ul>
                    </div>
                    <div className="footer__about">
                        <p className='footer__about-title'>About</p>
                        <ul className="footer__about-list">
                            <li className='footer__about-item'>Contacts</li>
                            <li className='footer__about-item'>Company</li>
                            <li className='footer__about-item'>Outsourcing</li>
                            <li className='footer__about-item'>Services</li>
                        </ul>
                    </div>
                    <div className="footer__folow">
                        <p className='footer__folow-title'>Follow Us</p>
                        <ul className='footer__folow-list'>
                            <li className='footer__folow-item'>
                                <img src={facebook} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={instagram} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={linkedIn} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={telegram} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={gitHub} alt="" className='footer__folow-img' />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__container-down">
                    <ul className="footer__terms-list">
                        <li className="footer__terms-item">All right reserved 2022 Ⓒ LCS-IT</li>
                        <li className="footer__terms-item">Privacy policy</li>
                        <li className="footer__terms-item">Therm of use</li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default MainPage;