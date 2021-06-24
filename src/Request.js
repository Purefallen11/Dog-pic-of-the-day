import React, { useEffect, useState } from 'react'
import CardMaker from './CardMaker'
import axios from 'axios'


const Request = () => {
	const [pokes, setPokes] = useState([])
	useEffect(() => {
		axios.get("https://pokeapi.co/api/v2/pokemon/")
			.then(res => {
				console.log(res)
				setPokes(res.data.results)
			})
			.catch(err => {
			console.log("something went wrong", err)
		})
	},[])
	return (
		<CardMaker pokes={pokes}/>
	)
}

export default Request