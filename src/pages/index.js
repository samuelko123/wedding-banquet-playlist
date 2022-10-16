import React from 'react'
import { Content } from '../components/templates/Content'
import { Cover } from '../components/templates/Cover'
import { useAlbumData } from '../hooks/useAlbumData'

export default function Page() {
	const [showContent, setShowContent] = React.useState(false)

	const {
		res,
	} = useAlbumData()

	if (!showContent) {
		return (
			<Cover
				width={600}
				onClick={() => setShowContent(true)}
			/>
		)
	}

	if (showContent && !!res) {
		return (
			<Content
				album={res.data}
				width={600}
				onClickBackButton={() => setShowContent(false)}
			/>
		)
	}
}
