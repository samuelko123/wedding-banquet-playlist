import React from 'react'

export const useAudio = url => {
	const [audio] = React.useState(new Audio(url))

	const [, _forceUpdate] = React.useState(false)
	const forceUpdate = () => _forceUpdate(prevState => !prevState)

	React.useEffect(() => {
		audio.addEventListener('play', forceUpdate)
		audio.addEventListener('pause', forceUpdate)
		audio.addEventListener('ended', forceUpdate)
		audio.addEventListener('timeupdate', forceUpdate)

		return () => {
			audio.removeEventListener('play', forceUpdate)
			audio.removeEventListener('pause', forceUpdate)
			audio.removeEventListener('ended', forceUpdate)
			audio.addEventListener('timeupdate', forceUpdate)
		}
	}, [audio])

	const play = () => audio.play()
	const pause = () => audio.pause()

	return {
		isPlaying: !audio.paused,
		currentTime: audio.currentTime,
		play: play,
		pause: pause,
	}
}