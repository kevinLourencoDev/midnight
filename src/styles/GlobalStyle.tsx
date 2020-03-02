import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Source Sans Pro';
		src: url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
	}

	* {
		box-sizing: border-box;
	}

	body {
		margin:0;
		padding:0;
		
		font-family: 'Source Sans Pro', sans-serif;
		font-style: normal;
		font-weight: normal;
	}
`;

export default GlobalStyle;
