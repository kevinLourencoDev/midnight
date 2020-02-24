import React, { SFC } from 'react';
import styled from 'styled-components';

export type Type = 'info' | 'success' | 'danger' | 'warning';
export type TypesMap = Record<Type, string>;

const types: TypesMap = {
	info: '#5352ED',
	success: '#2ED573',
	danger: '#FF4757',
	warning: '#FFA502',
};

export interface DemoProps {
	/**
	 * Set this to change Demo Type
	 * @default info
	 */
	type: 'info' | 'success' | 'danger' | 'warning';
	children?: any;
}

const DEMODiv = styled.div`
	padding: 20px;
	border-radius: 3px;
	color: white;
	background: ${(props: DemoProps) => types[props.type] || 'black'};
`;

const Demo: SFC<DemoProps> = ({ children, type = 'info', ...rest }) => (
	<DEMODiv data-testid='DemoMessage' type={type} {...rest}>
		{children}
	</DEMODiv>
);

export default Demo;
