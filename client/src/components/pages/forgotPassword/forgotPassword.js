import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ForgotPassword() {
	return (
		<div>
			<Navbar className='navbar-signup'>
				<nav>
					<Link
						style={{ textDecoration: 'none', marginLeft: '15px' }}
						className='top-header'
						to='/'>
						Phonebook
					</Link>
				</nav>
			</Navbar>
			<h1>Forgot Password page</h1>
		</div>
	);
}

export default ForgotPassword;
