import React from 'react'
import './cardmaker.css'

const CardMaker = props => {
	return (
		<div className="container">
			<div className="card-body">
				<img src={props.imgUrl} alt="cute dog" />
				
				
			
				
			</div>
		</div>
	)
}

export default CardMaker