import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Firebase/Auth'
import firebase from '../Firebase/firebase'

const SORT_OPTIONS = {
	'FirstName_ASC': {column: 'FirstName', direction: 'asc'},
	'FirstName_DESC': {column: 'FirstName', direction: 'desc'},

	'LastName_ASC': {column: 'LastName', direction: 'asc'},
	'LastName_DESC': {column: 'LastName', direction: 'desc'},
}

function useContacts() {
	const [contacts, setContacts] = useState([])
	const user = useContext(AuthContext)
	const userId = user.currentUser.uid

	useEffect(()=> {
		firebase
			.database()
			.ref('users/' + userId )
			.on('value', (snapshot) => {
				const contactArray = []
				snapshot.child('contactList').forEach(function(childSnapshot) {
					contactArray.push({
						id: childSnapshot.key,
						info: childSnapshot.val()
					})
				})
				const newContacts = contactArray.map((contact) => ({
					id: contact.id,
					...contact.info
				}))
				setContacts(newContacts)
			})
	}, [])

	return contacts
}


const ContactList = () => {
	const [sortBy, setSortBy] = useState('FirstName_ASC')
	const contacts = useContacts()
	const user = useContext(AuthContext)
	const userId = user.currentUser.uid

	const removeContact = (uid) => {
		firebase.database().ref('users/' + userId).child('contactList').on('value', (snap) => {
			snap.forEach( (itemSnap) => {
				snap.ref.child(uid).remove()
			})
		})
	}

	return (
		<div className="container d-none">
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
					<li key={contact.id} onClick={ () => removeContact(contact.id)}>
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