import React from 'react'
import { Content } from '../components/templates/Content'
import { Cover } from '../components/templates/Cover'
import { album } from '../data/album'

export default function Page() {
	const [showContent, setShowContent] = React.useState(false)

	if (!showContent) {
		return (
			<Cover
				width={600}
				onClick={() => setShowContent(true)}
			/>
		)
	}

	if (showContent) {
		return (
			<Content
				album={album}
				width={600}
				onClickBackButton={() => setShowContent(false)}
			/>
		)
	}
}
