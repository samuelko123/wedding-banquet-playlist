import React from 'react'
import { Box as MuiBox } from '@mui/material'

export const Box = (props) => {
	const {
		width,
		margin,
		children,
	} = props

	return (
		<MuiBox
			width={width}
			margin={margin}
		>
			{children}
		</MuiBox>
	)
}