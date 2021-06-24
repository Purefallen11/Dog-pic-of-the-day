import React from 'react'

const CardMaker = ({pokes}) => {
	return (
		<div className="container">
			<div className="card-body">
				<p>{pokes.name}</p>
				<img src={pokes.url} alt="pokemon sprite" />
				<p>type</p>
			</div>
		</div>
	)
}

export default CardMaker