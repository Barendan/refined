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
		<div className="mx-auto px-5">
			<h2 className="display-3">Add Contact</h2>
			
			<form className="addcontact" onSubmit={onSubmit}>
				
				<div className="form-row">
					<div className="col">
						<input className="form-control" type="text" value={FirstName} onChange={e => setFirstName(e.currentTarget.value)}/>
						<label>First Name</label>
					</div>
					<div className="col">
						<input className="form-control" type="text" value={LastName} onChange={e => setLastName(e.currentTarget.value)}/>
						<label>Last Name</label>
					</div>
				</div>

				<div className="form-row">
					<div className="col">
						<input className="form-control" type="number" value={age} onChange={e => setAge(e.currentTarget.value)}/>
						<label>Age</label>
					</div>
					<div className="col">
						<input className="form-control" type="text" value={LastName} onChange={e => setLastName(e.currentTarget.value)}/>
						<label>Gender</label>
					</div>
				</div>
				<button className="btn btn-light mt-3">Add Contact</button>
				
			</form>
		
		</div>
	)
}

export default AddContactForm;