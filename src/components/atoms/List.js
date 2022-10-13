import React from 'react'
import { List as MuiList } from '@mui/material'

export const List = (props) => {
	const {
		children,
	} = props

	return (
		<MuiList>
			{children}
		</MuiList>
	)
}