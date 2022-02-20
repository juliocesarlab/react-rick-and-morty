import { Card } from "../../Components/Card/Card"
import {AllCharactersHeader, AllCharactersContainer} from './style.js'
import {Navbar} from "../../Components/Navbar/Navbar"
import {useState, useEffect} from 'react'
import {api} from "../../Services/api"
import {Pagination} from "../../Components/Pagination/Pagination"
import { PaginationContext, usePagination } from "../../Components/Pagination/PaginationContext"

export const AllCharacters = () => {
  const [content, setContent] = useState()
  const { activePage } = usePagination(PaginationContext)
  console.log("actia"+activePage)
  useEffect(() => {
    async function getData () {
      const response = await api.get(`character/?page=${activePage}`)
      const result = await response.data.results
      setContent(result);
    }
    getData()
  }, [activePage])
  return (
    <>
      
      <Navbar linkTitle="Home" linkTo="/"/>
      <AllCharactersHeader>
        <h1>All Characters</h1>
        <Pagination pageNumbers={42}/>
      </AllCharactersHeader>

      <AllCharactersContainer>
      {content ? content.map(card => {
        return(
          <Card
          key={card.id} 
          id={card.id}
          name={card.name}
          status={card.status}
          species={card.species}
          image={card.image}
          location={card.location.name} />
        )
      }) : <h1>Carregando</h1>}
      </AllCharactersContainer>
      
    </>
  )
}