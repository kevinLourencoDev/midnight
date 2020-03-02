import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

import Button from '../Button';

afterEach(cleanup);

describe('Button', () => {
	it('renders without crashing', () => {
		const div: HTMLDivElement = document.createElement('div');
		ReactDom.render(<Button />, div);
		ReactDom.unmountComponentAtNode(div);
	});

	it('matches snapshot', () => {
		const tree = renderer.create(<Button />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Button onClick must be called when button is clicked', () => {
		const mockHandleClick = jest.fn(() => true);

		const button = Enzyme.shallow(<Button onClick={mockHandleClick} />);

		button.find('[type="button"]').simulate('click');
		expect(mockHandleClick.mock.calls.length).toEqual(1);
	});

	it('Button without type should have default type to be button', () => {
		const button = Enzyme.shallow(<Button>test type</Button>);

		expect(button.find('[type="button"]').exists()).toBe(true);
	});

	it('Button with type should have this given type', () => {
		const button = Enzyme.shallow(
			<Button type='submit'>test type submit</Button>
		);

		expect(button.find('[type="submit"]').exists()).toBe(true);
	});

	it('Button without color should have default color to be primary', () => {
		const button = Enzyme.shallow(<Button>test color</Button>);

		expect(button.find('[type="button"]').prop('color')).toEqual('primary');
	});

	it('Button with color should have this given color', () => {
		const button = Enzyme.shallow(<Button color='light'>test color</Button>);

		expect(button.find('[color="light"]').exists()).toBe(true);
	});
});
