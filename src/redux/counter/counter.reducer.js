import { createReducer } from '../../util/reducerUtils'
import { ADD_NUMBER, SUBTRACT_NUMBER } from './counter.constants'

const initialState = 0

const addNumber = (state) => {
  return state + 1
}

const subtractNumber = (state) => {
  return state - 1
}

export default createReducer(initialState, {
  [ADD_NUMBER]: addNumber,
  [SUBTRACT_NUMBER]: subtractNumber,
})
