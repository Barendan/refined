import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './Firebase/Auth'
import PrivateRoute from './Firebase/PrivateRoute'

import Login from './Gateway/Login'
import Register from './Gateway/Register'
import Dashboard from './Dashboard/Dashboard'

import './App.css';


function App() {
  return (
  	<AuthProvider>
	  	<Router>
			<PrivateRoute exact path="/" component={Dashboard} />
		    <Route exact path="/login" component={Login} />
		    <Route exact path="/register" component={Register} />
		</Router>
  	</AuthProvider>
  );
}

export default App;// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
