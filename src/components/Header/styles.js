import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Logoimg = styled.img``

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  transform: translateY(3px);
`

export const Nav = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  display: grid;
  height: 56px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const LeftNav = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-gap: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    grid-gap: 10px;
  }
`

export const RightNav = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: max-content max-content max-content max-content;
  grid-gap: 15px;
  align-content: center;
  font-size: 24px;
  padding-right: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const RightNavItem = styled.div``

export const BottomNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    height: 56px;
    ${({ theme }) => css`
      background-color: ${theme.colour.background};
      color: ${theme.colour.primary};
    `}
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`

export const BottomNavItem = styled.div`
  display: grid;
  height: 100%;
  justify-items: center;
`

export const BottomImage = styled.img`
  height: 25px;
  justify-self: center;
  border-radius: ${(props) => props.round || '0px'};
`
export const BottomText = styled.div`
  font-size: 12px;
  text-align: center;
`

export const activeClassName = 'nav-item-active'

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  ${({ theme }) => css`
    color: ${theme.colour.primary};
  `}
  text-decoration: none;
  &.${activeClassName} {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    opacity: ${(props) => props.opacity || '0.7'};
    &.${activeClassName} {
      opacity: 1;
    }
  }
`
