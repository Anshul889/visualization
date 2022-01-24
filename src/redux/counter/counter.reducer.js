import { createReducer } from '../../util/reducerUtils'
import { ADD_NUMBER, GET_COUNTER, RESET_COUNTER, SUBTRACT_NUMBER } from './counter.constants'

const initialState = 0

const getNumber = (state, payload) => {
  return state = payload
}

const addNumber = (state) => {
  return state + 1
}

const subtractNumber = (state) => {
  return state - 1
}

const resetCounter = (state) => {
  return state = 0
}

export default createReducer(initialState, {
  [GET_COUNTER]: getNumber,
  [ADD_NUMBER]: addNumber,
  [SUBTRACT_NUMBER]: subtractNumber,
  [RESET_COUNTER]: resetCounter
})
