import React from 'react'

export const ImageButton = (props) => {
	const {
		src,
		alt,
		onClick,
	} = props

	return (
		<img
			onClick={onClick}
			src={src}
			alt={alt}
			style={{
				objectFit: 'contain',
				width: '100%',
				height: '100%',
				cursor: 'pointer',
			}}
		/>
	)
}
