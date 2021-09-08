import { combineReducers } from 'redux'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
  dataReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
