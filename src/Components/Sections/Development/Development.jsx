import React, { useEffect, useState } from 'react';
import './development.scss';
import developmentKeyboard from '../../../assets/img/developmentKeyboard.jpg';
import developers1 from '../../../assets/svg/developers1.svg';
import developers2 from '../../../assets/svg/developers2.svg';
import developers3 from '../../../assets/svg/developers3.svg';
import developers4 from '../../../assets/svg/developers4.svg';
import searchIcon from '../../../assets/svg/search-normal.svg';
import activity from '../../../assets/img/Activity.png';
import overview from '../../../assets/img/Overview.png';
import logo from '../../../assets/svg/lcsItLogo.svg';
import ContactBtn from '../../ContactBtn/ContactBtn';

function Development({ setModal }) {

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


    useEffect((e) => {
        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
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
                                            <span className='tag'>{'>'}</span>
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
                        <ContactBtn setModal={setModal}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Development;