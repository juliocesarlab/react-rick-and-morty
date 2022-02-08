import { StyledNav } from "./style"
import  logo  from '../../Assets/logo.png'

export const Navbar = () => {
  return (
    <StyledNav>
      <div className="wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="Rick and Morty" />
        </div>
        <a href="#">All Characters</a>
      </div>
    </StyledNav>
  )
}
