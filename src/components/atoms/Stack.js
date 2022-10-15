import React from 'react'
import { Stack as MuiStack } from '@mui/material'

export const Stack = (props) => {
	const {
		component,
		width,
		margin,
		gap,
		padding,
		flexDirection,
		justifyContent,
		alignItems,
		children,
	} = props

	return (
		<MuiStack
			component={component}
			flexDirection={flexDirection}
			width={width}
			margin={margin}
			padding={padding}
			gap={gap}
			justifyContent={justifyContent}
			alignItems={alignItems}
		>
			{children}
		</MuiStack>
	)
}