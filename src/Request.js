import React, { useEffect, useState } from 'react'
import CardMaker from './CardMaker'
import axios from 'axios'
import './request.css'
import {Button, Container, Row} from 'reactstrap'


const Request = () => {
	const [pet, setPet] = useState([])
	const [breed,setBreed] = useState('mix')
	useEffect(() => {
		axios.get(`https://dog.ceo/api/breed/${breed}/images/random/1`)
			.then(res => {
				console.log(res)
				setPet(res.data.message)
				
			})
			.catch(err => {
			console.log("something went wrong", err)
		})
	},[breed])
	return (
		<Container>
				<Button color="primary" onClick={() => setBreed('husky')}>Husky</Button>
				<Button color="warning" onClick={() => setBreed('labrador')}>Labrador</Button>
				<Button color="success" onClick={() => setBreed('pyrenees')}>Pyrenees</Button>
			<Row col-sm-6>
				<div>
					
					<div className="card-maker">
						{pet.map(url => <CardMaker key={url} imgUrl={url} />)}
					</div>
				</div>
			</Row>
	</Container>
	)
}

export default Request