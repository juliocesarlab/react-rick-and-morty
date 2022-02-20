import styled from "styled-components";


export const AllCharactersHeader = styled.div`
  width: 100%;
  max-width: 1064px;
  margin: 4rem auto;
  padding: 0 2rem;
 

  .main-header {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 2.5rem;
    color: hsl(var(--saturated-green));
  }
`

export const SearchInput = styled.div`
  margin-top: 2rem;

  .search-input {
    border: 0;
    border-bottom: 1px solid #fff;
    background: none;
    outline: none;

    font-size: 1.2rem;
    color: #fff;
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