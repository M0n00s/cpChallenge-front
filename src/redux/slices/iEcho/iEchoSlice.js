import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  inverText: []
}

export const iEchoSlice = createSlice({
  name: 'iEcho',
  initialState,
  reducers: {
    startInverText: (state) => {
      state.isLoading = true
    },

    setInverText: (state, action) => {
      state.isLoading = false
      state.inverText = [action.payload, ...state.inverText]
    }

  }
})

export const { startInverText, setInverText } = iEchoSlice.actions
