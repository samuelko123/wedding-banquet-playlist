import React from 'react'
import { Typography } from '@mui/material'

export const Header = (props) => {
	const {
		children,
	} = props

	return (
		<Typography
			component='h4'
			variant='h4'
			sx={{
				textAlign: 'center',
				fontWeight: 'bold',
			}}
		>
			{children}
		</Typography>
	)
}
