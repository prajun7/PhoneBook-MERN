const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); //Need to add this cors, then only we will be able to
// fetch data from the below port in react
const dotenv = require('dotenv');
dotenv.config();

//Importing the signup routes from the routes folder
const signUp = require('./routes/signUpRoute');
const logIn = require('./routes/logInRoute');
const contact = require('./routes/contactRoute');
const search = require('./routes/searchContactRoute');
// const searchRoute = require('./routes/search')

//Middlewares
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use('/auth', signUp);
app.use('/auth', logIn);
app.use('/contact', contact);
app.use('/search', search);

//Database connection
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },

	() => console.log('Connected to DB!')
);

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.listen(5000, () => console.log('Server running on port 5000'));
