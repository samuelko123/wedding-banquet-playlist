import React from 'react'
import {
	useDispatch,
	useSelector,
} from 'react-redux'
import {
	audioActions,
	audioSelectors,
} from '../../redux/slices/audio'
import { PauseButton } from '../molecules/PauseButton'
import { PlayButton } from '../molecules/PlayButton'

export const PlayPauseButton = (props) => {
	const {
		onPlay,
		active,
	} = props

	const dispatch = useDispatch()
	const isPlaying = useSelector(audioSelectors.selectIsPlaying)
	const color = active ? 'primary' : 'default'

	return (
		(isPlaying && active)
			?
			<PauseButton
				color={color}
				onClick={() => dispatch(audioActions.setIsPlaying(false))}
			/>
			:
			<PlayButton
				color={color}
				onClick={() => {
					if (active) {
						dispatch(audioActions.setIsPlaying(true))
					} else {
						onPlay()
					}
				}}
			/>
	)
}
