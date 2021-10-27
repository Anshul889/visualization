import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/Header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import HomePage from './pages/home/HomePage'
import Profile from './pages/Profile/Profile'
import Settings from './pages/Settings/Settings'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { setCurrentUser } from './redux/user/user.action'
import GlobalStyle from './styles/globalstyles'

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
})
const actions = {
  setCurrentUser,
}

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props

    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        await createUserProfileDocument(userAuth)
      }
      setCurrentUser(userAuth)
    })
  }
  render() {
    const { theme } = this.props
    let selectedTheme
    if (theme === 'light') {
      selectedTheme = {
        colour: {
          primary: '#000000',
          secondary: '#444B6E',
          background: '#FFFFFF',
          link: '#9AB87A',
        },
      }
    } else {
      selectedTheme = {
        colour: {
          primary: '#FFFFFF',
          secondary: '#444B6E',
          background: '#000000',
          link: '#9AB87A',
        },
      }
    }
    return (
      <ThemeProvider theme={selectedTheme}>
        <div className='App'>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/settings' component={Settings} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps, actions)(App)
