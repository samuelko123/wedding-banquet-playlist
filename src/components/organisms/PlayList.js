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
								songs: data.songs.items,
							}))
						}}
					/>
					<ListItemText
						primary={`${data.code}. ${data.name}`}
					/>
					<IconButton onClick={toggle}>
						{isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
					</IconButton>
				</ListItem>

				<Collapse isOpen={isOpen}>
					{
						data.songs.items.map((song, i) =>
							<ListItem key={i} indent={4}>
								{
									<PlayPauseButton
										active={name === song.name}
										onPlay={() => {
											dispatch(audioActions.setSong({
												name: song.name,
												url: song.audio.url,
											}))
										}}
									/>
								}
								<ListItemText
									primary={`${song.code}. ${song.name}`}
								/>
							</ListItem>
						)
					}
				</Collapse>
			</List>
		</>
	)
}