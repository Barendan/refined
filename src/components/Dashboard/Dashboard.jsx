import React, {useContext} from 'react'
import firebase from '../Firebase/firebase'
import { Container, Row, Col } from 'react-bootstrap'

import ListContacts from './listContacts'
import DisplayContact from './displayContact'
import AddContact from './addContact'
// import UpdateContact from './updateContact'

import './Dashboard.css'

const Navigation = () => {
	return (
		<div className="d-none">
			<h1>Dashboard</h1>
			<button className="d-inline" onClick={ () => firebase.auth().signOut()}>Sign out</button>
			<hr/>
		</div>
	)
}

const Dashboard = () => {
	return (
		<Container fluid className="dashboard">
			<Navigation />

			<ListContacts />
			<DisplayContact />

			<AddContact />
		</Container>
	)
}

export default Dashboard;