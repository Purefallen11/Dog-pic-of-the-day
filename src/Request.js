import React, { useEffect, useState } from 'react'
import CardMaker from './CardMaker'
import axios from 'axios'
import './request.css'


const Request = () => {
	const [pet, setPet] = useState([])
	useEffect(() => {
		axios.get('https://dog.ceo/api/breed/hound/images/random/1')
			.then(res => {
				console.log(res)
				setPet(res.data.message)
				
			})
			.catch(err => {
			console.log("something went wrong", err)
		})
	},[])
	return (
		<div className="div-container">
			<div className="card-maker">
				{pet.map(url => <CardMaker key={url} imgUrl={url} />)}
			</div>
	</div>
	)
}

export default Request