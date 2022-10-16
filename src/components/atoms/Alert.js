import React from 'react'
import { Alert as MuiAlert } from '@mui/material'

export const Alert = (props) => {
	const {
		severity,
		children,
	} = props

	return (
		<MuiAlert
			severity={severity}
		>
			{typeof children === 'object' ? JSON.stringify(children) : children}
		</MuiAlert>
	)
}
