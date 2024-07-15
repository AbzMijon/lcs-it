import { RxCross2 } from 'react-icons/rx';
import './SuccessSend.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SuccessSend = ({ setModal }) => {

    const { t } = useTranslation('common');

    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, 2000)
    }, []);
    
    return (
        <div className='successSend'>
            <p className='successSend__text'>{t('modal.successMessage')}</p>
            <RxCross2 className='successSend__close' onClick={() => setModal(false)} />
            <button className='successSend__btn btn-contact' type='button' onClick={() => setModal(false)}>Ok</button>
        </div>
    )
};

export default SuccessSend;