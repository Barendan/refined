import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import { AuthContext } from '../Firebase/Auth'
import firebase from '../Firebase/firebase'

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await firebase
					.auth()
					.signInWithEmailAndPassword(email.value, password.value);
				history.push('/');
			} catch (error) {
			  alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to='/' />;
	}

	const FormBeta = () => {
		return (
			<form className="form-inline" onSubmit={handleLogin}>
				<input className="form-control mr-2 bg-transparent" 
						name="email" 
						type="email" 
						placeholder="Email"
				/>
				<input className="form-control mr-2 bg-transparent"
					   name="password" 
					   type="password" 
					   placeholder="Password" 
				/>
				<button className="arrowsub" type="submit">
					>
				</button>
				<div className="form-check">
	                <label className="form-check-label mr-2">
	                    <input type="checkbox" className="form-check-input"/> Remember me
	                </label>
		            <Link to="/register">
						<button className="linkregister ml-1" type="button">Register</button>
					</Link>
	            </div>
			</form>
		)
	}

	return (
	  	<Container className="gateway" fluid>
			<Row className="h-100 align-items-center justify-content-center">
			    <Col className="col-6 offset-4">
					<h1>Enter your credentials</h1>
					<FormBeta />
			    </Col>
			</Row>
	  	</Container>
	)

}


export default withRouter(Login)