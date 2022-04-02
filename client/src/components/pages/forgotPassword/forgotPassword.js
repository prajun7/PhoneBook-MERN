import React from 'react';
import { Navbar, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './forgotPassword.css';
function ForgotPassword() {
	return (
		<div>
			<Navbar>
				<nav className='nav-logo'>
					<svg
						className='logo'
						width='76'
						height='76'
						viewBox='0 0 76 76'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							x='-2'
							y='38'
							width='56.5687'
							height='56.5687'
							rx='6'
							transform='rotate(-45 -2 38)'
							fill='#FA949D'
						/>
					</svg>
					<svg
						className='call-icon'
						width='37'
						height='36'
						viewBox='0 0 37 36'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M4.76571 13.9877C8.54134 21.9916 15.26 28.3549 23.6121 31.8029L23.6385 31.8138L25.2521 32.5139C27.3067 33.4052 29.7217 32.7722 31.039 30.9972L33.7311 27.37C33.8955 27.1484 33.8531 26.8403 33.6346 26.6687L28.935 22.9776C28.7013 22.7941 28.3578 22.8368 28.1791 23.0716L26.3499 25.4745C25.9057 26.058 25.1035 26.2608 24.4238 25.9613C18.1785 23.2098 13.16 18.324 10.3336 12.244C10.026 11.5823 10.2343 10.8013 10.8337 10.3688L13.3019 8.58815C13.543 8.41415 13.5869 8.0797 13.3985 7.85225L9.60651 3.27632C9.43027 3.06364 9.11393 3.02233 8.88636 3.18228L5.14035 5.815C3.30507 7.10485 2.65874 9.47574 3.59554 11.4818L4.76445 13.985C4.76487 13.9859 4.76529 13.9868 4.76571 13.9877ZM22.3618 34.6374C13.2866 30.8871 5.98728 23.9709 1.88479 15.2722L1.88231 15.2669L0.710951 12.7585C-0.850367 9.41506 0.226835 5.46356 3.28564 3.31381L7.03164 0.681091C8.62469 -0.438513 10.839 -0.149352 12.0727 1.33938L15.8647 5.91531C17.184 7.50744 16.8767 9.84862 15.1885 11.0666L13.7742 12.087C16.1632 16.5999 19.9496 20.286 24.5851 22.6118L25.6332 21.2349C26.8843 19.5914 29.2892 19.2922 30.9245 20.5767L35.6242 24.2678C37.1539 25.4691 37.4505 27.6257 36.2995 29.1766L33.6075 32.8039C31.4119 35.7622 27.3869 36.8171 23.9625 35.3318L22.3618 34.6374Z'
							fill='#3E1F92'
						/>
					</svg>
				</nav>
				<nav>
					<Link className='top-header' to='/'>
						Phonebook
					</Link>
				</nav>
			</Navbar>
			<h1 className='header'>Forgot your Password?</h1>
			<Form className='form-field'>
				<Form.Group className='form-group'>
					<InputGroup>
						<div>
							<svg
								className='inner-icon'
								width='22'
								height='18'
								viewBox='0 0 22 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z'
									stroke='#023857'
									strokeOpacity='0.7'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M21 3L11 10L1 3'
									stroke='#023857'
									strokeOpacity='0.7'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<Form.Control className='input' type='email' placeholder='Email' />
					</InputGroup>

					{/* <Form.Control type='email' placeholder='Email'></Form.Control> */}
				</Form.Group>

				<Form.Group className='button-group'>
					<nav className='forgot-password'>
						<Link style={{ textDecoration: 'none' }} className='link' to='/'>
							Send to Home
						</Link>
					</nav>
				</Form.Group>

				<Form.Group className='bottom-group'>
					<Form.Text>Remember Password?</Form.Text>
					<Link to='/login'>Sign in</Link>
				</Form.Group>
			</Form>
		</div>
	);
}

export default ForgotPassword;
