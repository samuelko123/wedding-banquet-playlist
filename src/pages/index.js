import React from 'react'
import { Content } from '../components/templates/Content'
import { Cover } from '../components/templates/Cover'

export default function Page() {
	const [showContent, setShowContent] = React.useState(false)

	const album = {
		sections: [
			{
				name: 'Section A',
				songs: [
					{
						name: 'Song A1',
						src: '/A1.mp3',
					},
					{
						name: 'Song A2',
						src: '/A2.mp3',
					},
					{
						name: 'Song A3',
						src: '/A3.mp3',
					},
					{
						name: 'Song A4',
						src: '/A4.mp3',
					},
					{
						name: 'Song A5',
						src: '/A5.mp3',
					},
				],
			},
			{
				name: 'Section B',
				songs: [
					{
						name: 'Song B1',
						src: '/B1.mp3',
					},
					{
						name: 'Song B2',
						src: '/B2.mp3',
					},
					{
						name: 'Song B3',
						src: '/B3.mp3',
					},
					{
						name: 'Song B4',
						src: '/B4.mp3',
					},
					{
						name: 'Song B5',
						src: '/B5.mp3',
					},
				],
			},
		],
	}

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
				onClick={() => setShowContent(false)}
			/>
		)
	}
}
