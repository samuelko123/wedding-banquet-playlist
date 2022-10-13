import React from 'react'
import { Audio } from '../atoms/Audio'
import { Stack } from '../atoms/Stack'
import { BackButton } from '../molecules/BackButton'
import { PlayList } from '../organisms/PlayList'

export const Content = (props) => {
	const {
		album,
		width,
		onClick,
	} = props

	const [currentSong, setCurrentSong] = React.useState(null)
	console.log(currentSong?.src)

	return (
		<Stack
			width={width}
			margin='auto'
			gap={2}
		>
			<BackButton onClick={onClick} />
			<Audio src={currentSong?.src} controls />
			{
				album.sections.map((section, i) =>
					<PlayList
						key={i}
						data={section}
						setCurrentSong={setCurrentSong}
					/>
				)
			}
		</Stack>
	)
}
