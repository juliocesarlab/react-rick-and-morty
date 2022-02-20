import styled from 'styled-components'

export const StyledPaginationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    display: flex;
    height: 2rem;
    color: #fff;
    align-items: center;
    cursor: pointer;
  }
`

export const PageButton = styled.button`
  border: 0;
  background-color: hsl(var(--default-green));
  color: #000;
  width: 4rem;
  height: 2rem;

  border-radius: 0.2rem;

  cursor: pointer;

  ${({active}) => active && `
    background-color: white;
  `}

  &:hover{
    filter: brightness(0.8)
  }
`