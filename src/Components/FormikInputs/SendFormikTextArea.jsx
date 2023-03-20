import React from 'react';
import { useField } from 'formik';

function SendFormikTextArea(props) {
	const [field, meta, helpers] = useField(props.name);
	return (
		<textArea 
            cols="30"
            rows="10"
            {...props} 
            {...field} 
            placeholder={meta.touched && meta.error ? meta.error : props.name} 
            className={meta.touched && meta.error ? 'modal__input modal__input-text modal__input-error' : 'modal__input modal__input-text'} />
	);
}

export default SendFormikTextArea;