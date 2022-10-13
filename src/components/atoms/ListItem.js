import React from 'react'
import { ListItem as MuiListItem } from '@mui/material'

export const ListItem = (props) => {
	const {
		indent,
		children,
	} = props

	return (
		<MuiListItem sx={{ pl: indent }}>
			{children}
		</MuiListItem>
	)
}