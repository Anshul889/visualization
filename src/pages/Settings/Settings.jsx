import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../../components/CustomButton/Button'
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
      {theme === 'dark' && <Button onClick={() => changeTheme('light')}>Light</Button>}
      {theme === 'light' && <Button onClick={() => changeTheme('dark')}>Dark</Button>}
      <div></div>
    </div>
  )
}

export default connect(mapStateToProps, actions)(Settings)
