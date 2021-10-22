import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/crown.svg'
import Home from '../../assets/home.svg'
import Cart from '../../assets/shopping-cart.svg'
import User from '../../assets/user-circle.svg'
import Heart from '../../assets/heart.svg'
import { connect } from 'react-redux'
import {
  BottomImage,
  BottomNav,
  BottomNavItem,
  BottomText,
  LeftNav,
  Logoimg,
  Nav,
  RightNav,
  RightNavItem,
  StyledLink,
  Title,
  Wrapper,
} from './styles'

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Nav>
          <LeftNav>
            <Link to='/'>
              <Logoimg src={Logo} />
            </Link>
            <Title>Crown Clothing</Title>
          </LeftNav>
          <RightNav>
            <StyledLink to='/shop'>
              <RightNavItem>Shop</RightNavItem>
            </StyledLink>
            <StyledLink to='/wishlist'>
              <RightNavItem>Wishlist</RightNavItem>
            </StyledLink>
            <StyledLink to='/cart'>
              <RightNavItem>Cart</RightNavItem>
            </StyledLink>
            {this.props.currentUser ? (
              <StyledLink to='/profile'>
                <RightNavItem>Profile</RightNavItem>
              </StyledLink>
            ) : (
              <StyledLink to='/signin'>
                <RightNavItem>Sign In</RightNavItem>
              </StyledLink>
            )}
          </RightNav>
        </Nav>
        <BottomNav>
          <StyledLink exact={true} to='/'>
            <BottomNavItem>
              <BottomImage src={Home} />
              <BottomText>Home</BottomText>
            </BottomNavItem>
          </StyledLink>
          <StyledLink to='/shop'>
            <BottomNavItem>
              <BottomImage src={Home} />
              <BottomText>Shop</BottomText>
            </BottomNavItem>
          </StyledLink>
          <StyledLink to='/wishlist'>
            <BottomNavItem>
              <BottomImage src={Heart} />
              <BottomText>Wishlist</BottomText>
            </BottomNavItem>
          </StyledLink>
          <StyledLink to='/cart'>
            <BottomNavItem>
              <BottomImage src={Cart} />
              <BottomText>Cart</BottomText>
            </BottomNavItem>
          </StyledLink>
          {this.props.currentUser ? (
            <StyledLink opacity='1' to='/profile'>
              <BottomNavItem>
                <BottomImage round='50%' src={this.props.currentUser.photoURL} />
                <BottomText>Profile</BottomText>
              </BottomNavItem>
            </StyledLink>
          ) : (
            <StyledLink to='/signin'>
              <BottomNavItem>
                <BottomImage src={User} />
                <BottomText>Login</BottomText>
              </BottomNavItem>
            </StyledLink>
          )}
        </BottomNav>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
