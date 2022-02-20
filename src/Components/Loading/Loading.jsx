import { useState } from 'react'
import {LoadingCard} from './styles.js'

export const Loading = () => {
  
    const [cardsNumber, setCardsNumber] = useState(20)
    const cardsArr = Array.from({length: cardsNumber}, (a, b) => b)
    return (
      cardsArr.map(card => <LoadingCard/>)
    )
}