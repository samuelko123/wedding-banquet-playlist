import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { IconButton } from '../atoms/IconButton'

export const PlayButton = (props) => {
	const {
		playing,
		onClick,
	} = props

	return (
		<IconButton
			onClick={onClick}
			color={playing ? 'primary' : 'default'}
		>
			{playing ? <PauseIcon /> : <PlayArrowIcon />}
		</IconButton>
	)
}
