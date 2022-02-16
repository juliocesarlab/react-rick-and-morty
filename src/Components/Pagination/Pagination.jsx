import { useState } from 'react'
import { PageButton, StyledPaginationWrapper } from './style'

export const Pagination = ({pageNumbers}) => {
  const [activePage, setActivePage] = useState(1)
  const pageNumbersArr = Array.from({length: pageNumbers}, () => 0)
  return(
    <StyledPaginationWrapper>
         {
           pageNumbersArr.map((arr, index) => (
            index === 0 
            ? '' 
            : index === activePage 
            ? <PageButton active onClick={() => setActivePage(index)} key={index}>{index}</PageButton>
            : <PageButton onClick={() => setActivePage(index)} key={index}>{index}</PageButton>
            ))
         }
    </StyledPaginationWrapper>
  )
}
