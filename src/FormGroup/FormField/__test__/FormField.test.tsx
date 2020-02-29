import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom/extend-expect';

import FormField from '../FormField';

afterEach(cleanup);

it('renders without crashing', () => {
	const div: HTMLDivElement = document.createElement('div');
	ReactDom.render(<FormField />, div);
	ReactDom.unmountComponentAtNode(div);
});

it('render Demo Component correctly', () => {
	const { getByTestId } = render(<FormField />);
	expect(getByTestId('DemoMessage')).toHaveTextContent('Hello World');
});

it('matches snapshot', () => {
	const tree = renderer.create(<FormField />).toJSON();
	expect(tree).toMatchSnapshot();
});
