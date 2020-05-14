import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import { Container, Row, Col } from 'react-bootstrap'

import firebase from '../Firebase/firebase'


const Register = ({ history }) => {
	
	const handleRegister = useCallback(async event => {
		event.preventDefault();
		const { name, email, password } = event.target.elements;

		try {
			await firebase
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value)
				.then( authUser => {
					const user = firebase.auth().currentUser;
					user.updateProfile({
						displayName: name.value
					}).then( () => {
						const userId = user.uid

						firebase
							.database()
							.ref('users/' + userId)
							.set({
								"name":name.value,
								"email":email.value,
								"password":password.value
							})
					})
				})
			history.push('/');
		} catch (error) {
			alert(error);
		}
	}, [history]);

	return (
	  	<Container className="gateway" fluid>
			<Row className="h-100 align-items-center justify-content-center pt-5">
			    <Col className="col-6 offset-4">
					<h1>Request Access</h1>
					<form className="p-5" onSubmit={handleRegister}>
						<label className="form-group d-block">
							Name :
							<input className="form-control bg-transparent" name="name" type="name" placeholder="Name" />
						</label>
						<label className="form-group d-block">
							Email :
							<input className="form-control bg-transparent" name="email" type="email" placeholder="Email" />
						</label>
						<label className="form-group d-block">
							Password :
							<input className="form-control bg-transparent" name="password" type="password" placeholder="Password" />
						</label>
						<button className="btn btn-outline-light mt-3" type="submit">Confirm</button>
					</form>
			    </Col>
			</Row>
	  	</Container>
	)
}

export default withRouter(Register);