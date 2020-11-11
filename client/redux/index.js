import { combineReducers } from 'redux'
import pantsReducer from './pants'
import shirtReducer from './shirts'



const appReducer = combineReducers({
  shirtReducer, pantsReducer
})

export default appReducer