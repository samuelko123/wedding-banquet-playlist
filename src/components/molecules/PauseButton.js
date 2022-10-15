import React from 'react'
import PauseIcon from '@mui/icons-material/Pause'
import { IconButton } from '../atoms/IconButton'

export const PauseButton = (props) => {
	const {
		color,
		onClick,
	} = props

	return (
		<IconButton
			onClick={onClick}
			color={color}
		>
			<PauseIcon />
		</IconButton>
	)
}
