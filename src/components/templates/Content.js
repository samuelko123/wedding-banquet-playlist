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
		onClickBackButton,
	} = props

	const name = useSelector(audioSelectors.selectName)

	return (
		<Stack
			width={width}
			margin='auto'
			gap={2}
		>
			<BackButton onClick={onClickBackButton} />
			<span>{name || 'No song selected'}</span>
			<Audio />
			<Box
				height={600}
				overflowY='scroll'
			>
				{
					album.sections.map((section, i) =>
						<PlayList
							key={i}
							data={section}
						/>
					)
				}
			</Box>
		</Stack>
	)
}
