import { SET_THEME } from "./theme.constants"

const INITIAL_STATE = {
  theme: 'light',
}

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}

export default themeReducer