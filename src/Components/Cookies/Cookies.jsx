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
                    <a href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop" target='_blank'>Cookies Settings</a>
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