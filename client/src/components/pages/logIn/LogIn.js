/*
Login Page,
Shows the login page, where user can login
Here, once they are logged in, we sent them to home page
Once they are logged in, we store the user's information inside the context
This user information that we stored in context, can be then used in any other page as per our need
Only when the setLoggedIn from context is TRUE that means the user is currently logged in,
*/

import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import './LogIn.css';

import { Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
// This will be the LogIn Page,
// User will be able to LogIn from this page, if they have an account

const API_BASE = 'http://localhost:5000';

function LogIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	// const[successMessage, setSuccessMessage] = useState(null);
	const history = useHistory();

	// Using context to get the setLoggedIn and setUser
	const { setLoggedIn, setUser } = useContext(UserContext);

	/*
    This removes the underline and makes the text blue from the links
    Used below in Forgot Password? and Need an Account?
  */
	const navStyle = {
		color: 'blue',
		textDecoration: 'none', // Removing the text-decoration(underline) from the links
		// In Javascript while writing CSS we need to change text-decoration to textDecoration
	};

	/*
  Checks wheather the user credential is correct or not
  Checks database - handled by backend
*/
	const handleSubmitLogIn = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch(`${API_BASE}/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});
			// console.log(res);   // this prints out the response object
			const data = await res.json();
			//  console.log(data);   // this prints the data/error from the server
			if (!res.ok) {
				setError(data.error); // in backend we set, {'error' : "Email already exists"}
				// so, we are doing data.error
				// setSuccessMessage(null);   //need to set this to null so, that both error and success message
			} // won't show up together

			if (res.ok) {
				// setSuccessMessage("User Successfull LoggedIn");
				// NO need to set successMessage as we are directly redirecting to the user page once loggedin

				// console.log(data.authToken);  // This will give us the auth tokrn of the user that we created
				// in backend we set, res.header('authToken',token).send({'authToken' : token, 'user_info_backend' : user});
				// so, to set userID we can do, data.user here similar to data.error
				setError(null); //need to set this to null so, that both error and success message
				//  won't show up together
				// console.log(data.user_info_backend); // This will give us the user info that we creatd in backend

				// Using ComtextAPI to store the user info that is just signed up,
				setLoggedIn(true); //Setting true for user is logged in
				setUser(data.user); //Setting the user information
				console.log(data.user._id);

				// Must use return here, to prevent memory leakage
				return history.push('/dashboard');
			}
		} catch (err) {
			//This is to handle network/connection errors
			setError(err.message);
			// setSuccessMessage(null);
		}
	};

	return (
		<>
			<nav>
				<Navbar>
					<Nav.Link className='top-header' href='/'>
						Phonebook
					</Nav.Link>
				</Navbar>
			</nav>
			<div>
				<Container fluid className='signin-box'>
					<Form className='form-field'>
						<h1 className='header'>Sign in to Phonebook</h1>
						{error && <div>{error}</div>}
						<Form.Group className='form-group'>
							<InputGroup>
								<Form.Control
									className='input'
									type='email'
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Email'
								/>
							</InputGroup>
						</Form.Group>
						<Form.Group>
							<InputGroup>
								<Form.Control
									className='input'
									type='password'
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Password'
								/>
							</InputGroup>
						</Form.Group>
						<Form.Group>
							<Nav.Link href='/forgotpassword'>
								<nav className='forgot-password'>Forgot your Password?</nav>
							</Nav.Link>
						</Form.Group>
						<Form.Group>
							<button className='signin' onClick={handleSubmitLogIn}>
								SIGN IN
							</button>
						</Form.Group>
						<Form.Group>
							<section className='bottom-group'>
								<Form.Text>New to Phonebook?</Form.Text>
								<Nav.Link href='/signup'>Sign up</Nav.Link>
							</section>
						</Form.Group>
					</Form>
				</Container>
			</div>
		</> //End of the main div
	);
}

export default LogIn;
