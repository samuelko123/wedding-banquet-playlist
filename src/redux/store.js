import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit'

import { audioReducer } from './slices/audio'

const rootReducer = combineReducers({
	audio: audioReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})