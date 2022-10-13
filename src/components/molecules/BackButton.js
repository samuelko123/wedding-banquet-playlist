import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Button } from '../atoms/Button'

export const BackButton = (props) => {
	const { onClick } = props
	return (
		<Button
			startIcon={<ArrowBackIosNewIcon />}
			onClick={onClick}
		>
			Back
		</Button>
	)
}
