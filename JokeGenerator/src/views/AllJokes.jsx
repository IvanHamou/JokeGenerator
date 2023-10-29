import React, { useState } from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'
import JokeDisplay from '../components/JokeDisplay'
import './Alljokes.css'

function Alljokes() {
  const [isConditionMet, setIsConditionMet] = useState(true)

  return (
    <div>
      <Header isConditionMet={isConditionMet}/>
      <Filter/>
      <section className='jokeSection'>
        <JokeDisplay buttonText={"Add To Favorites"}/>
        <JokeDisplay/>
      </section>
    
    </div>
  )
}

export default Alljokes