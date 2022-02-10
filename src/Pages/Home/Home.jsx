/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Card} from './style.js'
import morty from '../../Assets/morty.gif'

import { useState, useEffect } from 'react'
import { api } from '../../Services/api.js'

export const Home  = () => {
  const [search, setSearch] = useState('')
  const [gifPos, setGifPos] = useState('')
  const [cardInfo, setCardInfo] = useState();

  
  function getItemBackToScene() {
    setGifPos('show')
  }

  function removeItemFromScene() {
    setGifPos('hide')
  }

  useEffect(() => {
    
      (async () => {
        if (search.length === 0) {
          getItemBackToScene();
          setCardInfo('')
          return
        }

        try {
          const response = await api.get(`/character/?name=${search}`)
          const result = await response.data

          let filteredSearch = result.results.filter(character => 
            character.name.toLowerCase().includes(search.toLowerCase())
          )
          console.log(filteredSearch)
          filteredSearch = filteredSearch.filter(character => 
            character.name.toLowerCase().startsWith(search.toLowerCase())
          )
          
          if (filteredSearch.length >= 1) {
            const {id, name, species, status ,image, location } = filteredSearch[0];
            console.log(filteredSearch)
            removeItemFromScene()

            setCardInfo([{
              id,
              name,
              species,
              status,
              image,
              location: location.name
            }])
          }
        } catch(e) {
          setCardInfo('')
          getItemBackToScene()
        } 
        
        
      })()
   
  }, [search])
  return (
    <Container>
      <div className="apresentation">
        <div className="text">
          <h1 className="title"><br/>Characters<br/>Here</h1>
          <p className="description">Use the field below to search for a character.</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Morty Smith" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </div>
    
      {cardInfo && cardInfo.map(card => {
        return (
          <Card key={card.id}>
            <div className="main">
              <img src={card.image} alt={card.name} />
              <h3>{card.name}</h3>
            </div>
            <div className="description">
              <p>Status: {card.status}</p>
              <p>Specie: {card.species}</p>
              <p>Last location: {card.location}</p>
            </div>
          </Card>
        )
      })}
      <img className={gifPos} id="home-gif"src={morty} alt="morty" />
      
    </Container>
  )
}