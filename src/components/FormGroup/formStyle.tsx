import styled from 'styled-components';
import { typography, palette } from '../../styles/midnight-light/_theming';
import * as utils from '../../styles/utils/_utils';

const StyledFromGroup = styled.div`
	position: relative;
	margin: ${utils.spacers[1]} auto;
	padding-bottom: ${utils.spacers[3]};
`;

const StyledText = styled.p`
	margin-top: ${utils.spacers[1]};
	${typography.small} /* --> // I put small to mimic actual style, 
	but, in my opinion, 12px is too small for an hint or an error. */
`;
const StyledError = styled(StyledText)`
	color: ${palette.error.base};
	position: absolute;
	width: 100%;
`;

const StyledLabel = styled.label`
	display: block;
	${typography.body}
	letter-spacing: 1px;
	text-transform: uppercase;
	margin-bottom: ${utils.spacers[1]};
	color: ${palette.neutral.base};
`;

const StyledInput = styled.input`
    width: 100%;
	padding: 10px 15px; /* I put it here to mimic actual style,
	but should be construct on grid. With current scale good value could be : 
	padding: ${utils.spacers[1]} ${utils.spacers[2]} --> padding 8px 16px
	*/
    border-radius: ${utils.globalborderRadius};
    border: solid 1px ${palette.neutral.light2};
    color: ${palette.neutral.base};

	${typography.body}
	
	&:focus {
		outline: none;
    	border-color: ${palette.primary.light2};
	}
}
`;
export { StyledFromGroup, StyledText, StyledError, StyledInput, StyledLabel };
