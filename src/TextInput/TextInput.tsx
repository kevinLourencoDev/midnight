import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useId } from 'react-id-generator';
import styled from 'styled-components';
import { Text, Error, StyledInput, StyledLabel } from './style';

const TextInput = styled(
	({
		name,
		value,
		placeholder,
		hasError,
		hintText,
		type,
		onChange,
		disabled,
		className,
		label,
		...rest
	}) => {
		const [htmlId] = useId();

		const [isTouched, setIsTouched] = useState(false);

		const error = isTouched && hasError;

		return (
			<div className={className}>
				<StyledLabel htmlFor={htmlId}>{label}</StyledLabel>
				<StyledInput
					id={htmlId}
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					onFocus={() => setIsTouched(true)}
					disabled={disabled}
					{...rest}
				/>
				{hintText && <Text>{hintText}</Text>}
				{error && <Error>Kinounou</Error>}
			</div>
		);
	}
)``;

TextInput.propTypes = {
	id: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	error: PropTypes.string,
	hintText: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	label: PropTypes.string,
};

export default TextInput;
