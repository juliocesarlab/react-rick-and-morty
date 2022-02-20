import { useState, useEffect, useContext, createContext } from "react"
import { api } from "../../Services/api"

export const PaginationContext = createContext()

export const PaginationProvider = ({children}) => {
  const [activePage, setActivePage] = useState(1)
  const [maxPageButtons, setMaxPageButtons] = useState(5)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [minPageShow, setMinPageShow] = useState(1)
  const [maxPageShow, setMaxPageShow] = useState(5)

  useEffect(() => {
    (async() => {
      const response = await api.get(`https://rickandmortyapi.com/api/character`)
      const result = response.data
      const { pages } = result.info
      setNumberOfPages(pages)
    })()
    
  }, [])

  return(
    <PaginationContext.Provider 
      value={
        {activePage, setActivePage, 
          maxPageButtons, setMaxPageButtons, 
        numberOfPages, setNumberOfPages,
        minPageShow, setMinPageShow,
        maxPageShow, setMaxPageShow
        }
      }>
      {children}
    </PaginationContext.Provider>
  )
}

export const usePagination = () => useContext(PaginationContext)