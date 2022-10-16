import React from 'react'
import axios from 'axios'

export const useAxios = (props) => {
	const {
		url,
		method,
		headers,
		data,
	} = props

	const [response, setResponse] = React.useState(null)
	const [error, setError] = React.useState('')
	const [loading, setloading] = React.useState(true)

	React.useEffect(() => {
		const request = {
			url,
			method,
			headers,
			data,
		}

		const fetchData = () => {
			axios.request(request)
				.then((res) => {
					setResponse(res.data)
				})
				.catch((err) => {
					setError(err.response?.data?.errors || err.message)
				})
				.finally(() => {
					setloading(false)
				})
		}

		fetchData()
	}, [url, method, headers, data])

	return {
		res: response,
		err: error,
		loading,
	}
}