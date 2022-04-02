//const User = require('../models/User');
const UserContact = require('../models/UserContact');

const addUserContact = async (req, res) => {
	const userContact = new UserContact({
		user_id: req.body.user_id,
		name: req.body.name,
		profession: req.body.profession,
		finance: req.body.finance,
		mobile: req.body.mobile,
		linkedin: req.body.linkedin,
		canHelpMeAt: req.body.canHelpMeAt,
		facebook: req.body.facebook,
		location: req.body.location,
		institution: req.body.institution,
		canConnectWithMe: req.body.canConnectWithMe,
		politics: req.body.politics,
		influence: req.body.influence,
		domainExpert: req.body.domainExpert,
		business: req.body.business,
		skillset: req.body.skillset,
		dateOfBirth: req.body.dateOfBirth,
		network: req.body.network,
		bloodGroup: req.body.bloodGroup,
		industry: req.body.industry,
	});
	try {
		const savedUserContact = await userContact.save();
		res.send({ 'User Contact': userContact });
	} catch (err) {
		res.status(400).send({ error: err });
	}
};

/*
Counts the total number of contacts who are teachers for a specific user
*/
const getTeacherCount = async (req, res) => {
	const documentCount = await UserContact.countDocuments({
		user_id: req.params.user_id,
		profession: 'Teacher',
	});
	res.send({ Teacher_Count: documentCount });
};

/*
Counts the total number of contacts who are doctors for a specific user
*/
const getDoctorCount = async (req, res) => {
	const documentCount = await UserContact.countDocuments({
		user_id: req.params.user_id,
		profession: 'Doctor',
	});
	res.send({ Doctor_Count: documentCount });
};
/*
Counts the total number of contacts who are designers for a specific user
*/
const getDesignerCount = async (req, res) => {
	const documentCount = await UserContact.countDocuments({
		user_id: req.params.user_id,
		profession: 'Designer',
	});
	res.send({ Designer_Count: documentCount });
};

/*
Counts the total number of contacts who are politicians for a specific user
*/
const getPoliticianCount = async (req, res) => {
	const documentCount = await UserContact.countDocuments({
		user_id: req.params.user_id,
		profession: 'Politician',
	});
	res.send({ Politician_Count: documentCount });
};

/*
Counts the total number of contacts who are students for a specific user
*/
const getStudentCount = async (req, res) => {
	const documentCount = await UserContact.countDocuments({
		user_id: req.params.user_id,
		profession: 'Student',
	});
	res.send({ Student_Count: documentCount });
};

/*
Counts the total number of contacts who are businessman for a specific user
*/
const getBusinessmanCount = async (req, res) => {
	const documentCount = await UserContact.countDocuments({
		user_id: req.params.user_id,
		profession: 'Businessman',
	});
	res.send({ Businessman_Count: documentCount });
};

/*
Get specific contact's information
user_id : user id is coming from the user, it the user's id who is currently logged in
contact_id : contact id comes from specific contact, as a param, when user clicks 
*/
const getSpecificContact = async (req, res) => {
	try {
		const contact = await UserContact.find({
			user_id: req.body.user_id,
			_id: req.params.contact_id,
		});
		res.send({ Countact: contact });
	} catch (err) {
		res.send({ message: err });
	}
};

module.exports = {
	addUserContact,
	getTeacherCount,
	getDoctorCount,
	getDesignerCount,
	getPoliticianCount,
	getStudentCount,
	getBusinessmanCount,
	getSpecificContact,
};
