import React, { useState } from 'react';
import './mainPage.scss';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Modal from '../../Components/Modal/Modal';
import Header from '../../Components/Header/Header';
import Welcome from '../../Components/Sections/Welcome/Welcome';
import Experience from '../../Components/Sections/Experience/Experience';
import Development from '../../Components/Sections/Development/Development';
import Outsourcing from '../../Components/Sections/Outsourcing/Outsourcing';
import Seo from '../../Components/Sections/Seo/Seo';
import Design from '../../Components/Sections/Design/Design';
import Scheme from '../../Components/Sections/Scheme/Scheme';
import Business from '../../Components/Sections/Business/Business';
import Location from '../../Components/Sections/Location/Location';
import Footer from '../../Components/Footer/Footer';

function MainPage() {


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

    const [modal, setModal] = useState(false);

    return (
        <React.Fragment>
            {modal &&
                <Modal setModal={setModal} />
            }
            <Header/>
            <main className="main">
                <Welcome setModal={setModal} />
                <p className='main__scroll-text'>scroll down <AiOutlineArrowDown className='main__scroll-icon' /></p>
                <Experience />
                <Development setModal={setModal} />
                <Outsourcing setModal={setModal} />
                <Seo setModal={setModal} />
                <Design />
                <Scheme />
                <Business />
                <Location setModal={setModal} />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default MainPage;