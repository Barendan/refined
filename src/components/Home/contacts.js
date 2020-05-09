import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../Auth'
import firebase from '../../firebase'

const SORT_OPTIONS = {
	'FirstName_ASC': {column: 'FirstName', direction: 'asc'},
	'FirstName_DESC': {column: 'FirstName', direction: 'desc'},

	'LastName_ASC': {column: 'LastName', direction: 'asc'},
	'LastName_DESC': {column: 'LastName', direction: 'desc'},
}

function useContacts(sortBy = 'FirstName_ASC') {
	const [contacts, setContacts] = useState([])
	const user = useContext(AuthContext)
	const userId = user.currentUser.uid
	const contactArray = []

	useEffect(()=> {
		console.log("hello")
		const unsubscribe = firebase
			.database()
			.ref('users/' + userId )
			// .child('contactList/')
			.on('value', (snapshot) => {
				console.log("docs", snapshot)
				console.log("val", snapshot.val())

				snapshot.child('contactList').forEach(function(childSnapshot) {
					contactArray.push({
						id: childSnapshot.key,
						info: childSnapshot.val()
					})
					// console.log("key", childSnapshot.key)
					// console.log("val", childSnapshot.val())
				})
				const newContacts = contactArray.map((contact) => ({
					id: contact.id,
					...contact.info
				}))

				setContacts(newContacts)

			})

		return () => unsubscribe()
	}, [])

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