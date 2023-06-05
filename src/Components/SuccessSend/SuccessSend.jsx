import { RxCross2 } from 'react-icons/rx';
import './SuccessSend.scss';
import { useEffect } from 'react';

const SuccessSend = ({ setModal }) => {

    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, 2000)
    }, []);
    
    return (
        <div className='successSend'>
            <p className='successSend__text'>Thank you for your message, the answer will come soon!</p>
            <RxCross2 className='successSend__close' onClick={() => setModal(false)} />
            <button className='successSend__btn btn-contact' type='button' onClick={() => setModal(false)}>Ok</button>
        </div>
    )
};

export default SuccessSend;