import React from 'react'
import Head from 'next/head'

import { Header } from '../components/atoms/Header'
import { Stack } from '../components/atoms/Stack'
import { CssBaseline } from '../components/atoms/CssBaseline'

export const AppWrapper = (props) => {
	const { children } = props

	return (
		<>
			<Head>
				<title>Wedding Banquet Playlist</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<CssBaseline />
			<Stack
				component='main'
				gap={2}
				padding={2}
			>
				<Header>
					Wedding Banquet
				</Header>
				{children}
			</Stack>
		</>
	)
}

export default function App(props) {
	const {
		Component,
		pageProps: { ...pageProps },
	} = props

	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	)
}
