import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import { AuthContext } from '../Firebase/Auth';
import firebase from '../Firebase/firebase'



const DisplayContact = () => {


	return (
		<Row className="displaycontact justify-content-around h-100" >
			<Col className="col-5 m-1 h-50">
				<h2 className="text-warning">Quinto [Fernandez]</h2>
				<Row className="align-items-end">
					<Col className="basic col-5 pt-5 pl-4">
						<div>24_Age</div>
						<div>Male_Gender</div>
						<div>Spanish_Heritage</div>
					</Col>
					<Col className="col-5 pt-5">
						<div className="m-5" id="hexagon">
							<img className="profile" src="https://i.ibb.co/xD28Y8Q/profile.png" alt="profile" border="0" />
						</div>
					</Col>
				</Row>
			</Col>

			<Col className="col-6 m-1 h-50 overflow-hidden">
				<h4 className="">Behavior Protocols</h4>
				<Row className="justify-content-around h-50">
					<Col className="col-12 pb-5 border-round">
						<div className="featured h-100">
							Featured
						</div>
					</Col>
				</Row>
				<Row className="h-50">
					<Col className="col-4 card border-right-0 border-bottom-0">
						<div className="card-title">
							One
						</div>
						<div className="">
							some content currently written in here
						</div>
					</Col>
					<Col className="col-4 card border-right-0 border-bottom-0">
						<div className="card-title">
							Two
						</div>
						<div className="">
							some content currently written in here
						</div>
					</Col>
					<Col className="col-4 card border-right-0 border-bottom-0">
						<div className="card-title">
							Three
						</div>
						<div className="">
							some content currently written in here
						</div>
					</Col>
				</Row>
			</Col>

			<Col className="col-5 m-1 bg-light h-50">
				<h5>Converse</h5>
			</Col>
			<Col className="col-6 m-1 bg-light h-50">
				<h7>SwMatrix</h7>
			</Col>
		</Row>
	)
}

export default DisplayContact;