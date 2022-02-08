import { Container, Card} from './style.js'
import morty from '../../Assets/morty.gif'

import { useState, useEffect } from 'react'
import { api } from '../../Services/api.js'

export const Home  = () => {
  const [search, setSearch] = useState('')
  const [gifPos, setGifPos] = useState('')
  const [searchResult, setSearchResult] = useState();
  const [numberOfResults, setNumberOfResults] = useState();
  const [cardInfo, setCardInfo] = useState([]);
  
  function getGifBackToScene() {
    setGifPos('show')
  }

  function removeGifFromScene() {
    setGifPos('hide')
  }

  useEffect(() => {
    
    (async () => {
      try {
        
        const response = await api.get(`character/?name=${search}`)
        const result = await response.data
        

        if (result && search.length !== 0) {
          setNumberOfResults(result.info.count)
          setSearchResult(result.results[0])
          
          removeGifFromScene()
        }

        setCardInfo([{
          id: searchResult.id,
          name: searchResult.name,
          status: searchResult.status,
          image: searchResult.image,
          specie: searchResult.species,
          livesAt: searchResult.location.name,
          similarResultsCount: numberOfResults
        }])
      } catch(e) {
        getGifBackToScene()
      } finally {
        if (search.length === 0) setCardInfo([])
      } 
    })()
  },[search])
    
  return (
    <Container>
      <div className="apresentation">
        <div className="text">
          <h1 className="title">All <br/>Characters<br/>Here</h1>
          <p className="description">Use the field below to search for a character.</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Morty Smith" value={search} onChange={(e) => {
            if (e.target.value.length === 0) getGifBackToScene()
            setSearch(e.target.value) 
          }}/>
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
              <p>Specie: {card.specie}</p>
              <p>Last location: {card.livesAt}</p>
            </div>
          </Card>
        )
      })}
      <img className={gifPos} id="home-gif"src={morty} alt="morty" />
      
    </Container>
  )
}