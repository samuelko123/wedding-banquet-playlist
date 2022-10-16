import React from 'react'
import {
	useDispatch,
	useSelector,
} from 'react-redux'
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
import { PlayList } from '../organisms/PlayList'
import { PlayPauseButton } from '../organisms/PlayPauseButton'

export const Content = (props) => {
	const {
		album,
		width,
		onClickBackButton,
	} = props

	const dispatch = useDispatch()
	const name = useSelector(audioSelectors.selectName)
	const toBePlayed = useSelector(audioSelectors.selectToBePlayed)

	const allSongs = album.chapters.items
		.map(chapter => chapter.songs.items.flat())
		.flat()

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
				maxHeight={600}
				overflowY='auto'
			>
				<List>
					<ListItem>
						<PlayPauseButton
							active={'ALL' === toBePlayed.name}
							onPlay={() => dispatch(audioActions.setToBePlayed({
								name: 'ALL',
								songs: [].concat(allSongs),
							}))}
						/>
						<ListItemText
							primary='Play all'
						/>
					</ListItem>
				</List>
				{
					album.chapters.items.map((chapter, i) =>
						<PlayList
							key={i}
							data={chapter}
						/>
					)
				}
			</Box>
		</Stack>
	)
}
