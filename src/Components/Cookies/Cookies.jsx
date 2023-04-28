import './cookies.scss';

function Cookies({ setCookies }) {

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccept', true);
        setCookies(true);
    }
    
    return (
        <div className='cookies'>
            <p className='cookies__text'>This website uses cookies for analytics, personalization and advertising. By continuing to browse, you agree to our use of cookies. To learn more click <a target='_blank' href="https://commission.europa.eu/cookies-policy_en">Cookie Policy</a> </p>
            <div className="cookies__button-container">
                <button 
                    className='cookies__btn cookies__btn-settings'>
                    Cookies Settings
                </button>
                <button 
                    className='cookies__btn cookies__btn-accept'
                    onClick={acceptCookies}
                    >
                    Accept All
                </button>
            </div>
        </div>
    )
}

export default Cookies;