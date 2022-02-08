import {Container} from './style.js'
import morty from '../../Assets/morty.gif'

import { useState, useEffect } from 'react'
import { api } from '../../Services/api.js'

export const Home  = () => {
  const [search, setSearch] = useState('')
  const [gifPos, setGifPos] = useState('')
  const [searchResult, setSearchResult] = useState();
  const [numberOfResults, setNumberOfResults] = useState()
  

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
      } catch(e) {
        getGifBackToScene()
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
      <img className={gifPos} src={morty} alt="morty" />
    </Container>
  )
}