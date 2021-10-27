import { SET_THEME } from './theme.constants'

export const setTheme = (theme) => (dispatch) => {
  dispatch({
    type: SET_THEME,
    payload: theme,
  })
}
