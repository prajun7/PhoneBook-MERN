import './App.css';
import SignUp from './components/pages/signUp/SignUp';
import Home from './components/pages/home/Home';
import ForgotPassword from './components/pages/forgotPassword/forgotPassword';
import LogIn from './components/pages/logIn/LogIn';
import Dashboard from './components/pages/dashboard/Dashboard';
import UserEntry from './components/pages/userEntry/UserEntry';
import SearchContact from './components/pages/searchContact/SearchContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserContextProvider from './contexts/UserContext';

// App.js is our main component that holds all other components.

function App() {
	return (
		<div>
			<Router>
				<UserContextProvider>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/login' component={LogIn} />
						<Route path='/signup' component={SignUp} />
						<Route path='/forgotpassword' component={ForgotPassword} />
						<Route path='/userentry' component={UserEntry} />
						<Route path='/searchcontact' component={SearchContact} />
					</Switch>
				</UserContextProvider>
			</Router>
		</div>
	);
}

export default App;
