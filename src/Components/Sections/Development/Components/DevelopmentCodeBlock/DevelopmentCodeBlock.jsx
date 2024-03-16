import { useState } from 'react';
import searchIcon from '../../../../../assets/svg/search-normal.svg';
import logo from '../../../../../assets/svg/lcsItLogo.svg';
import './developmentCodeBlock.scss';
import { useEffect } from 'react';

function DevelopmentCodeBlock({ animationStart, codeRef }) {

    const [blockName, setBlockName] = useState([]);

    useEffect(() => {
        if(animationStart) {
            let count = 0;
            const setStrInterval = setInterval(() => {
                count += 1;
                setBlockName((prev) => [...prev, `block${count}`]);
            }, 500);
        
            setTimeout(() => {
                clearInterval(setStrInterval);
            }, 8000);
        }
    }, [animationStart]);

    return (
        <div className="development__blocks-code">
            <div className="development__code-left">
                <img src={logo} alt="" className='development__code-logo' loading="lazy" />
            </div>
            <div className="development__code-head">
                <div className='development__code-stroke'>
                    <a href="http://www.lcs-it.com/" className='development__code-str'>http://www.lcs-it.com/</a>
                    <img src={searchIcon} alt="" className='development__code-loop' loading="lazy" />
                </div>
            </div>
            <div className="development__code-main">
                <div className="development__code-main-row">
                    <button className='development__code-btn development__code-btn--active'>index.html</button>
                    <button className='development__code-btn'>script.js</button>
                    <button className='development__code-btn'>package.json</button>
                </div>
                <div className="code__text" ref={codeRef}>
                    {blockName.includes('block1') &&
                        <>
                            <span className='code__str-num'>1</span>
                            <p className='code__str1 doctype-name-tag'>{'<!DOCTYPE html>'}</p>
                        </>
                    }
                    {blockName.includes('block2') &&
                        <>
                            <span className='code__str-num'>2</span> 
                            <p className='code__str2'>
                                <span className='tag'>{'<'}</span>
                                <span className='default-name-tage'>html </span> 
                                <span className='blue-atribut'>{'lang="en">'}</span>
                            </p>
                        </>
                    }
                    {blockName.includes('block3') &&
                        <>
                            <span className='code__str-num'>3</span> 
                            <p className='code__str3'>
                                <span className='tag'>{'<'}</span>
                                <span className='default-name-tage'>head</span>
                                <span className='tag'>{'>'}</span>
                            </p>
                        </>
                    }
                    {blockName.includes('block4') &&
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
                    {blockName.includes('block5') &&
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
                    {blockName.includes('block6') &&
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
                    {blockName.includes('block7') &&
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
                    {blockName.includes('block8') &&
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
                    {blockName.includes('block9') &&
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
                    {blockName.includes('block10') &&
                        <>
                            <span className='code__str-num'>10</span> 
                            <p className='code__str10'>
                                <span className='tag'>{'</'}</span>
                                <span className='default-name-tage'>head</span>
                                <span className='tag'>{'>'}</span>
                            </p>
                        </>
                    }
                    {blockName.includes('block11') &&
                        <>
                            <span className='code__str-num'>11</span> 
                            <p className='code__str11'>
                                <span className='tag'>{'<'}</span>
                                <span className='default-name-tage'>body</span>
                                <span className='tag'>{'>'}</span>
                            </p>
                        </>
                    }
                    {blockName.includes('block12') &&
                        <>
                            <span className='code__str-num'>12</span> 
                            <p className='code__str12'>
                                <span className='tag'>{'<'}</span>
                                <span className='default-name-tage'>main</span>
                                <span className='tag'>{'>'}</span>
                            </p>
                        </>
                    }
                    {blockName.includes('block13') &&
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
                    {blockName.includes('block14') &&
                        <>
                            <span className='code__str-num'>14</span> 
                            <p className='code__str14'>
                                <span className='tag'>{'</'}</span>
                                <span className='default-name-tage'>main</span>
                                <span className='tag'>{'>'}</span>
                            </p>
                        </>
                    }
                    {blockName.includes('block15') &&
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
                    {blockName.includes('block16') &&
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
    )
}

export default DevelopmentCodeBlock;