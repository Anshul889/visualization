import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
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
})

export default persistReducer(persistConfig, rootReducer)
