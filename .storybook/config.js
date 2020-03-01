import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';

import GlobalStyle from '../src/styles/GlobalStyle';

addDecorator((s) => (
	<>
		<GlobalStyle />
		{s()}
	</>
));

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
