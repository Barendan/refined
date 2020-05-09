import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase';

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
		<div>
			<h1>Register</h1>
			<form onSubmit={handleRegister}>
				<label>
					Name
					<input name="name" type="name" placeholder="Name" />
				</label>
				<label>
					Email
					<input name="email" type="email" placeholder="Email" />
				</label>
				<label>
					Password
					<input name="password" type="password" placeholder="Password" />
				</label>
				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default withRouter(Register);