function ContactBtn({ setModal }) {
    return (
        <button className='welcome__btn btn-contact' onClick={() => setModal(true)}>Contact Us</button>
    )
}

export default ContactBtn;