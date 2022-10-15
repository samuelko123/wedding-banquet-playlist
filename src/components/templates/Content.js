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
import { Stack } from '../atoms/Stack'
import { BackButton } from '../molecules/BackButton'
import { PlayList } from '../organisms/PlayList'

export const Content = (props) => {
	const {
		album,
		width,
		onClickBackButton,
	} = props

	const dispatch = useDispatch()
	const name = useSelector(audioSelectors.selectName)

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
