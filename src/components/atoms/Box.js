import React from 'react'
import { Box as MuiBox } from '@mui/material'

export const Box = (props) => {
	const {
		width,
		height,
		margin,
		overflowY,
		children,
	} = props

	return (
		<MuiBox
			width={width}
			height={height}
			margin={margin}
			sx={{ overflowY: overflowY }}
		>
			{children}
		</MuiBox>
	)
}