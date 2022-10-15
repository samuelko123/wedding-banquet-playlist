import React from 'react'
import { useSelector } from 'react-redux'
import { audioSelectors } from '../../redux/slices/audio'
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

	const name = useSelector(audioSelectors.selectName)
	const src = useSelector(audioSelectors.selectSrc)
	const isPlaying = useSelector(audioSelectors.selectIsPlaying)

	return (
		<Stack
			width={width}
			margin='auto'
			gap={2}
		>
			<BackButton onClick={onClick} />
			<span>{name || 'No song selected'}</span>
			<Audio
				src={src}
				pause
				controls={true}
				autoPlay={true}
				isPlaying={isPlaying}
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
							play={() => {}}
							playing={name}
						/>
					)
				}
			</Box>
		</Stack>
	)
}
