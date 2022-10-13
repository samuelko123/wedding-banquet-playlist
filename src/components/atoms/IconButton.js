import React from 'react'
import { IconButton as MuiIconButton } from '@mui/material'

export const IconButton = (props) => {
	const {
		onClick,
		color,
		children,
	} = props

	return (
		<MuiIconButton
			onClick={onClick}
			color={color}
		>
			{children}
		</MuiIconButton>
	)
}
