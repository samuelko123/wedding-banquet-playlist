import React from 'react'
import { Button as MuiButton } from '@mui/material'

export const Button = (props) => {
	const {
		onClick,
		startIcon,
		children,
	} = props

	return (
		<MuiButton
			onClick={onClick}
			startIcon={startIcon}
			disableRipple={true}
			variant='outlined'
			sx={{ alignSelf: 'flex-start' }}
		>
			{children}
		</MuiButton>
	)
}