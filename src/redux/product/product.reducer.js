import { createReducer } from '../../util/reducerUtils'
import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS } from './product.constants'

const initialState = []

const addProduct = (state, payload) => {
  return [...state, payload]
}

const deleteProduct = (state, payload) => {
  return [...state.filter(x => x.id !== payload.id)]
}

const fetchProducts = (state, payload) => {
  return payload
}

export default createReducer(initialState, {
  [ADD_PRODUCT]: addProduct,
  [DELETE_PRODUCT]: deleteProduct,
  [FETCH_PRODUCTS]: fetchProducts,
})
