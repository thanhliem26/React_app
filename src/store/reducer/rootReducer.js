import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import tableReducer from './tableReducer'
// import appReducer from './appReducer'
import reducerRegister from '../../common/helper/ReducerRegister'

const store = configureStore({
  reducer: {
    ...reducerRegister.reducers,
  },
})

reducerRegister.setChangeListener((reducers) => {
  console.log('store reducer')
  store.replaceReducer(
    combineReducers({
      ...reducers,
    }),
  )
})
export default store
