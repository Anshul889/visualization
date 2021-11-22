import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/Header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Explore from './pages/Explore/Explore'
import HomePage from './pages/home/HomePage'
import Profile from './pages/Profile/Profile'
import Settings from './pages/Settings/Settings'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { fetchProducts } from './redux/product/product.action'
import { setCurrentUser } from './redux/user/user.action'
import GlobalStyle from './styles/globalstyles'

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
})
const actions = {
  setCurrentUser,
  fetchProducts,
}

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser, fetchProducts } = this.props

    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        await createUserProfileDocument(userAuth)
      }
      setCurrentUser(userAuth)
    })
    fetchProducts()
  }
  render() {
    const { theme } = this.props
    let selectedTheme
    if (theme === 'light') {
      selectedTheme = {
        colour: {
          color: '#29304D',
          secondary: '#2573D5',
          background: '#FFFFFF',
          backgroundSecondary: '#F7F9FC',
          link: '#9AB87A',
          border: '1px solid lightgray'
        },
      }
    } else {
      selectedTheme = {
        colour: {
          color: '#FFFFFF',
          secondary: '#444B6E',
          background: '#29304D',
          backgroundSecondary: '#2573D5',
          link: '#9AB87A',
          border: '1px solid #d3d3d382'
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
            <Route path='/explore' component={Explore} />
          </Switch>
        </div>
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps, actions)(App)
