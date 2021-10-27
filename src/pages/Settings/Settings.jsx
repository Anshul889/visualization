import React from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../../redux/theme/theme.action'

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
})

const actions = {
  setTheme,
}

const Settings = ({ setTheme, theme }) => {
  const changeTheme = (theme) => {
    setTheme(theme)
  }
  return (
    <div>
      {theme === 'dark' && <button onClick={() => changeTheme('light')}>Light</button>}
      {theme === 'light' && <button onClick={() => changeTheme('dark')}>Dark</button>}
      <div></div>
    </div>
  )
}

export default connect(mapStateToProps, actions)(Settings)
