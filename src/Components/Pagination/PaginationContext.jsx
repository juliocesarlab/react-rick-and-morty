import { useState, useContext, createContext } from "react"

export const PaginationContext = createContext()

export const PaginationProvider = ({children}) => {
  const [activePage, setActivePage] = useState(1)
  const [maxPageButtons, setMaxPageButtons] = useState(5)

  return(
    <PaginationContext.Provider value={{activePage, setActivePage, maxPageButtons, setMaxPageButtons}}>
      {children}
    </PaginationContext.Provider>
  )
}

export const usePagination = () => useContext(PaginationContext)