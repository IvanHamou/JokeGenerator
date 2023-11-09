import React, { useState } from 'react'
import './JokeDisplay.css'

function JokeDisplay({buttonText, joke, category, language, inputWord}) {
  
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
        <button>{buttonText}</button>
      </section>
      <section>
        <hr />
      </section>
    </div>
  )
}

export default JokeDisplay