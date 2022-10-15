import React from 'react'
import { List } from '../atoms/List'
import { Collapse } from '../atoms/Collapse'
import { ListItem } from '../atoms/ListItem'
import { IconButton } from '../atoms/IconButton'
import { PlayButton } from '../molecules/PlayButton'
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
import { PauseButton } from '../molecules/PauseButton'

export const PlayList = (props) => {
	const {
		data,
	} = props

	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = React.useState(true)
	const name = useSelector(audioSelectors.selectName)
	const isPlaying = useSelector(audioSelectors.selectIsPlaying)
	const toggle = () => setIsOpen(!isOpen)

	return (
		<>
			<List>
				<ListItem>
					<PlayButton />
					<ListItemText
						primary={data.name}
					/>
					<IconButton onClick={toggle}>
						{isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
					</IconButton>
				</ListItem>

				<Collapse isOpen={isOpen}>
					{
						data.songs.map((song, i) => {
							const isMe = (name === song.name)
							const color = isMe ? 'primary' : 'default'

							return (
								<ListItem key={i} indent={4}>
									{
										(isPlaying && isMe)
											?
											<PauseButton
												color={color}
												onClick={() => dispatch(audioActions.setIsPlaying(false))}
											/>
											:
											<PlayButton
												color={color}
												onClick={() =>
													dispatch(audioActions.setSong({
														name: song.name,
														src: song.src,
													}))
												}
											/>
									}
									<ListItemText
										primary={song.name}
									/>
								</ListItem>
							)
						})
					}
				</Collapse>
			</List>
		</>
	)
}