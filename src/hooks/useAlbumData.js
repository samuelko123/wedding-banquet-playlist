import React from 'react'
import { useAxios } from './useAxios'

export const useAlbumData = () => {
	const url = 'https://graphql.contentful.com/content/v1/spaces/f07kqlf6gthj/environments/master'
	const method = 'POST'

	const token = 'HoV6WpkZG-NOPPbb_C-_LIEjVqZ3tW9-dCr_DMjt9kk'
	const headers = React.useMemo(() => {
		return {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
		}
	}, [token])

	const data = React.useMemo(() => {
		return {
			query: `
query {
	chapters: chapterCollection (limit: 5) {
		items{
				...on Chapter {
				code
				name
				songs: songsCollection (limit: 50) {
					items{
						...on Song {
							name
							code
							audio {
								url
							}
						}
					}
				}
			}
		}
	}
}
			`,
		}
	}, [])

	return useAxios({
		url,
		method,
		headers,
		data,
	})
}