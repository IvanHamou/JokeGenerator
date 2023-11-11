import React, { useState } from 'react'
import './JokeDisplay.css'
import StoreData from './StoreData'

function JokeDisplay({buttonText, joke, category, language, inputWord, data}) {
  
  return (
    <div className='jokeDisplay'>
      <section className='filters'>
        <h4>Category: {category}</h4>
        <h4>Language: {language}</h4>
        <h4>Includes Word: {inputWord}</h4>
      </section>
      <section className='joke'>
        <h2>{joke}</h2>
      </section>
      <section className='actionBtn'>
        <StoreData buttonText={buttonText} joke={joke} category={category} language={language} inputWord={inputWord} data={data}/>
      </section>
      <section>
        <hr />
      </section>
    </div>
  )
}

export default JokeDisplay