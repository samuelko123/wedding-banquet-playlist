import React from 'react'
import { Collapse as MuiCollapse } from '@mui/material'

export const Collapse = (props) => {
	const {
		isOpen,
		children,
	} = props

	return (
		<MuiCollapse
			in={isOpen}
			orientation='vertical'
		>
			{children}
		</MuiCollapse>
	)
}