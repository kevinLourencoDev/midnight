import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom/extend-expect';

import Button from '../Button';

afterEach(cleanup);

it('renders without crashing', () => {
	const div: HTMLDivElement = document.createElement('div');
	ReactDom.render(<Button />, div);
	ReactDom.unmountComponentAtNode(div);
});

it('render Demo Component correctly', () => {
	const { getByTestId } = render(<Button />);
	expect(getByTestId('DemoMessage')).toHaveTextContent('Hello World');
});

it('matches snapshot', () => {
	const tree = renderer.create(<Button />).toJSON();
	expect(tree).toMatchSnapshot();
});
