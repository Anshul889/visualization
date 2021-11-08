import { createGlobalStyle, css } from 'styled-components'

import PoppinsMedium from './fonts/Poppins-Medium.ttf'
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins Medium';
        src: url(${PoppinsMedium}) format('truetype');
        font-weight: 400;
    }
    @font-face {
      font-family:'Poppins SemiBold';
      src: url(${PoppinsSemiBold}) format('truetype');
      font-weight: 600;
    }
    body{
      font-family: 'Poppins Medium';
      font-size: 16px;
      ${({ theme }) => css`
        color: ${theme.colour.color};
        background-color: ${theme.colour.background} ;
      `}
    }
    h1{
      font-family: 'Poppins SemiBold';
      font-size: 27px;
    }
    p{
      font-family: 'Poppins Medium';
      font-size: 17px;
    }
`

export default GlobalStyle
