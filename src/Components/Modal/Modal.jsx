import './modal.scss';
import { RxCross2 } from 'react-icons/rx';
import logo from '../../assets/svg/lcsItLogo.svg';
import modalUser from '../../assets/svg/modalUser.svg';
import modalMessage from '../../assets/svg/modalMessage.svg';
import { Formik, Form } from 'formik';
import SendFormikInput from '../FormikInputs/SendFormikInput';
import SendFormikTextArea from '../FormikInputs/SendFormikTextArea';
import { sendMessage } from '../../api/messageApi';
import { useState } from 'react';
import SuccessSend from '../SuccessSend/SuccessSend';

function Modal({ setModal }) {

    const initialFormValues = {
        Name: '',
        Email: '',
        Message: '',
    }

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if(!formValues.Name) {
            isValid = false;
            errorsObject.Name = 'Enter your name';
        }
        /* if(formValues.Name.length > 20) {
            isValid = false;
            errorsObject.Name = 'Long name';
        } */
        if(!formValues.Email) {
            isValid = false;
            errorsObject.Email = 'Enter a valid Email';
        }
        /* if(formValues.Email.length > 20) {
            isValid = false;
            errorsObject.Email = 'Long email';
        } */
        if(!formValues.Message) {
            isValid = false;
            errorsObject.Message = 'Enter your message';
        }
        /* if(formValues.Message.length > 20) {
            isValid = false;
            errorsObject.Message = 'Long message';
        } */
        isValid = false;

        if(!isValid) return errorsObject;
    }

    const onFormSubmit = (formValues) => {
        var formData = new FormData();
        formData.append('name',formValues.Name);
        formData.append('email',formValues.Email);
        formData.append('message', formValues.Message);
        formData.append('agree','true');
        sendMessage(formData);
        setSuccess(true);
    }

    const [success, setSuccess] = useState(false);

    if(success) {
        return <SuccessSend setModal={setModal} />
    }

    return (
        <div className='modal-wrap' onClick={() => setModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <RxCross2 className='modal__close' onClick={() => setModal(false)} />
                <div className='modal__logo'>
                    <img src={logo} alt="" />
                </div>
                <p className='modal__title'>Get in touch</p>
                <p className='modal__subtitle'>Fill out this short form and our team will get back to you within 24 hours</p>
                <Formik initialValues={initialFormValues} validate={validateForm} onSubmit={(formValues) => onFormSubmit(formValues)}>
                    <Form>
                        <div className='modal__input-wrap'>
                            <SendFormikInput name='Name' type='text' placeholder='Name' required />
                            <img src={modalUser} alt="" className='modal__input-icon modal__input-name' />
                        </div>
                        <div className='modal__input-wrap'>
                            <SendFormikInput name='Email' type='email' placeholder='Email' required />
                            <img src={modalMessage} alt="" className='modal__input-icon modal__input-email' />
                        </div>
                        <div className='modal__input-wrap'>
                            <SendFormikTextArea name='Message' placeholder='Tell us' required />
                            <img src={modalMessage} alt="" className='modal__input-icon modal__input-text' />
                        </div>
                        <button className='btn-contact modal__btn'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Modal;