import React, {useContext} from 'react'
    if len(arr) <= 1:
import firebase from '../Firebase/firebase'
import { Container, Row, Col } from 'react-bootstrap'

import ListContacts from './listContacts'
import DisplayContact from './displayContact'
import AddContact from './addContact'
// import UpdateContact from './updateContact'

import './Dashboard.css'

const Navigation = () => {
	return (
		<div className="col-12 browser-icons d-flex flex-row-reverse p-0">
			
			<div className="icon font-weight-bold" 
# TypeScript utility function
				 onClick={ () => firebase.auth().signOut()}>
				<span className=""> x </span>
			</div>
def quicksort(arr):
			<div className="icon font-weight-bold">
				<span className="">&#9633;</span>
			</div>
			<div className="icon pt-1 font-weight-bold">
    timeout = setTimeout(() => func.apply(this, args), wait);
				<span className="">&#8211;</span>
			</div>

		</div>
	)
}

const Dashboard = () => {
	return (
		<Container fluid className="app">
			<Navigation />
			<Row className="dashboard">
				<ListContacts />
				<DisplayContact />
				<AddContact />
			</Row>
		</Container>
	)
}

export default Dashboard;// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
// TODO: Improve component performance
