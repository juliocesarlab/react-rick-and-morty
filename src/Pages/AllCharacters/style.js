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

  @media(max-width: 786px) {
    .main-header{
      flex-direction: column;
      gap: 1rem;
    }
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
    gap: 1.2rem;
`

export const GoTop = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  background: hsl(var(--saturated-green));
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  position: fixed;

  display: grid;
  place-items: center;

  cursor: pointer;

  &:hover {
      filter: brightness(0.8);
    }

  a {
    color: #000;

   
  }
`
