import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { IconButton } from '../atoms/IconButton'

export const PlayButton = (props) => {
	const {
		color,
		onClick,
	} = props

	return (
		<IconButton
			onClick={onClick}
			color={color}
		>
			<PlayArrowIcon />
		</IconButton>
	)
}
