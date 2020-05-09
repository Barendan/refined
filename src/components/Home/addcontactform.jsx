import React, { useState } from 'react';
import firebase from '../../firebase';

const AddContactForm = () => {
	const [FirstName, setFirstName] = useState('')
	const [LastName, setLastName] = useState('')
	const [age, setAge] = useState('')

	function onSubmit(e) {
		e.preventDefault()

		firebase
			.firestore()
			.collection('contact_List')
			.add({
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
		<form onSubmit={onSubmit}>
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
			<button>Add Contact</button>
		</form>
	)
}

export default AddContactForm;