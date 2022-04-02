const UserContact = require('../models/UserContact');

/*
If no any query parameter is passed and if in the body only current logged in user id is passed then,
it displays all the user's contact information

If query parameter is passed, then it gives the specific user's contact information
*/

const searchUser = async (req, res) => {
	try {
		var search = {};
		const contactName = req.query.name;
		if (contactName == undefined) {
			search = { user_id: req.body.user_id };
		} else {
			search = {
				user_id: req.body.user_id,
				//name : contactName
				name: { $regex: '.*' + contactName + '.*', $options: 'i' },
				// This is like the LIKE in SQL, e.i. SELECT * FROM students WHERE name LIKE %van%
				// In Mongoose, we can write,
				// var colName = "van";
				// models.students.find({ name: { $regex: '.*' + colName + '.*' } }, colName is van
			};
		}
		const contact = await UserContact.find(search).limit(5);

		if (!contact.length) {
			return res.send({
				message:
					"Please check the contact's name Or leave the search box empty and hit search",
			});
		}

		res.send({ message: contact });
	} catch (err) {
		res.send({ error: err });
	}
};

module.exports = {
	searchUser,
};
