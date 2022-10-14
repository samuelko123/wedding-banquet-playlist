import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export const Audio = (props) => {
	const {
		controls,
		autoPlay,
		src,
	} = props

	return (
		<ReactAudioPlayer
			src={src}
			controls={controls}
			autoPlay={autoPlay}
		/>
	)
}