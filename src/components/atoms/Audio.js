import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useDispatch } from 'react-redux'
import { audioActions } from '../../redux/slices/audio'

export const Audio = (props) => {
	const {
		controls,
		autoPlay,
		src,
		isPlaying,
	} = props

	const player = React.useRef()
	const dispatch = useDispatch()
	const [, _forceUpdate] = React.useState(false)
	const forceUpdate = () => _forceUpdate(prevState => !prevState)

	React.useEffect(() => {
		const handlePlay = () => {
			dispatch(audioActions.setIsPlaying(true))
			forceUpdate()
		}

		const handlePause = () => {
			dispatch(audioActions.setIsPlaying(false))
			forceUpdate()
		}

		const handleStop = () => {
			dispatch(audioActions.setIsPlaying(false))
			forceUpdate()
		}

		const audio = player.current.audioEl.current
		audio.addEventListener('play', handlePlay)
		audio.addEventListener('pause', handlePause)
		audio.addEventListener('ended', handleStop)
		audio.addEventListener('timeupdate', forceUpdate)

		return () => {
			audio.removeEventListener('play', handlePlay)
			audio.removeEventListener('pause', handlePause)
			audio.removeEventListener('ended', handleStop)
			audio.addEventListener('timeupdate', forceUpdate)
		}
	}, [dispatch])

	React.useEffect(() => {
		if (isPlaying) {
			player.current.audioEl.current.play()
		} else {
			player.current.audioEl.current.pause()
		}
	}, [isPlaying])

	return (
		<ReactAudioPlayer
			src={src}
			controls={controls}
			autoPlay={autoPlay}
			ref={player}
		/>
	)
}