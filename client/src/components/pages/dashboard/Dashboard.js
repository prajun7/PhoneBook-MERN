import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Link } from 'react-router-dom';
import {
	Navbar,
	Nav,
	Container,
	Form,
	InputGroup,
	Row,
	Col,
	Card,
} from 'react-bootstrap';
// This will be the Dashboard Page,
// User will be able to see the the number of their contacts

const API_BASE = 'http://localhost:5000';

/*
    This removes the underline and makes the text blue from the links
    Used below in Forgot Password? and Need an Account?
  */
const navStyle = {
	color: 'blue',
	textDecoration: 'none', // Removing the text-decoration(underline) from the links
	// In Javascript while writing CSS we need to change text-decoration to textDecoration
};

function Dashboard() {
	const { loggedIn, user } = useContext(UserContext);

	const [teacherCount, setTeacherCount] = useState(0);
	const [doctorCount, setDoctorCount] = useState(0);
	const [designerCount, setDesignerCount] = useState(0);
	const [politicianCount, setPoliticianCount] = useState(0);
	const [studentCount, setStudentCount] = useState(0);
	const [businessmanCount, setBusinessmanCount] = useState(0);

	useEffect(() => {
		TeacherCount();
		DoctorCount();
		DesignerCount();
		PoliticianCount();
		StudentCount();
		BusinessmanCount();
	}, []);

	const TeacherCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/teachers`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setTeacherCount(items.Teacher_Count);
	};

	const DoctorCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/doctors`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setDoctorCount(items.Doctor_Count);
	};

	const DesignerCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/designers`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setDesignerCount(items.Designer_Count);
	};

	const PoliticianCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/politicians`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setPoliticianCount(items.Politician_Count);
	};

	const StudentCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/students`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setStudentCount(items.Student_Count);
	};

	const BusinessmanCount = async (e) => {
		const data = await fetch(API_BASE + `/contact/${user._id}/businessmen`);
		const items = await data.json();
		// console.log(items.Teacher_Count);
		setBusinessmanCount(items.Businessman_Count);
	};

	return (
		<>
			<nav>
				<Navbar>
					<Link className='top-header' to='/'>
						Phonebook
					</Link>
				</Navbar>
			</nav>
			<h1>Dashboard</h1>
			<div className='bottom-container'>
				<section>
					<div className='dashboard-container'>
						<Card className='flashcard'>
							<Card.Body>
								<h2>Teacher</h2>
								<p>{teacherCount}</p>
							</Card.Body>
						</Card>

						<Card className='flashcard'>
							<Card.Body>
								<h2>Doctor</h2>
								<p>{doctorCount}</p>
							</Card.Body>
						</Card>

						<Card>
							<Card.Body>
								<h2>Designer</h2>
								<p>{designerCount}</p>
							</Card.Body>
						</Card>
					</div>

					<br />
					<div>
						<Card>
							<Card.Body>
								<h2>Politician</h2>
								<p>{politicianCount}</p>
							</Card.Body>
						</Card>

						<Card>
							<Card.Body>
								<h2>Student</h2>
								<p>{studentCount}</p>
							</Card.Body>
						</Card>

						<Card>
							<Card.Body>
								<h2>Businessman</h2>
								<p>{businessmanCount}</p>
							</Card.Body>
						</Card>
					</div>
				</section>
				<br />
			</div>

			<section className='dashboard-button'>
				<Link style={navStyle} to='/userentry'>
					<button> Add Contacts</button>
				</Link>

				<Link style={navStyle} to='/searchcontact'>
					<button>Search Contact</button>
				</Link>
			</section>
		</>
	);
}

export default Dashboard;
