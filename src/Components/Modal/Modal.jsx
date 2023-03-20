import React from 'react';
import './modal.scss';
import { RxCross2 } from 'react-icons/rx';
import logo from '../../assets/svg/lcsItLogo.svg';
import modalUser from '../../assets/svg/modalUser.svg';
import modalMessage from '../../assets/svg/modalMessage.svg';

function Modal({ setModal }) {
    return (
        <div className='modal-wrap' onClick={() => setModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <RxCross2 className='modal__close' onClick={() => setModal(false)} />
                <div className='modal__logo'>
                    <img src={logo} alt="" />
                </div>
                <p className='modal__title'>Get in touch</p>
                <p className='modal__subtitle'>Fill out this short form and our team will get back to you within 24 hours</p>
                <div className='modal__input-wrap'>
                    <input type="text" className='modal__input modal__input-name' placeholder='Name' />
                    <img src={modalUser} alt="" />
                </div>
                <div className='modal__input-wrap'>
                    <input type="text" className='modal__input modal__input-email' placeholder='Email' />
                    <img src={modalMessage} alt="" />
                </div>
                <div className='modal__input-wrap'>
                    <textarea cols="30" rows="10" className='modal__input modal__input-text' placeholder='Tell us'></textarea>
                    <img src={modalMessage} alt="" />
                </div>
                <button className='btn-contact modal__btn'>Submit</button>
            </div>
        </div>
    )
}

export default Modal;