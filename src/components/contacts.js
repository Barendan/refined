import React, { useState, useEffect } from 'react';

import firebase from '../firebase';

const SORT_OPTIONS = {
	'FirstName_ASC': {column: 'FirstName', direction: 'asc'},
	'FirstName_DESC': {column: 'FirstName', direction: 'desc'},

	'LastName_ASC': {column: 'LastName', direction: 'asc'},
	'LastName_DESC': {column: 'LastName', direction: 'desc'},
}

function useContacts(sortBy = 'FirstName_ASC') {
	const [contacts, setContacts] = useState([])

	useEffect(()=> {
		const unsubscribe = firebase
			.firestore()
			.collection('contact_List')
			.orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
			.onSnapshot((snapshot) => {
				const newContacts = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))

				setContacts(newContacts)
			})

		return () => unsubscribe()
	}, [sortBy])

	return contacts
}

const ContactList = () => {
	const [sortBy, setSortBy] = useState('FirstName_ASC')
	const contacts = useContacts(sortBy)

	return (
		<div className="container">
			<h2> Contacts List </h2>
			<div className="row">
				<label> Sort By: </label>
				<select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
					<option value="FirstName_ASC">First Name (Asc)</option>
					<option value="FirstName_DESC">First Name (Desc)</option>
					<option value="LastName_ASC">Last Name (Asc)</option>
					<option value="LastName_DESC">Last Name (Desc)</option>
					<option>Added (newest)</option>
					<option>Added (oldest)</option>
				</select>
			</div>
			<ol>
				{contacts.map((contact) =>
					<li key={contact.id}>
						<div className="contact-entry">
							{contact.FirstName} {contact.LastName}
							<code className="age">{contact.age}</code>
						</div>
					</li>
				)}
			</ol>
		</div>
	)
}

export default ContactList