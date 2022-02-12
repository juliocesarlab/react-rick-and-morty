/* eslint-disable react-hooks/exhaustive-deps */
import { HomeContainer } from './style.js'
import {Navbar} from "../../Components/Navbar/Navbar"

import { useState, useEffect } from 'react'
import { api } from '../../Services/api.js'

import { Card } from '../../Components/Card/Card.jsx'

import morty from '../../Assets/morty.gif'

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
          
          filteredSearch = filteredSearch.filter(character => 
            character.name.toLowerCase().startsWith(search.toLowerCase())
          )
          
          if (filteredSearch.length >= 1) {
            const {id, name, species, status ,image, location } = filteredSearch[0];
           
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
    <>
    <Navbar linkTitle="See All Characters" linkTo="allCharacters"/>
    <HomeContainer>
      <div className="apresentation">
        <div className="text">
          <h1 className="title">All<br/>Characters<br/>Here</h1>
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
          <Card id={card.id} 
          name={card.name} 
          status={card.status} 
          species={card.species}
          location={card.location}
          image={card.image}/>
        )
      })}
      <img className={gifPos} id="home-gif"src={morty} alt="morty" />
    </HomeContainer>
    </>
  )
}