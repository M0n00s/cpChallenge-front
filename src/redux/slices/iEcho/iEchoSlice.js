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
    },
    deleteInverText: (state, action) => {
      state.inverText = state.inverText.filter(text => text.id !== action.payload)
    }

  }
})

export const { startInverText, setInverText, deleteInverText } = iEchoSlice.actions
