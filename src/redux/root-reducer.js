import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterReducer from './counter/counter.reducer'
import productReducer from './product/product.reducer'
import themeReducer from './theme/theme.reducer'

import userReducer from './user/user.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'wishlist'],
}

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  products: productReducer,
  counter : counterReducer
})

export default persistReducer(persistConfig, rootReducer)
