import React, { SFC } from 'react';

import { StyledButton } from './buttonStyle';

export interface ButtonProps {
	onClick?: any;
	type?: 'button' | 'submit' | 'reset';
	color?: string;
}

const Button: SFC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	color = 'primary',
}) => {
	return (
		<StyledButton onClick={onClick} type={type} className={color}>
			{children}
		</StyledButton>
	);
};

export default Button;