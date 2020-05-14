import React, { useState, useContext } from 'react';
import { AuthContext } from '../Firebase/Auth';
import firebase from '../Firebase/firebase'



const AddContactForm = () => {
	const [FirstName, setFirstName] = useState('')
	const [LastName, setLastName] = useState('')
	const [age, setAge] = useState('')

	const user = useContext(AuthContext)
	const userId = user.currentUser.uid

	function onSubmit(e) {
		e.preventDefault()
		const db = firebase.database();
		const newContactKey = db.ref().child('contacts').push().key;

		db
			.ref('users/' + userId)
			.child('contactList/' + newContactKey)
			.update({
				FirstName,
				LastName,
				age
			})
			.then(() => {
				setFirstName('')
				setLastName('')
				setAge('')
			})
	}


	return (
		<form className="d-none" onSubmit={onSubmit}>
			<h4>Add Contact</h4>
			<div>
				<label>First Name</label>
				<input type="text" value={FirstName} onChange={e => setFirstName(e.currentTarget.value)}/>
			</div>
			<div>
				<label>Last Name</label>
				<input type="text" value={LastName} onChange={e => setLastName(e.currentTarget.value)}/>
			</div>
			<div>
				<label>Age</label>
				<input type="number" value={age} onChange={e => setAge(e.currentTarget.value)}/>
			</div>
			<div>
				<label>Age</label>
				<input type="number" value={age} onChange={e => setAge(e.currentTarget.value)}/>
			</div>
			<div>
				<label>Age</label>
				<input type="number" value={age} onChange={e => setAge(e.currentTarget.value)}/>
			</div>
			<div>
				<label>Age</label>
				<input type="number" value={age} onChange={e => setAge(e.currentTarget.value)}/>
			</div>
			<button>Add Contact</button>
		</form>
	)
}

export default AddContactForm;