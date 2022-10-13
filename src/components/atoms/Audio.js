import React from 'react'

export const Audio = (props) => {
	const {
		controls,
		src,
	} = props

	return (
		<audio controls={controls}>
			<source src={src} />
		</audio>
	)
}