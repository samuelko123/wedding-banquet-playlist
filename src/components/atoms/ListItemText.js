import React from 'react'
import { ListItemText as MuiListItemText } from '@mui/material'

export const ListItemText = (props) => {
	const {
		primary,
		secondary,
	} = props

	return (
		<MuiListItemText
			primary={primary}
			secondary={secondary}
		/>
	)
}