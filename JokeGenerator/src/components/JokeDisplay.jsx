import React from 'react'
import './JokeDisplay.css'

function JokeDisplay() {
  return (
    <div className='jokeDisplay'>
      <section className='filters'>
        <h4>Category: Programming</h4>
        <h4>Language: English</h4>
        <h4>Includes Word: Java</h4>
      </section>
      <section className='joke'>
        <h2>Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.</h2>
      </section>
      <section className='actionBtn'>
        <button>Remove From Favorites</button>
      </section>
      <section>
        <hr />
      </section>
    </div>
  )
}

export default JokeDisplay