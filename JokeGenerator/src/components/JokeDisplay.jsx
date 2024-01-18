import React, { useState } from 'react'
import './JokeDisplay.css'
import StoreData from './StoreData'

function JokeDisplay({joke, category, language, inputWord, dataInfo, updateFavoriteJokes}) {

  dataInfo = {joke, category, language, inputWord}
  console.log(dataInfo);
  
  return (
    <div className='jokeDisplay'>
      <section className='filters'>
        <h4>Category: {dataInfo.category}</h4>
        <h4>Language: {dataInfo.language}</h4>
        <h4>Includes Word: {dataInfo.inputWord}</h4>
      </section>
      <section className='joke'>
        <h2>{dataInfo.joke}</h2>
      </section>
      <section className='actionBtn'>
        <StoreData dataInfo= {dataInfo} updateFavoriteJokes={updateFavoriteJokes}/>
      </section>
      <section>
        <hr />
      </section>
    </div>
  )
}

export default JokeDisplay