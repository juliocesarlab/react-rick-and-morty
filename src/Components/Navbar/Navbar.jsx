import { StyledNav } from "./style"
import  logo  from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

export const Navbar = ({linkTitle, linkTo}) => {
  return (
    <StyledNav>
      <div className="wrapper" id="navbar">
        <div className="logo-wrapper">
          <img src={logo} alt="Rick and Morty" />
        </div>
        <Link to={linkTo}>{linkTitle}</Link>
      </div>
    </StyledNav>
  )
}
