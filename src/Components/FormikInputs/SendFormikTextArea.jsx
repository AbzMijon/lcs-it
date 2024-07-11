import { useField } from 'formik';

function SendFormikTextArea(props) {
	const [field, meta, helpers] = useField(props.name);
	return (
            <>
                  <textarea 
                        cols="30"
                        rows="10"
                        {...props} 
                        {...field} 
                        placeholder={meta.touched && meta.error ? meta.error : props.placeholder} 
                        className={meta.touched && meta.error ? 'modal__input modal__input-text modal__input-error' : 'modal__input modal__input-text'}
                  />
                  {field.value && meta.error && <p className='input-error'>{meta.error}</p>}
            </>
	);
}

export default SendFormikTextArea;