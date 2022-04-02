/*
Signup page,
same as in login page, once the user signs up, we store the user inforamation inside the context
*/

import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import './SignUp.css';

import {
	Navbar,
	Nav,
	Container,
	Form,
	Button,
	InputGroup,
} from 'react-bootstrap';
// This will be the SignUp Page,
// User will be able to SigUp from this page, if they don't have an account

const API_BASE = 'http://localhost:5000';

function SignUp() {
	const [name, setName] = useState(''); //Use state for getting name from the user's inputs
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	// const[successMessage, setSuccessMessage] = useState(null);
	// No need to use successMessage as we are directly taking the user to home page once logged in
	const history = useHistory();

	// Using the Context to store the user's information
	// We are setiing the loggedIn status to true and setting the user information once the user logs in
	const { setLoggedIn, setUser } = useContext(UserContext);

	/*
  Creates the user and stores it in database
  Backend checks for duplicate emails, hash passwords, and validates the user's inputs
  Check backend node.js project that is food-app-server folder
*/
	const handleSubmitSignUp = async (e) => {
		e.preventDefault(); // To prevent the auto reload of the page
		try {
			//Using try catch block to handle the connection errors

			setLoading(true);
			const res = await fetch(
				// Similar to the post request that we do in postman
				`${API_BASE}/auth/register`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: name, //pasing the name,email and password from the form(frontend)
						email: email,
						password: password,
					}),
				}
			);

			// console.log(res);   //this prints out the response object

			const data = await res.json();
			//  console.log(data);   //this prints the data/error from the server

			// Need to use res.ok, to handle the server's errors
			if (!res.ok) {
				setError(data.error); // in backend we set, {'error' : "Email alredy exists"}
				// so, we are doing data.error

				//  setSuccessMessage(null);   //need to set this to null so, that both error and success message
			} // won't show up together

			if (res.ok) {
				// setSuccessMessage("User Successfull Registered");
				// console.log(data.user_info_backend);  // This will give us the user information that we just created.
				// In backend we set, res.send({'user_info_backend': user });

				setError(null); // Need to set this to null so, that both error and success message
				//  won't show up together

				// Using ContextAPI to store the user info that is just signed up,
				setLoggedIn(true); // Setting true for user is logged in
				setUser(data.user); // Setting the user information

				// Must use return here, to prevent memory leakage
				return history.push('/dashboard');
				// After sucessfully logged in, go to home page
			}

			/*
      // Another way to pass user information is by using second parameter of useHistory
      // And also by usng useLocation
      //  But it is better to use the Context API, as it makes easier to pass data in different components

      // Must use return here, to prevent memory leakage
      return history.push("/user",{user_info_frontend : data.user_info_backend});
      // By using second parameter in history.push we are sinding that user information
      // We need to use useLocation hook in "/user" page to get those info
      // But instead of using all there, we can use Context API and store the user in the context for easy access

      */
		} catch (err) {
			//This is to handle network/connection errors
			setError(err.message);
			//  setSuccessMessage(null);
		}
		setLoading(false);
	};

	return (
		<>
			<section>
				<Navbar className='navbar-signup'>
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
			</section>
			<Container fluid className='signup-box'>
				<Form className='form-field'>
					<h1 className='header'>Sign up to Phonebook</h1>
					<div>{error && <div className='error-message'>{error}</div>}</div>
					<Form.Group className='form-group'>
						<InputGroup>
							<div className='inner-icon'>
								<svg
									width='19'
									height='20'
									viewBox='0 0 19 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M4.12273 5.00617C4.12273 2.24134 6.36406 0 9.12889 0C11.8937 0 14.1351 2.24134 14.1351 5.00617C14.1351 7.771 11.8937 10.0123 9.12889 10.0123C6.36406 10.0123 4.12273 7.771 4.12273 5.00617ZM9.12889 1.76688C7.33989 1.76688 5.88961 3.21716 5.88961 5.00617C5.88961 6.79518 7.33989 8.24545 9.12889 8.24545C10.9179 8.24545 12.3682 6.79518 12.3682 5.00617C12.3682 3.21716 10.9179 1.76688 9.12889 1.76688Z'
										fill='#023857'
										fillOpacity='0.7'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M4.41721 13.5461C2.95347 13.5461 1.76688 14.7327 1.76688 16.1964V17.5961C1.76688 17.6174 1.78233 17.6356 1.80336 17.639C6.65493 18.4311 11.6029 18.4311 16.4544 17.639C16.4755 17.6356 16.4909 17.6174 16.4909 17.5961V16.1964C16.4909 14.7327 15.3043 13.5461 13.8406 13.5461H13.4391C13.408 13.5461 13.3772 13.551 13.3477 13.5606L12.3281 13.8935C10.2493 14.5723 8.00847 14.5723 5.92964 13.8935L4.91013 13.5606C4.88062 13.551 4.84977 13.5461 4.81872 13.5461H4.41721ZM0 16.1964C0 13.7569 1.97765 11.7792 4.41721 11.7792H4.81872C5.03604 11.7792 5.25199 11.8136 5.45857 11.881L6.47808 12.2139C8.20054 12.7764 10.0572 12.7764 11.7797 12.2139L12.7992 11.881C13.0058 11.8136 13.2217 11.7792 13.4391 11.7792H13.8406C16.2801 11.7792 18.2578 13.7569 18.2578 16.1964V17.5961C18.2578 18.4834 17.6148 19.2399 16.7391 19.3828C11.699 20.2057 6.55878 20.2057 1.51866 19.3828C0.643008 19.2399 0 18.4834 0 17.5961V16.1964Z'
										fill='#023857'
										fillOpacity='0.7'
									/>
								</svg>
							</div>
							<Form.Control
								className='input'
								type='text'
								onChange={(e) => setName(e.target.value)}
								placeholder='Name'
							/>
						</InputGroup>

						{/* <Form.Control type='email' placeholder='Email'></Form.Control> */}
					</Form.Group>
					<Form.Group className='form-group'>
						<InputGroup>
							<div className='inner-icon'>
								<svg
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
							<Form.Control
								className='input'
								type='email'
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Email'
							/>
						</InputGroup>

						{/* <Form.Control type='email' placeholder='Email'></Form.Control> */}
					</Form.Group>
					<Form.Group className='form-group'>
						<InputGroup>
							<div className='inner-icon'>
								<svg
									width='20'
									height='22'
									viewBox='0 0 20 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z'
										stroke='#023857'
										strokeOpacity='0.7'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10'
										stroke='#023857'
										strokeOpacity='0.7'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
							<Form.Control
								className='input'
								type='password'
								onChange={(e) => setPassword(e.target.value)}
								placeholder='Password'
							/>
						</InputGroup>
					</Form.Group>

					<Form.Group className='button-group'>
						<Button className='button2' onClick={handleSubmitSignUp}>
							SIGN UP
						</Button>
					</Form.Group>
					<Form.Group className='bottom-group'>
						<Form.Text>Already a Member?</Form.Text>
						<Link to='/login'>Sign in</Link>
					</Form.Group>
				</Form>
			</Container>
		</>
	);
}

export default SignUp;
