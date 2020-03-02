import React, { FC } from 'react';

import { StyledButton } from './buttonStyle';

export interface ButtonProps {
	onClick?: any;
	type?: 'button' | 'submit' | 'reset';
	color?: string;
}

const Button: FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	color = 'primary',
}) => {
	return (
		<StyledButton onClick={onClick} type={type} color={color}>
			{children}
		</StyledButton>
	);
};

export default Button;
