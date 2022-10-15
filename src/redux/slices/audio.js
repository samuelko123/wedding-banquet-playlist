import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	name: null,
	src: null,
	isPlaying: false,
	toBePlayed: {
		name: null,
		songs: [],
	},
}

const reset = () => {
	return INITIAL_STATE
}

const playNext = (state) => {
	if (state.toBePlayed.songs.length > 0) {
		const song = state.toBePlayed.songs.shift()
		state.name = song.name
		state.src = song.src
		state.isPlaying = true
	} else {
		return reset()
	}
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

			state.toBePlayed = {
				name: name,
				songs: [{
					name: name,
					src: src,
				}],
			}

			playNext(state)
		},
		setToBePlayed: (state, action) => {
			const {
				name,
				songs,
			} = action.payload

			state.toBePlayed = {
				name: name,
				songs: [].concat(songs),
			}

			playNext(state)
		},
		playNext: playNext,
		reset: reset,
	},
})

export const audioActions = audioSlice.actions

export const audioReducer = audioSlice.reducer

export const audioSelectors = {
	selectName: state => state.audio.name,
	selectSrc: state => state.audio.src,
	selectIsPlaying: state => state.audio.isPlaying,
	selectToBePlayed: state => state.audio.toBePlayed,
}