import React from 'react';
import './modal.scss';
import { RxCross2 } from 'react-icons/rx';
import logo from '../assets/svg/lcsItLogo.svg';

function Modal() {
    return (
        <div className='modal-wrap'>
            <div className="modal">
                <RxCross2 className='modal__close' />
                <div className='modal__logo'>
                    <img src={logo} alt="" />
                </div>
                <p className='modal__title'>Get in touch</p>
                <p className='modal__subtitle'>Fill out this short form and our team will get back to you within 24 hours</p>
                <input type="text" className='modal__input modal__input-name' placeholder='Name' />
                <input type="text" className='modal__input modal__input-email' placeholder='Email' />
                <textarea cols="30" rows="10" className='modal__input modal__input-text' placeholder='Tell us'></textarea>
                <button className='btn-contact modal__btn'>Submit</button>
            </div>
        </div>
    )
}

export default Modal;