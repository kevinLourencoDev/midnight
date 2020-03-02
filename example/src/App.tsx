import React from 'react';
import { FormField, Button, GlobalStyle } from 'midnight_test';
import './App.css';
const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<div className='card-container'>
				<div className='card'>
					<FormField
						label='to'
						name='mail'
						type='mail'
						placeholder='test@test.com'
						required
					/>

					<FormField
						label='password'
						name='password'
						type='password'
						required
					/>

					<Button>Submit</Button>
				</div>
			</div>
		</>
	);
};

export default App;
