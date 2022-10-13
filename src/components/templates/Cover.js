import React from 'react'
import { Box } from '../atoms/Box'
import { ImageButton } from '../atoms/ImageButton'

export const Cover = (props) => {
	const {
		width,
		onClick,
	} = props
	return (
		<Box
			width={width}
			margin='auto'
		>
			<ImageButton
				src='/front_page.jpeg'
				alt='cover photo'
				onClick={onClick}
			/>
		</Box>
	)
}
