import React from 'react'
import {
	useDispatch,
	useSelector,
} from 'react-redux'
import { allSongs } from '../../data/album'
import {
	audioActions,
	audioSelectors,
} from '../../redux/slices/audio'
import { Audio } from '../atoms/Audio'
import { Box } from '../atoms/Box'
import { Button } from '../atoms/Button'
import { List } from '../atoms/List'
import { ListItem } from '../atoms/ListItem'
import { ListItemText } from '../atoms/ListItemText'
import { Stack } from '../atoms/Stack'
import { BackButton } from '../molecules/BackButton'
import { PauseButton } from '../molecules/PauseButton'
import { PlayButton } from '../molecules/PlayButton'
import { PlayList } from '../organisms/PlayList'

export const Content = (props) => {
	const {
		album,
		width,
		onClickBackButton,
	} = props

	const dispatch = useDispatch()
	const name = useSelector(audioSelectors.selectName)
	const isPlaying = useSelector(audioSelectors.selectIsPlaying)
	const toBePlayed = useSelector(audioSelectors.selectToBePlayed)

	return (
		<Stack
			width={width}
			margin='auto'
			gap={2}
		>
			<BackButton onClick={onClickBackButton} />
			<Stack
				width='100%'
				flexDirection='row'
				justifyContent='flex-start'
				alignItems='center'
				gap={2}
			>
				<span>{name || 'No song selected'}</span>
				<Button onClick={() => dispatch(audioActions.reset())}>Reset</Button>
			</Stack>
			<Audio />
			<Box
				height={600}
				overflowY='scroll'
			>
				<List>
					<ListItem>
						{
							(isPlaying && 'ALL' === toBePlayed.name)
								?
								<PauseButton
									color={'ALL' === toBePlayed.name ? 'primary' : 'default'}
									onClick={() => dispatch(audioActions.setIsPlaying(false))}
								/>
								:
								<PlayButton
									color={'ALL' === toBePlayed.name ? 'primary' : 'default'}
									onClick={() => dispatch(audioActions.setToBePlayed({
										name: 'ALL',
										songs: [].concat(allSongs),
									}))}
								/>
						}
						<ListItemText
							primary='Play all'
						/>
					</ListItem>
				</List>
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
