import React from 'react'
import { withRouter } from 'react-router'
import { Button } from '../../components/CustomButton/Button'
import { getAuth, signOut } from '@firebase/auth'


const Profile = ({ history}) => {
  const onSignOut = () => {
    const auth = getAuth()
    signOut(auth)
    history.push('/')
  }

  return (
    <div>
      <Button onClick={() => onSignOut()}>Logout</Button>
    </div>
  )
}

export default withRouter(Profile);
