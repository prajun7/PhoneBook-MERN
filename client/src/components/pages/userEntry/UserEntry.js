import React, { useState, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Link } from 'react-router-dom';
import './UserEntry.css';
import { Navbar, Form, Row, Col, Button } from 'react-bootstrap';
const API_BASE = 'http://localhost:5000';

function UserEntry() {
	const { user } = useContext(UserContext);

	const [userName, setUserName] = useState('');
	const [userProfession, setUserProfession] = useState('');
	const [userLocation, setUserLocation] = useState('');
	const [userBusiness, setUserBusiness] = useState('');
	const [userFinance, setUserFinance] = useState('');
	const [userInstitution, setUserInstitution] = useState('');
	const [userSkillset, setUserSkillset] = useState('');
	const [userMobile, setUserMobile] = useState('');
	const [userDateOfBirth, setUserDateOfBirth] = useState('');
	const [userLinkedIn, setUserLinkedIn] = useState('');
	const [userBloodGroup, setUserBloodGroup] = useState('');
	const [userFacebook, setUserFacebook] = useState('');
	const [userCanHelpMeAt, setUserCanHelpMeAt] = useState('');
	const [userPolitics, setUserPolitics] = useState('');
	const [userInfluence, setUserInfluence] = useState('');
	const addContact = async () => {
		await fetch(`${API_BASE}/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_id: `${user._id}`,
				name: userName,
				profession: userProfession,
				location: userLocation,
				business: userBusiness,
				finance: userFinance,
				institution: userInstitution,
				skillset: userSkillset,
				mobile: userMobile,
				dateOfBirth: userDateOfBirth,
				linkedIn: userLinkedIn,
				bloodGroup: userBloodGroup,
				facebook: userFacebook,
				influence: userInfluence,
			}),
		});
		setUserName('');
		setUserProfession('');
		setUserLocation('');
		setUserBusiness('');
		setUserFinance('');
		setUserInstitution('');
		setUserSkillset('');
		setUserMobile('');
		setUserDateOfBirth('');
		setUserLinkedIn('');
		setUserBloodGroup('');
		setUserFacebook('');
		setUserCanHelpMeAt('');
		setUserPolitics('');
		setUserInfluence('');
	};

	return (
		<>
			{/* <h1> 
        <Link to='/' >
              PHONEBOOK
          </Link> 
      </h1> */}
			<section>
				<Navbar className='navbar'>
					{/* <nav>
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
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M4.76571 13.9877C8.54134 21.9916 15.26 28.3549 23.6121 31.8029L23.6385 31.8138L25.2521 32.5139C27.3067 33.4052 29.7217 32.7722 31.039 30.9972L33.7311 27.37C33.8955 27.1484 33.8531 26.8403 33.6346 26.6687L28.935 22.9776C28.7013 22.7941 28.3578 22.8368 28.1791 23.0716L26.3499 25.4745C25.9057 26.058 25.1035 26.2608 24.4238 25.9613C18.1785 23.2098 13.16 18.324 10.3336 12.244C10.026 11.5823 10.2343 10.8013 10.8337 10.3688L13.3019 8.58815C13.543 8.41415 13.5869 8.0797 13.3985 7.85225L9.60651 3.27632C9.43027 3.06364 9.11393 3.02233 8.88636 3.18228L5.14035 5.815C3.30507 7.10485 2.65874 9.47574 3.59554 11.4818L4.76445 13.985C4.76487 13.9859 4.76529 13.9868 4.76571 13.9877ZM22.3618 34.6374C13.2866 30.8871 5.98728 23.9709 1.88479 15.2722L1.88231 15.2669L0.710951 12.7585C-0.850367 9.41506 0.226835 5.46356 3.28564 3.31381L7.03164 0.681091C8.62469 -0.438513 10.839 -0.149352 12.0727 1.33938L15.8647 5.91531C17.184 7.50744 16.8767 9.84862 15.1885 11.0666L13.7742 12.087C16.1632 16.5999 19.9496 20.286 24.5851 22.6118L25.6332 21.2349C26.8843 19.5914 29.2892 19.2922 30.9245 20.5767L35.6242 24.2678C37.1539 25.4691 37.4505 27.6257 36.2995 29.1766L33.6075 32.8039C31.4119 35.7622 27.3869 36.8171 23.9625 35.3318L22.3618 34.6374Z'
								fill='#3E1F92'
							/>
						</svg>
					</nav> */}

					<nav>
						<Link className='top-header' to='/'>
							Phonebook
						</Link>
					</nav>
				</Navbar>
				<h1 className='heading'>User Entry</h1>
			</section>

			<div className='main'>
				<Form className='user-entry'>
					<Row>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Name</Form.Label>
								<Form.Control
									className='label-box'
									name='name'
									onChange={(e) => setUserName(e.target.value)}
									value={userName}></Form.Control>
							</Form.Group>
						</Col>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Location</Form.Label>
								<Form.Control
									className='label-box'
									name='location'
									onChange={(e) => setUserLocation(e.target.value)}
									value={userLocation}></Form.Control>
							</Form.Group>
						</Col>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								{/* <label>Profession</label>
						<input
							type='text'
							className='input1'
							onChange={(e) => setUserProfession(e.target.value)}
							value={userProfession}
						/> */}

								<Form.Label className='title-label'>Profession</Form.Label>
								<Form.Control
									className='label-box'
									name='profession'
									onChange={(e) => setUserProfession(e.target.value)}
									value={userProfession}></Form.Control>
							</Form.Group>
						</Col>
					</Row>

					{/* <label>Name</label> */}
					{/* <input
							type='text'
							className='input1'
							onChange={(e) => setUserName(e.target.value)}
							value={userName}
						/> */}
					<Row>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								{/* <label>Business</label>
						<input
							type='text'
							className='input1'
							onChange={(e) => setUserBusiness(e.target.value)}
							value={userBusiness}
						/> */}
								<Form.Label className='title-label'>Business</Form.Label>
								<Form.Control
									className='label-box'
									name='business'
									onChange={(e) => setUserBusiness(e.target.value)}
									value={userBusiness}></Form.Control>
							</Form.Group>
						</Col>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Finance</Form.Label>
								<Form.Control
									className='label-box'
									name='finance '
									onChange={(e) => setUserFinance(e.target.value)}
									value={userFinance}></Form.Control>
							</Form.Group>
							{/* <label>Finance</label>
						<input
							type='text'
							className='input1'
							onChange={(e) => setUserFinance(e.target.value)}
							value={userFinance}
						/> */}
						</Col>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Institution</Form.Label>
								<Form.Control
									className='label-box'
									name='institution'
									onChange={(e) => setUserInstitution(e.target.value)}
									value={userInstitution}></Form.Control>
								{/* <label>Institution</label>
						<input
							type='text'
							className='input1'
							onChange={(e) => setUserInstitution(e.target.value)}
							value={userInstitution}
						/> */}
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Skillset</Form.Label>
								<Form.Control
									className='label-box'
									name='skillset'
									onChange={(e) => setUserSkillset(e.target.value)}
									value={userSkillset}></Form.Control>
							</Form.Group>
						</Col>
						{/* <label>Skillset</label>
						<input
							type='text'
							className='input1'
							onChange={(e) => setUserSkillset(e.target.value)}
							value={userSkillset}
						/> */}
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Mobile</Form.Label>
								<Form.Control
									className='label-box'
									name='mobile'
									type='number'
									maxLength={10}
									onChange={(e) => setUserMobile(e.target.value)}
									value={userMobile}></Form.Control>
							</Form.Group>
						</Col>
						{/* <label>Mobile</label>
						<input
							type='tel'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							placeholder='999-999-9999'
							className='input1'
							onChange={(e) => setUserMobile(e.target.value)}
							value={userMobile}
						/> */}
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>BirthDay</Form.Label>
								<Form.Control
									className='label-box'
									name='birthday'
									type='date'
									onChange={(e) => setUserDateOfBirth(e.target.value)}
									value={userDateOfBirth}></Form.Control>
							</Form.Group>
							{/* <label>BirthDay</label>
						<input
							type='date'
							className='input1'
							onChange={(e) => setUserDateOfBirth(e.target.value)}
							value={userDateOfBirth}
						/> */}
						</Col>
					</Row>
					<Row>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>LinkedIn</Form.Label>
								<Form.Control
									className='label-box'
									name='linkedin'
									onChange={(e) => setUserLinkedIn(e.target.value)}
									value={userLinkedIn}></Form.Control>
							</Form.Group>
							{/* <label>LinkedIn</label>
						<input
							type='text'
							className='input1'
							onChange={(e) => setUserLinkedIn(e.target.value)}
							value={userLinkedIn}
						/> */}
						</Col>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>BloodGroup</Form.Label>
								<Form.Control
									className='label-box'
									name='bloodgroup'
									onChange={(e) => setUserBloodGroup(e.target.value)}
									value={userBloodGroup}></Form.Control>
							</Form.Group>
							{/* <label>BloodGroup</label>
								<input
									type='text'
									className='input1'
									onChange={(e) => setUserBloodGroup(e.target.value)}
									value={userBloodGroup}
								/> */}
						</Col>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Facebook</Form.Label>
								<Form.Control
									className='label-box'
									name='facebook'
									onChange={(e) => setUserFacebook(e.target.value)}
									value={userFacebook}></Form.Control>
							</Form.Group>

							{/* <label>Facebook</label>
								<input
									type='text'
									className='input1'
									onChange={(e) => setUserFacebook(e.target.value)}
									value={userFacebook}
								/> */}
						</Col>
					</Row>
					<Row>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>CanHelpMeAt</Form.Label>

								<Form.Control
									className='label-box'
									name='canhelpmeat'
									onChange={(e) => setUserCanHelpMeAt(e.target.value)}
									value={userCanHelpMeAt}></Form.Control>
							</Form.Group>
							{/* <label>CanHelpMeAt</label>
								<input
									type='text'
									className='input1'
									onChange={(e) => setUserCanHelpMeAt(e.target.value)}
									value={userCanHelpMeAt}
								/> */}
						</Col>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Politics</Form.Label>
								<Form.Control
									className='label-box'
									name='politics'
									onChange={(e) => setUserPolitics(e.target.value)}
									value={userPolitics}></Form.Control>
							</Form.Group>
							{/* <label>Politics</label>
								<input
									type='text'
									className='input1'
									onChange={(e) => setUserPolitics(e.target.value)}
									value={userPolitics}
								/> */}
						</Col>
						<Col className='column-label'>
							<Form.Group className='info-group'>
								<Form.Label className='title-label'>Influence</Form.Label>
								<Form.Control
									className='label-box'
									name='influence'
									value={userInfluence}
									onChange={(e) =>
										setUserInfluence(e.target.value)
									}></Form.Control>
							</Form.Group>
						</Col>
					</Row>
					<br />
					<Button onClick={addContact} className='button1'>
						Save
					</Button>
					<Link className='link' to='/searchcontact'>
						SearchContact
					</Link>
				</Form>
				{/* <button onClick={addContact} className='button1'>
						Save
					</button> */}
				{/* <Link to='/searchcontact'>
						<h1 className='search-contact'>Search Contact</h1>
					</Link> */}
			</div>
		</>
	);
}

export default UserEntry;
