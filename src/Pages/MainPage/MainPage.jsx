import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import Cookies from '../../Components/Cookies/Cookies';

function MainPage() {

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const [cookies, setCookies] = useState(false);

    return (
        <React.Fragment>
            {modal &&
                <Modal setModal={setModal} />
            }
            {!cookies &&
                <Cookies setCookies={setCookies} />
            }
            <Header/>
            <main className="main" id='company'>
                <Welcome setModal={setModal} />
                <p className='main__scroll-text'>scroll down <AiOutlineArrowDown className='main__scroll-icon' onClick={() => navigate('/test')} /></p>
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