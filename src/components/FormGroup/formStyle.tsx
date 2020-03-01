import styled from 'styled-components';

const StyledFromGroup = styled.div`
	margin: 8px auto;
	padding-bottom: 24px;
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
	color: #5e6c84;
`;

const StyledInput = styled.input`
    font-style: normal;
    font-weight: normal;
    width: 100%;
    padding: 10px 15px;
    border-radius: 4px;
    border: solid 1px #d4ddf0;
    color: #5e6c84;
	font-size: 14px;
	
	&:focus {
		outline: none;
    	border-color: #8ec2ff;
	}
}
`;
export { StyledFromGroup, StyledText, StyledError, StyledInput, StyledLabel };
