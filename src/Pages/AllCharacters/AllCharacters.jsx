import {
  AllCharactersHeader,
  AllCharactersContainer,
  SearchInput,
  GoTop
} from "./style.js";

import arrowUp from '../../Assets/arrowUp.jpg'

import { Card } from "../../Components/Card/Card";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Pagination } from "../../Components/Pagination/Pagination";
import { Loading } from "../../Components/Loading/Loading"
import {
  PaginationContext,
  usePagination,
} from "../../Components/Pagination/PaginationContext";


import { useState, useEffect } from "react";

import { api } from "../../Services/api";

export const AllCharacters = () => {
  const [content, setContent] = useState();
  const [search, setSearch] = useState("");
  const {
    activePage,
    setActivePage,
    setNumberOfPages,
    setMinPageShow,
    setMaxPageShow,
  } = usePagination(PaginationContext);

  function handleSearch(e) {
    setSearch(e.target.value);
    setActivePage(1);
    setMinPageShow(1);
    setMaxPageShow(6);
  }

  useEffect(() => {
    async function getData() {
      if (search) {
        const response = await api.get(
          `character/?page=${activePage}&name=${search.toLowerCase()}`
        );
        const result = await response.data.results;
        const pages = await response.data.info.pages;
        setContent(result);
        setNumberOfPages(pages);
      } else {
        const response = await api.get(`character/?page=${activePage}`);
        const result = await response.data.results;
        const pages = await response.data.info.pages;
        setContent(result);
        setNumberOfPages(pages);
      }
    }
    getData();
  }, [activePage, search]);

  return (
    <>
      <Navbar linkTitle="Home" linkTo="/" />
      <AllCharactersHeader>
        <div className="main-header" id="main-header">
          <h1>All Characters</h1>
          <Pagination pageNumbers={42} />
        </div>
        <SearchInput>
          <input
            type="text"
            className="search-input"
            placeholder="Search for a character"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
        </SearchInput>
      </AllCharactersHeader>

      <AllCharactersContainer>
        {!content && <Loading/>}
        {content ? (
          content.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                status={card.status}
                species={card.species}
                image={card.image}
                location={card.location.name}
              />
            );
          })
        ) : (
          <h1>Carregando</h1>
        )}
      </AllCharactersContainer>
      <GoTop><a href="#navbar"><img src={arrowUp} alt="Up" width="50px"/></a></GoTop>
      
    </>
  );
};
