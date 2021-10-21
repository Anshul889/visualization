import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/home/HomePage'
import Profile from './pages/Profile/Profile'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    )
  }
}

const actions = {
  setCurrentUser,
}

export default connect(null, actions)(App)
