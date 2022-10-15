import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	name: null,
	src: null,
	isPlaying: false,
}

const audioSlice = createSlice({
	name: 'audio',
	initialState: INITIAL_STATE,
	reducers: {
		setIsPlaying: (state, action) => {
			state.isPlaying = action.payload
		},
		setSong: (state, action) => {
			const {
				name,
				src,
			} = action.payload

			state.name = name
			state.src = src
			state.isPlaying = true
		},
		resetAudio: () => {
			return INITIAL_STATE
		},
	},
})

export const audioActions = audioSlice.actions

export const audioReducer = audioSlice.reducer

export const audioSelectors = {
	selectName: state => state.audio.name,
	selectSrc: state => state.audio.src,
	selectIsPlaying: state => state.audio.isPlaying,
}