import { PageButton, StyledPaginationWrapper } from "./style";

import { useState, useEffect } from "react";

import { usePagination, PaginationContext } from "./PaginationContext";

export const Pagination = ({ pageNumbers, children }) => {
  const {
    activePage,
    setActivePage,
    numberOfPages,
    minPageShow,
    setMinPageShow,
    maxPageShow,
    setMaxPageShow,
  } = usePagination(PaginationContext);


  //incremental arr
  const pages = Array.from({ length: numberOfPages }, (v, k) => k + 1);
  function backPage() {
    if (activePage !== 1) {
     
      setActivePage(activePage - 1);
      
      if (numberOfPages <= 6 || minPageShow - 1 === 0) return;
      setMinPageShow(minPageShow - 1);
      setMaxPageShow(maxPageShow - 1);
    }
  }

  function nextPage() {
    if (activePage === 42 || activePage === numberOfPages) return;
    setActivePage(activePage + 1);
    if (numberOfPages <= 6) return;
    setMaxPageShow(maxPageShow + 1);
    setMinPageShow(minPageShow + 1);
  }

  return (
    <StyledPaginationWrapper>
      <p onClick={() => backPage()}>Back</p>
      {pages.map((index) =>
        index <= maxPageShow && index >= minPageShow ? (
          index === activePage ? (
            <PageButton active onClick={() => setActivePage(index)} key={index}>
              {index}
            </PageButton>
          ) : (
            <PageButton onClick={() => setActivePage(index)} key={index}>
              {index}
            </PageButton>
          )
        ) : null
      )}
      <p onClick={() => nextPage()}>Next</p>
    </StyledPaginationWrapper>
  );
};
