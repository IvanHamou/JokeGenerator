import React, { useState } from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'
import JokeDisplay from '../components/JokeDisplay'

function Favorites({setButtonText}) {
  const [activePage, setActivePage] = useState(true)


  return (
    <div>
      <Header activePage={activePage}/>
      <Filter/>
      <section className='jokeSection'>
        <JokeDisplay buttonText={"Remove From Favorites"}/>
        <JokeDisplay/>
      </section>
    </div>
  )
}

export default Favorites