import { configureStore } from '@reduxjs/toolkit'
import reducer from '~/features/Photos/PhotoSlice'

const rootReducer = {
  photos: reducer,
}

export const store = configureStore({
  reducer: rootReducer,
})