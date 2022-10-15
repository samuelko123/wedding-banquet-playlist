export const album = {
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
				{
					name: 'Song B6',
					src: '/B6.mp3',
				},
				{
					name: 'Song B7',
					src: '/B7.mp3',
				},
			],
		},
		{
			songs: [
				{
					name: 'Song C1',
					src: '/C1.mp3',
				},
				{
					name: 'Song C2',
					src: '/C2.mp3',
				},
				{
					name: 'Song C3',
					src: '/C3.mp3',
				},
				{
					name: 'Song C4',
					src: '/C4.mp3',
				},
				{
					name: 'Song C5',
					src: '/C5.mp3',
				},
			],
		},
		{
			name: 'Section B',
			songs: [
				{
					name: 'Song D1',
					src: '/D1.mp3',
				},
				{
					name: 'Song D2',
					src: '/D2.mp3',
				},
				{
					name: 'Song D3',
					src: '/D3.mp3',
				},
				{
					name: 'Song D4',
					src: '/D4.mp3',
				},
				{
					name: 'Song D5',
					src: '/D5.mp3',
				},
				{
					name: 'Song D6',
					src: '/D6.mp3',
				},
			],
		},
	],
}

export const allSongs = album.sections.map((section) => {
	return section.songs
}).flat()