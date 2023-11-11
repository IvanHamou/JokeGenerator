import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'
import JokeDisplay from '../components/JokeDisplay'

function Favorites({setButtonText}) {

  const [joke, setJoke] = useState("")
  const [category, setCategory] = useState("")
  const [language, setLanguage] = useState("")
  const [inputWord, setInputWord] = useState("")

  const [activePage, setActivePage] = useState(true)

  const [favouriteJokes, setFavouriteJokes] = useState([]);

  useEffect(() => {
      function getJokes() {
          let data = JSON.parse(sessionStorage.getItem("savedJokes"));
          if (data !== null) {
              setFavouriteJokes(data);
          }
      }
      getJokes();
  }, []);


  return (
    <div>
      <Header activePage={activePage}/>
      <Filter/>
      <section className='jokeSection'>
        <JokeDisplay buttonText={"Remove From Favorites"}/>
        {favouriteJokes.map((dataInfo, index) => (
            <JokeDisplay joke={dataInfo[0]} category={dataInfo[1]} language={dataInfo[2]} inputWord={dataInfo[3]} key={index}/>
        ))}
      </section>
    </div>
  )
}

export default Favorites