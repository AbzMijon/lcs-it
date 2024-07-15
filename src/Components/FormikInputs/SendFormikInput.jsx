import { useField } from 'formik';

function SendFormikInput(props) {
	const [field, meta, helpers] = useField(props.name);
	return (
            <>
                  <input 
                        {...props} 
                        {...field} 
                        placeholder={meta.touched && meta.error ? meta.error : props.placeholder} 
                        className={meta.touched && meta.error ? 'modal__input modal__input-error' : 'modal__input'} 
                  />
            </>
	);
}

export default SendFormikInput;