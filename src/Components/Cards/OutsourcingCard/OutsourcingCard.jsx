import { useTranslation } from "react-i18next";

function OutsourcingCard({ card, onMouseMove, localMousePos }) {

    const { t } = useTranslation('mainPage');

    return (
        <li
            className={`outsourcing__table-wrapper outsourcing__card-${card.classname} lightEffectWrapper`}
            onMouseMove={onMouseMove}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="outsourcing__card lightEffectWrapper__card">
                <img src={card.icon} alt="" className="outsourcing__img" loading="lazy" />
                <h4 className='outsourcing__card-name'>{card.title}</h4>
                <p className='outsourcing__text'>{t(`outsourcingSection.${card.classname}`)}</p>
                <div
                    id='light'
                    className="light"
                    style={{ background: `radial-gradient(circle at ${localMousePos.X}px ${localMousePos.Y}px, #fff, transparent)` }}>
                </div>
            </div>
        </li>
    )
}

export default OutsourcingCard;