import { useTranslation } from 'react-i18next';
import './cookies.scss';

function Cookies({ setCookies }) {

    const { t } = useTranslation('common');

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccept', true);
        setCookies(true);
    }
    
    return (
        <div className='cookies'>
            <div className='cookies__content'>
                <p className='cookies__text'>{t('cookie.text')} <a target='_blank' href="https://commission.europa.eu/cookies-policy_en">{t('cookie.policy')}</a> </p>
                <div className="cookies__button-container">
                    <button 
                        className='cookies__btn cookies__btn-settings'>
                        <a href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop" target='_blank'>{t('cookie.setings')}</a>
                    </button>
                    <button 
                        className='cookies__btn cookies__btn-accept'
                        onClick={acceptCookies}
                        >
                        {t('cookie.accept')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cookies;