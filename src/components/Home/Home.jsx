import React from 'react';
import firebase from '../../firebase';

import ContactList from './contacts';
import AddContactForm from './addcontactform';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<button onClick={ () => firebase.auth().signOut()}>Sign out</button>
			<hr />

			<h1> Refined </h1>
			<ContactList />
			<AddContactForm />
		</div>
	)
}

export default Home;