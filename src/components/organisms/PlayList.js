import React from 'react'
import { List } from '../atoms/List'
import { Collapse } from '../atoms/Collapse'
import { ListItem } from '../atoms/ListItem'
import { IconButton } from '../atoms/IconButton'
import { PlayButton } from '../molecules/PlayButton'
import { ListItemText } from '../atoms/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export const PlayList = (props) => {
	const {
		data,
		setCurrentSong,
	} = props

	const [isOpen, setIsOpen] = React.useState(true)
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
						data.songs.map((song, i) =>
							<ListItem key={i} indent={4}>
								<PlayButton onClick={() => setCurrentSong(song)} />
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