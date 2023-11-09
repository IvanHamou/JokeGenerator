import React, { useState } from 'react'
import Header from '../components/Header'
import JokeDisplay from '../components/JokeDisplay'
import './Home.css'

function Home() {

  const [joke, setJoke] = useState("")
  const [category, setCategory] = useState("")
  const [categoryApi, setCategoryApi] = useState("Programming")
  const [language, setLanguage] = useState("")
  const [langApi, setLangApi] = useState("lang=en&")
  const [word, setWord] = useState("")
  const [inputWord, setInputWord] = useState(""); // New state for the input value


  function handleLangApi(event) {
    setLangApi(event.target.value)
  }

  function handleCategoryApi(event) {
    setCategoryApi(event.target.value)
  }

  function handleWord(event) {
    setWord(event.target.value)
  }
  
  const generateJoke = () => {
    fetch(`https://v2.jokeapi.dev/joke/${categoryApi}?${langApi}type=single&contains=${word}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setJoke(data.joke)
        setCategory(data.category)
        handleWord({ target: { value: word } });
        if (data.lang == "en") {
          setLanguage("English")
        } else if (data.lang == "de") {
          setLanguage("German")
        } else if (data.lang == "cs") {
          setLanguage("Czech")
        } else if (data.lang == "es") {
          setLanguage("Spanish")
        } else if (data.lang == "fr") {
          setLanguage("French")
        } else if (data.lang == "pt"){
          setLanguage("Portuguese")
        } 
        setInputWord(word); // Update 'word' after API response
      })
      .catch(error => console.error('Error:', error))
  };
  



  return (
    <div>
      <Header/>
      <div className='mainContent'>
        <section className='sectionA'>
          <article>
            <div className='filterOptionsHome'>
              <article>
                <h4>Select Category</h4>
                <select value={categoryApi} onChange={handleCategoryApi}>
                  <option value="Programming">Programming</option>
                  <option value="Miscellaneous">Misc</option>
                  <option value="Dark">Dark</option>
                  <option value="Pun">Pun</option>
                  <option value="Spooky">Spooky</option>
                  <option value="Christmas">Christmas</option>
                </select>
              </article>
              <article>
                <h4>Select Language</h4>
                <select value={langApi} onChange={handleLangApi}>
                  <option value="lang=en&">English</option>
                  <option value="lang=cs&">Czech</option>
                  <option value="lang=de&">German</option>
                  <option value="lang=es&">Spanish</option>
                  <option value="lang=fr&">French</option>
                  <option value="lang=pt&">Portuguese</option>
                </select>
              </article>
              <article>
                <h4>Includes Word</h4>
                <input type="text" value={word} onChange={handleWord}/>
              </article>
              <article>
                <button onClick={generateJoke}>Generate!</button>
              </article>
            </div>
          </article>
          <article className='disableGif'>
            <h4>Disable GIFs</h4>
            <button>
              <div className='circleHome'></div>
            </button>
          </article>
        </section>
        <hr className='sep'/>
        <section className='sectionB'>
          <JokeDisplay buttonText={"Add To Favorites"} joke={joke} category={category} language={language} inputWord={inputWord}/>
          <article className='interact'>
            <article className='rating'>
              <img src="./src/assets/Vector (7).png" alt="star" />
              <img src="./src/assets/Vector (7).png" alt="star" />
              <img src="./src/assets/Vector (7).png" alt="star" />
              <img src="./src/assets/Vector (7).png" alt="star" />
              <img src="./src/assets/Vector (7).png" alt="star" />
            </article>
            <article className='socialMedia'>
              <img src="./src/assets/Vector (8).png" alt="fb" />
              <img src="./src/assets/Vector (9).png" alt="ig" />
            </article>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Home