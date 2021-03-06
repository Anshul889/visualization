import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/crown.svg'
import Home from '../../assets/home.svg'
import HomeLight from '../../assets/home-light.svg'
import User from '../../assets/user-circle.svg'
import UserLight from '../../assets/user-circle-light.svg'
import Heart from '../../assets/heart.svg'
import Heartlight from '../../assets/heart-light.svg'
import chart from '../../assets/chart-line.svg'
import chartlight from '../../assets/chart-line-light.svg'
import Slider from '../../assets/sliders.svg'
import SliderLight from '../../assets/sliders-light.svg'
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
            <StyledLink to='/explore'>
              <RightNavItem>Explore</RightNavItem>
            </StyledLink>
            <StyledLink to='/bookmarks'>
              <RightNavItem>Bookmarks</RightNavItem>
            </StyledLink>
            <StyledLink to='/settings'>
              <RightNavItem>Settings</RightNavItem>
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
        {this.props.theme === 'light' && (
          <BottomNav>
            <StyledLink exact={true} to='/'>
              <BottomNavItem>
                <BottomImage src={Home} />
                <BottomText>Home</BottomText>
              </BottomNavItem>
            </StyledLink>
            <StyledLink to='/explore'>
              <BottomNavItem>
                <BottomImage src={chart} />
                <BottomText>Explore</BottomText>
              </BottomNavItem>
            </StyledLink>
            <StyledLink to='/wishlist'>
              <BottomNavItem>
                <BottomImage src={Heart} />
                <BottomText>Saved</BottomText>
              </BottomNavItem>
            </StyledLink>
            <StyledLink to='/settings'>
              <BottomNavItem>
                <BottomImage src={Slider} />
                <BottomText>Settings</BottomText>
              </BottomNavItem>
            </StyledLink>
            {this.props.currentUser ? (
              <StyledLink opacity='1' to='/profile'>
                <BottomNavItem>
                  <BottomImage
                    round='50%'
                    src={this.props.currentUser.photoURL}
                  />
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
        )}
        {this.props.theme === 'dark' && (
          <BottomNav>
            <StyledLink exact={true} to='/'>
              <BottomNavItem>
                <BottomImage src={HomeLight} />
                <BottomText>Home</BottomText>
              </BottomNavItem>
            </StyledLink>
            <StyledLink to='/explore'>
              <BottomNavItem>
                <BottomImage src={chartlight} />
                <BottomText>Explore</BottomText>
              </BottomNavItem>
            </StyledLink>
            <StyledLink to='/wishlist'>
              <BottomNavItem>
                <BottomImage src={Heartlight} />
                <BottomText>Saved</BottomText>
              </BottomNavItem>
            </StyledLink>
            <StyledLink to='/settings'>
              <BottomNavItem>
                <BottomImage src={SliderLight} />
                <BottomText>Settings</BottomText>
              </BottomNavItem>
            </StyledLink>
            {this.props.currentUser ? (
              <StyledLink opacity='1' to='/profile'>
                <BottomNavItem>
                  <BottomImage
                    round='50%'
                    src={this.props.currentUser.photoURL}
                  />
                  <BottomText>Profile</BottomText>
                </BottomNavItem>
              </StyledLink>
            ) : (
              <StyledLink to='/signin'>
                <BottomNavItem>
                  <BottomImage src={UserLight} />
                  <BottomText>Login</BottomText>
                </BottomNavItem>
              </StyledLink>
            )}
          </BottomNav>
        )}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  theme: state.theme.theme,
})

export default connect(mapStateToProps)(Header)
