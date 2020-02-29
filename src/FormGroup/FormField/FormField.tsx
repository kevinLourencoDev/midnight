import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useId } from 'react-id-generator';
import styled from 'styled-components';

import {
	StyledText,
	StyledError,
	StyledInput,
	StyledLabel,
	StyledFromGroup,
} from '../Formstyle';

const validateEmail = (email: string) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const FormField = styled(
	({
		name,
		value,
		placeholder,
		hintText,
		type,
		handleChange,
		disabled,
		label,
		required,
	}) => {
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

		return (
			<StyledFromGroup>
				<StyledLabel htmlFor={htmlId}>{label}</StyledLabel>
				<StyledInput
					id={htmlId}
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					onBlur={() => {
						handleChange ? handleChange(event) : null;
						validateChange(event);
					}}
					disabled={disabled}
					required={required}
				/>
				{hintText && <StyledText>{hintText}</StyledText>}
				{errorMessage && <StyledError>{errorMessage}</StyledError>}
			</StyledFromGroup>
		);
	}
)``;

FormField.propTypes = {
	id: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	error: PropTypes.string,
	hintText: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	required: PropTypes.bool,
};

export default FormField;
