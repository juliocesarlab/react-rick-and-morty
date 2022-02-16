import styled from 'styled-components'

export const StyledPaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const PageButton = styled.button`
  border: 0;
  background-color: hsl(var(--default-green));
  color: #000;
  width: 4rem;
  height: 2rem;

  border-radius: 0.2rem;

  cursor: pointer;

  ${({active}) => active && `background-color: hsl(var(--saturated-green));`}

  &:hover{
    filter: brightness(0.8)
  }
`