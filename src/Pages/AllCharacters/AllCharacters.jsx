import { Card } from "../../Components/Card/Card"
import {AllCharactersHeader, AllCharactersContainer} from './style.js'
import {Navbar} from "../../Components/Navbar/Navbar"
import {useState, useEffect} from 'react'
import {api} from "../../Services/api"

export const AllCharacters = () => {
  const [content, setContent] = useState()
  const [page, setPage] = useState(1)
  useEffect(() => {
    (async () => {
      const response = await api.get(`character/?page=${page}`)
      const result = await response.data.results
      setContent(result);
    })()
  })
  return (
    <>
      <Navbar linkTitle="Home" linkTo="/"/>
      <AllCharactersHeader>
        <h1>All Characters</h1>
      </AllCharactersHeader>

      <AllCharactersContainer>
      {content && content.map(card => {
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
      })}
      </AllCharactersContainer>
    </>
  )
}