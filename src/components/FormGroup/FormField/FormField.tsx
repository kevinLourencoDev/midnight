import React, { useState, SFC } from 'react';
import { useId } from 'react-id-generator';

import {
	StyledText,
	StyledError,
	StyledInput,
	StyledLabel,
	StyledFromGroup,
} from '../formStyle';

const validateEmail = (email: string) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

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

const FormField: SFC<FormFieldProps> = ({
	name,
	value,
	placeholder,
	hintText,
	type = 'text',
	handleChange,
	disabled,
	label,
	required,
}: FormFieldProps) => {
	// Generate unique id for htmlFor label/input
	const [htmlId] = useId();

	// isTouched when the input is first focused
	const [errorMessage, setErrorMessage] = useState('');

	const validateChange = (event: any): void => {
		const cleanErrorMessage = () => {
			setErrorMessage('');
		};

		// We make the verification only when we have blur at least one time
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

	// Define default placeholder
	const defaultPlaceholder = (type: string): string => {
		switch (type) {
			case 'mail':
				return 'Saisissez votre adresse e-mail';
			case 'password':
				return '&#8226;&#8226;&#8226;&#8226;&#8226;';
			default:
				return '';
		}
	};

	return (
		<StyledFromGroup>
			<StyledLabel htmlFor={htmlId}>{label}</StyledLabel>
			<StyledInput
				id={htmlId}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder ? placeholder : defaultPlaceholder(type)}
				onBlur={() => {
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

export default FormField as React.ComponentType<FormFieldProps>;
