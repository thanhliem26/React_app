import { createSlice } from '@reduxjs/toolkit'
import reducerRegister from '../../common/helper/ReducerRegister'

const appReducer = createSlice({
  name: 'appReducer',
  initialState: {
    language: 'vi',
    dark: false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload
    },
    changeDark: (state, action) => {
      state.dark = !state.dark
    },
  },
})

const { actions, reducer } = appReducer
export const { changeDark, changeLanguage } = actions

// reducerRegister.register(appReducer.name, appReducer.reducer)
export default reducer
