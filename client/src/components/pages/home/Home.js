import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
// This will be the Home Page,
// User will be able to SigUp and LogIn from this page, if they don't have an account
import phone from '../home/phone.jpeg';
import '../home/Home.css';
function Home() {
	// Getting user info from the context
	const { loggedIn, setLoggedIn, setUser } = useContext(UserContext);

	// Calling this function, to logout the user
	// To logout the user we are setting LoggedIn to false and clearing the User data to null
	function LoggOutButton() {
		setLoggedIn(false);
		setUser(null);
	}

	return (
		<div className='main-div' style={{ backgroundImage: `url(${phone})` }}>
			<Navbar>
				<Nav.Link className='top-header' href='/'>
					Phonebook
				</Nav.Link>
			</Navbar>

			{loggedIn ? (
				//True
				<Container className='bottom'>
					<Nav.Link to='/' onClick={LoggOutButton}>
						LogOut
					</Nav.Link>
				</Container>
			) : (
				//False
				<div>
					<Container className='bottom'>
						<Nav.Link href='/login'>LogIn</Nav.Link>

						<Nav.Link href='/signup'>SignUp</Nav.Link>
					</Container>
				</div>
			)}
		</div>
	);
}

export default Home;
