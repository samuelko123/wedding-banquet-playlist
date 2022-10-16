import React from 'react'
import { useAxios } from './useAxios'
import compress from 'graphql-query-compress'

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

	const body = React.useMemo(() => {
		return {
			query: compress(`
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
			`),
		}
	}, [])

	const {
		res,
		err,
		loading,
	} = useAxios({
		url,
		method,
		headers,
		data: body,
	})

	if (!!res) {
		res.data.chapters.items.sort(sortItems)
		res.data.chapters.items.map(chapter => {
			chapter.songs.items.sort(sortItems)
			return chapter
		})
	}

	return {
		res,
		err,
		loading,
	}
}

const sortItems = (a, b) => {
	if (b.code > a.code) { return -1 }
	if (a.code > b.code) { return 1 }
	return 0
}