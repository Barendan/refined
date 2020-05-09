import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import Dashboard from './Dashboard';

function App() {
  return (
  	<AuthProvider>
	  	<Router>
		    <div className="App">
			    <PrivateRoute exact path="/" component={Home} />
			    <Route exact path="/login" component={Login} />
			    <Route exact path="/register" component={Register} />
		    </div>
		</Router>
  	</AuthProvider>
  );
}

export default App;