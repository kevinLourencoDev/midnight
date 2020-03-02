import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import '@testing-library/jest-dom/extend-expect';

import FormField from '../FormField';

afterEach(cleanup);

// Create mock of useIf function that break snapshoot test
jest.mock('react-id-generator', () => {
	return {
		useId: jest.fn(() => 'i'),
	};
});

describe('FormField', () => {
	describe('FormField common test', () => {
		it('renders FormField', () => {
			const div: HTMLDivElement = document.createElement('div');

			ReactDom.render(<FormField />, div);
			ReactDom.unmountComponentAtNode(div);
		});

		it('FormField with the attribute required should show error message', () => {
			const wrapper = Enzyme.shallow(<FormField required />);
			wrapper.find('#i').simulate('blur', { target: { value: '' } });

			expect(wrapper.contains('Champs requis')).toBe(true);
		});

		it('FormField with the attribute required should not show error message', () => {
			const wrapper = Enzyme.shallow(<FormField required />);
			wrapper.find('#i').simulate('blur', { target: { value: 'fill' } });

			expect(wrapper.contains('Champs requis')).toBe(false);
		});

		it('FormField without the attribute required should not show error when empty', () => {
			const wrapper = Enzyme.shallow(<FormField />);
			wrapper.find('#i').simulate('blur', { target: { value: '' } });

			expect(wrapper.contains('Champs requis')).toBe(false);
		});

		it('matches snapshot', () => {
			const tree = renderer.create(<FormField />).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('FormField with placeholder shoud have his own placeholder', () => {
			const wrapper = Enzyme.shallow(
				<FormField placeholder='test placeholder' />
			);

			expect(wrapper.find('#i').prop('placeholder')).toEqual(
				'test placeholder'
			);
		});

		it('FormField without placeholder shoud not have his own placeholder', () => {
			const wrapper = Enzyme.shallow(<FormField />);

			expect(wrapper.find('#i').prop('placeholder')).toEqual('');
		});

		it('Form Fied have an hintText attribute have to show it', () => {
			const wrapper = Enzyme.shallow(<FormField hintText='test hint' />);

			expect(wrapper.contains('test hint')).toBe(true);
		});
	});

	describe('FormField mail test', () => {
		it('renders FormField mail', () => {
			const div: HTMLDivElement = document.createElement('div');

			ReactDom.render(<FormField type='mail' />, div);
			ReactDom.unmountComponentAtNode(div);
		});

		it('Form Fied handleChange must be called when input change', () => {
			const mockHandleChange = jest.fn(() => true);

			const input = Enzyme.shallow(
				<FormField type='mail' handleChange={mockHandleChange} />
			);
			input.find('#i').simulate('blur', { target: { value: 'test@test.com' } });
			expect(mockHandleChange.mock.calls.length).toEqual(1);
		});

		it('Form Fied have to show an error when mail is wrong', () => {
			const wrapper = Enzyme.shallow(<FormField type='mail' />);
			wrapper.find('#i').simulate('blur', { target: { value: 'notamail' } });

			expect(wrapper.contains('Email invalide')).toBe(true);
		});

		it('Form Fied have to not show an error when mail is correct', () => {
			const wrapper = Enzyme.shallow(<FormField type='mail' />);
			wrapper
				.find('#i')
				.simulate('blur', { target: { value: 'mail@mail.com' } });

			expect(wrapper.contains('Email invalide')).toBe(false);
		});

		it('FormField mail without placeholder shoud have a default one', () => {
			const wrapper = Enzyme.shallow(<FormField type='mail' />);

			expect(wrapper.find('#i').prop('placeholder')).toEqual(
				'Saisissez votre adresse e-mail'
			);
		});

		it('FormField password with placeholder shoud have his own placeholder', () => {
			const wrapper = Enzyme.shallow(
				<FormField type='mail' placeholder='test mail enter' />
			);

			expect(wrapper.find('#i').prop('placeholder')).toEqual('test mail enter');
		});

		it('matches snapshot', () => {
			const tree = renderer.create(<FormField type='mail' />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});

	describe('FormField password test', () => {
		it('renders FormField password', () => {
			const div: HTMLDivElement = document.createElement('div');

			ReactDom.render(<FormField type='password' />, div);
			ReactDom.unmountComponentAtNode(div);
		});

		it('FormField password without placeholder shoud have a default one', () => {
			const wrapper = Enzyme.shallow(<FormField type='password' />);

			expect(wrapper.find('#i').prop('placeholder')).toEqual('••••••');
		});

		it('FormField password with placeholder shoud have his own placeholder', () => {
			const wrapper = Enzyme.shallow(
				<FormField type='password' placeholder='test enter password' />
			);

			expect(wrapper.find('#i').prop('placeholder')).toEqual(
				'test enter password'
			);
		});

		it('matches snapshot', () => {
			const tree = renderer.create(<FormField type='password' />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
