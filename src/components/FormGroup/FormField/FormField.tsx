import React, { useState, FC } from 'react';
import { useId } from 'react-id-generator';
import { validateEmail } from '../../../utils/validators';

import {
	StyledText,
	StyledError,
	StyledInput,
	StyledLabel,
	StyledFromGroup,
} from '../formStyle';

export interface FormFieldProps {
	name?: string;
	value?: string;
	placeholder?: string;
	hintText?: string;
	type?: string;
	handleChange?: any;
	disabled?: boolean;
	label?: string;
	required?: boolean;
}

const FormField: FC<FormFieldProps> = ({
	name,
	value,
	placeholder,
	hintText,
	type = 'text',
	handleChange,
	disabled,
	label,
	required,
}) => {
	const [errorMessage, setErrorMessage] = useState('');

	const validateChange = (event: any): void => {
		const cleanErrorMessage = () => setErrorMessage('');

		if (required === true) {
			if (event.target.value === '') {
				return setErrorMessage('Champs requis');
			} else {
				cleanErrorMessage();
			}
		}

		if (type === 'mail') {
			if (!validateEmail(event.target.value)) {
				return setErrorMessage('Email invalide');
			} else {
				cleanErrorMessage();
			}
		}
	};

	const defaultPlaceholder = (type: string): string => {
		switch (type) {
			case 'mail':
				return 'Saisissez votre adresse e-mail';
			case 'password':
				return '••••••'; // Not so accessible in terme of UX in my opinion.
			default:
				return '';
		}
	};

	// Generate unique id for htmlFor label/input interaction
	const [htmlId] = useId();

	return (
		<StyledFromGroup>
			<StyledLabel htmlFor={htmlId}>{label}</StyledLabel>
			<StyledInput
				id={htmlId}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder ? placeholder : defaultPlaceholder(type)}
				onBlur={(event) => {
					handleChange ? handleChange(event) : null;
					validateChange(event);
				}}
				disabled={disabled}
				required={required}
			/>
			{hintText && !errorMessage && <StyledText>{hintText}</StyledText>}
			{errorMessage && <StyledError>{errorMessage}</StyledError>}
		</StyledFromGroup>
	);
};

export default FormField;
