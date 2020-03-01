import styled from 'styled-components';
import { typography, palette } from '../../styles/midnight-light/_theming';
import * as utils from '../../styles/utils/_utils';

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	width: 100%;
	height: ${utils.spacers[5]}; /* 5 x 8 = 40px */

	${typography.small};

	letter-spacing: 0.8px;
	text-transform: uppercase;

	cursor: pointer;

	&:focus {
		outline: none;
	}

	&.primary {
		background-color: ${palette.primary.base};
		border: solid 1px ${palette.primary.base};
		color: ${palette.neutral.lighter};
		background: linear-gradient(
			rgba(8, 100, 207, 0.9),
			${palette.primary.base}
		);

		&:hover {
			background: linear-gradient(
				rgba(8, 100, 207, 0.8),
				${palette.primary.base}
			);
		}

		&:active {
		}
	}
`;

export { StyledButton };
