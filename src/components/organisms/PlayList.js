import React from 'react'
import { List } from '../atoms/List'
import { Collapse } from '../atoms/Collapse'
import { ListItem } from '../atoms/ListItem'
import { IconButton } from '../atoms/IconButton'
import { ListItemText } from '../atoms/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import {
	useDispatch,
	useSelector,
} from 'react-redux'
import {
	audioActions,
	audioSelectors,
} from '../../redux/slices/audio'
import { PlayPauseButton } from './PlayPauseButton'

export const PlayList = (props) => {
	const {
		data,
	} = props

	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = React.useState(true)
	const name = useSelector(audioSelectors.selectName)
	const toBePlayed = useSelector(audioSelectors.selectToBePlayed)
	const toggle = () => setIsOpen(!isOpen)

	return (
		<>
			<List>
				<ListItem>
					<PlayPauseButton
						active={data.name === toBePlayed.name}
						onPlay={() => {
							dispatch(audioActions.setToBePlayed({
								name: data.name,
								songs: data.songs,
							}))
						}}
					/>
					<ListItemText
						primary={data.name}
					/>
					<IconButton onClick={toggle}>
						{isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
					</IconButton>
				</ListItem>

				<Collapse isOpen={isOpen}>
					{
						data.songs.items
							.sort((a, b) => {
								if (b.code > a.code) { return -1 }
								if (a.code > b.code) { return 1 }
								return 0
							})
							.map((song, i) =>
								<ListItem key={i} indent={4}>
									{
										<PlayPauseButton
											active={name === song.name}
											onPlay={() => {
												dispatch(audioActions.setSong({
													name: song.name,
													src: song.audio.url,
												}))
											}}
										/>
									}
									<ListItemText
										primary={song.name}
									/>
								</ListItem>
							)
					}
				</Collapse>
			</List>
		</>
	)
}