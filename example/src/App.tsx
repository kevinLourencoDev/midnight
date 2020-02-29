import React from 'react';
import { FormField } from 'midnight_test';
import logo from './logo.svg';
import './App.css';
const App: React.FC = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<FormField
					label='to'
					name='field1'
					type='mail'
					placeholder='test@test.com'
					required
				/>

				<FormField
					label='to'
					name='field10'
					type='mail'
					placeholder='test@test.com'
					required
				/>
			</header>
		</div>
	);
};

export default App;
