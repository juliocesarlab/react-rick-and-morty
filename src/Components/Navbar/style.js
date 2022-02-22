import styled from "styled-components"

export const StyledNav = styled.nav`
 height: 6rem;
 background: hsl(var(--light-black));
 padding: 0 2rem;

 .wrapper {
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  
  a{
      color: hsl(var(--saturated-green));
      text-decoration: none;

      &:hover{
        filter: brightness(0.7)
      }
    }

  .logo-wrapper {
    height: 100%;
    max-height: 80px;
    display: flex;
    align-items: center;

    img {
      width: 10rem;
    }

  }
 }

`