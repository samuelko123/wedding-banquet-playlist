import React from 'react'
import { Alert } from '../components/atoms/Alert'
import { Spinner } from '../components/atoms/Spinner'
import { Content } from '../components/templates/Content'
import { Cover } from '../components/templates/Cover'
import { useAlbumData } from '../hooks/useAlbumData'

export default function Page() {
	const [showContent, setShowContent] = React.useState(false)

	const {
		res,
		err,
		loading,
	} = useAlbumData()

	if (!showContent) {
		return (
			<Cover
				width={600}
				onClick={() => setShowContent(true)}
			/>
		)
	}

	if (showContent) {
		if (!!err) {
			return (
				<Alert severity='error'>
					{err}
				</Alert>
			)
		}

		if (!!loading) {
			return (
				<Spinner />
			)
		}

		if (!!res) {
			return (
				<Content
					album={res.data}
					width={600}
					onClickBackButton={() => setShowContent(false)}
				/>
			)
		}
	}
}
