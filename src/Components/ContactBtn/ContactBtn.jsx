import { useTranslation } from "react-i18next";

function ContactBtn({ setModal }) {

    const { t } = useTranslation('common');

    return (
        <button className='welcome__btn btn-contact' onClick={() => setModal(true)}>{t('contactBtn')}</button>
    )
}

export default ContactBtn;