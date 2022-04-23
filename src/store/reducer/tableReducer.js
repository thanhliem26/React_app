import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import reducerRegister from '../../common/helper/ReducerRegister'

export const fetchDataCovid = createAsyncThunk(
  'tableReducer/fetchDataCovid',

  async () => {
    const priorDate = moment().subtract(30, 'days')
    const res = await fetch(
      `https://api.covid19api.com/live/country/vietnam/status/confirmed/date/${priorDate.toISOString()}`,
    ).then((data) => data.json())
    return res
  },
)

const tableReducer = createSlice({
  name: 'tableReducer',
  initialState: {
    data: {},
    ids: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    editData: (state, action) => {
      state.data[action.payload.id] = {
        ...state.data[action.payload.type.id],
        Date: action.payload.type.date,
        Confirmed: action.payload.type.confirm,
        Active: action.payload.type.active,
        Deaths: action.payload.type.Death,
        Recovered: action.payload.type.Recovere,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataCovid.fulfilled, (state, action) => {
      const object = action.payload.reduce((prev, current) => {
        prev[current.ID] = current
        return prev
      }, {})
      state.data = object
      state.ids = Object.keys(object)
    })
  },
})

const { actions, reducer } = tableReducer
export const { setData, editData } = actions

reducerRegister.register(tableReducer.name, tableReducer.reducer)
// export default reducer
