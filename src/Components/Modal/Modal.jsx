import './modal.scss';
import { RxCross2 } from 'react-icons/rx';
import logo from '../../assets/svg/lcsItLogo.svg';
import modalUser from '../../assets/svg/modalUser.svg';
import modalMessage from '../../assets/svg/modalMessage.svg';
import { Formik, Form } from 'formik';
import SendFormikInput from '../FormikInputs/SendFormikInput';
import SendFormikTextArea from '../FormikInputs/SendFormikTextArea';
import { useState } from 'react';
import SuccessSend from '../SuccessSend/SuccessSend';
import { useTranslation } from 'react-i18next';

function Modal({ setModal }) {

    const { i18n, t } = useTranslation('common');
    const requestUrl = i18n?.language === 'en' ? 'https://lcs-it.com/feedback/' : 'https://lcs.by/feedback/form-processing.php/';

    const initialFormValues = {
        Name: '',
        Email: '',
        Message: '',
    }

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if (!formValues.Name) {
            isValid = false;
            errorsObject.Name = t('modal.name.error');
        }
        if (!formValues.Email) {
            isValid = false;
            errorsObject.Email = t('modal.email.error');
        }
        if (formValues.Message.length < 20) {
            isValid = false;
            errorsObject.Message = t('modal.message.shortMessage');
        }
        if (!formValues.Message) {
            isValid = false;
            errorsObject.Message = t('modal.message.error');
        }

        if(!isValid) return errorsObject;
    }

    const onFormSubmit = async (formValues) => {
        var formData = new FormData();
        formData.append('name',formValues.Name);
        formData.append('email',formValues.Email);
        formData.append('message', formValues.Message);

        await fetch(requestUrl, {
            method: "POST",
            body: formData,
        })
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
                    <img src={logo} alt="" loading="lazy" />
                </div>
                <p className='modal__title'>{t('modal.title')}</p>
                <p className='modal__subtitle'>{t('modal.subtitle')}</p>
                <Formik initialValues={initialFormValues} validate={validateForm} onSubmit={(formValues) => onFormSubmit(formValues)}>
                    <Form>
                        <div className='modal__input-wrap'>
                            <SendFormikInput name='Name' type='text' placeholder={t('modal.name.placeholder')} required />
                            <img src={modalUser} alt="" className='modal__input-icon modal__input-name'  />
                        </div>
                        <div className='modal__input-wrap'>
                            <SendFormikInput name='Email' type='email' placeholder={t('modal.email.placeholder')} required />
                            <img src={modalMessage} alt="" className='modal__input-icon modal__input-email' />
                        </div>
                        <div className='modal__input-wrap'>
                            <SendFormikTextArea name='Message' placeholder={t('modal.message.placeholder')} required />
                            <img src={modalMessage} alt="" className='modal__input-icon modal__input-text' />
                        </div>
                        <button className='btn-contact modal__btn'>{t('modal.button')}</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Modal;