import React from 'react'
import { Audio } from '../atoms/Audio'
import { Box } from '../atoms/Box'
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

	return (
		<Stack
			width={width}
			margin='auto'
			gap={2}
		>
			<BackButton onClick={onClick} />
			<span>{currentSong?.name || 'No song selected'}</span>
			<Audio
				src={currentSong?.src}
				controls={true}
				autoPlay={true}
			/>
			<Box
				height={600}
				overflowY='scroll'
			>
				{
					album.sections.map((section, i) =>
						<PlayList
							key={i}
							data={section}
							setCurrentSong={setCurrentSong}
						/>
					)
				}
			</Box>
		</Stack>
	)
}
