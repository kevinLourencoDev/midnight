import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	width: 100%;
	height: 40px;
	font-size: 12px;
	letter-spacing: 0.8px;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: bold;

	&:focus {
		outline: none;
	}

	&.primary {
		background-color: #0864cf;
		border: solid 1px #0864cf;
		color: #fff;
		background: linear-gradient(rgba(8, 100, 207, 0.9), #0864cf);

		&:hover {
			background: linear-gradient(rgba(8, 100, 207, 0.8), #0864cf);
		}

		&:active {
		}
	}
`;

export { StyledButton };
