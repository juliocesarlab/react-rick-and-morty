import styled from "styled-components";

export const AllCharactersHeader = styled.div`
  width: 100%;
  max-width: 1064px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;
    color: hsl(var(--saturated-green));
  }
`

export const AllCharactersContainer = styled.div`
    width: 100%;
    max-width: 1064px;
    margin: 4rem auto;
    padding: 0 2rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`