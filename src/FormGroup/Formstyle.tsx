import styled from 'styled-components';

const StyledFromGroup = styled.div`
	margin: 16px auto;
`;

const StyledText = styled.p`
	margin: 8px auto;
`;
const StyledError = styled(StyledText)`
	font-size: 12px;
	color: red;
`;

const StyledLabel = styled.label`
	display: block;
	font-size: 12px;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin-bottom: 6px;
`;

const StyledInput = styled.input`
	width: 100%;
	font-size: 14px;
	padding: 6px 8px;
	border-width: 1px;
	border-style: solid;
	margin: 0;
	box-sizing: border-box;
`;
export { StyledFromGroup, StyledText, StyledError, StyledInput, StyledLabel };
