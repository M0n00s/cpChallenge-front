import { configureStore } from '@reduxjs/toolkit'
import { iEchoSlice } from '../slices/iEcho/iEchoSlice'

export const store = configureStore({
  reducer: {
    inverText: iEchoSlice.reducer
  }
})
