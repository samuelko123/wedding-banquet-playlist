import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import {
	useDispatch,
	useSelector,
} from 'react-redux'
import {
	audioActions,
	audioSelectors,
} from '../../redux/slices/audio'
import 'react-h5-audio-player/lib/styles.css'

export const Audio = () => {
	const dispatch = useDispatch()
	const isPlaying = useSelector(audioSelectors.selectIsPlaying)
	const src = useSelector(audioSelectors.selectSrc)
	const player = React.useRef()

	React.useEffect(() => {
		if (isPlaying) {
			player.current?.audio.current.play()
		} else {
			player.current?.audio.current.pause()
		}
	}, [isPlaying])

	if (!src) {
		return null
	}

	return (
		<AudioPlayer
			ref={player}
			src={src}
			autoPlayAfterSrcChange={true}
			onPlay={() => dispatch(audioActions.setIsPlaying(true))}
			onPause={() => dispatch(audioActions.setIsPlaying(false))}
			onEnded={() => dispatch(audioActions.playNext())}
		/>
	)
}