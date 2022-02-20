import { PageButton, StyledPaginationWrapper } from './style'
import { usePagination, PaginationContext } from './PaginationContext'

export const Pagination = ({pageNumbers, children}) => {

  const { activePage, setActivePage, maxPageButtons, setMaxPageButtons} = usePagination(PaginationContext)
  console.log(activePage)
  const pageNumbersArr = Array.from({length: pageNumbers}, () => 0)

  function backPage() {
    if (activePage === 1) return
    setActivePage(activePage - 1)
  }

  function nextPage() {
    if (activePage === 42) return
    setActivePage(activePage + 1)
  }

  return(
    <StyledPaginationWrapper>
         <p  onClick={() => backPage()}>Back</p>
         {
           pageNumbersArr.map((arr, index) => (
            index === 0 || index > maxPageButtons
            ? '' 
            : index === activePage 
            ? <PageButton active onClick={() => setActivePage(index)} key={index}>{index}</PageButton>
            : <PageButton onClick={() => setActivePage(index)} key={index}>{index}</PageButton>
            ))
         }
         <p onClick={() => nextPage()}>Next</p>
         {children}
    </StyledPaginationWrapper>
  )
}
