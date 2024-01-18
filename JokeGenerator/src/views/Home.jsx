import React, { useState } from 'react'
import Header from '../components/Header'
import JokeDisplay from '../components/JokeDisplay'
import './Home.css'

function Home() {

  const [ data, setData] = useState("")
  const [joke, setJoke] = useState("")
  const [category, setCategory] = useState("")
  const [categoryApi, setCategoryApi] = useState("Programming")
  const [language, setLanguage] = useState("")
  const [langApi, setLangApi] = useState("lang=en&")
  const [word, setWord] = useState("")
  const [inputWord, setInputWord] = useState("")

  const [isHovered, setIsHovered] = useState(false);


  function handleLangApi(event) {
    setLangApi(event.target.value)
  }

  function handleCategoryApi(event) {
    if (event.target.value == "lang=de&") {
      setCategory("German")
    } else {
    setCategoryApi(event.target.value)
  }
  }

  function handleWord(event) {
    setWord(event.target.value)
  }
  
  const generateJoke = () => {
    fetch(`https://v2.jokeapi.dev/joke/${categoryApi}?${langApi}type=single&contains=${word}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
        setJoke(data.joke)
        setCategory(data.category)
        handleWord({ target: { value: word } })
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
        setInputWord(word)
        if (data.error == true) {
          setJoke(data.message)
          if (langApi == "lang=de&") {
            setLanguage("German")
          } else if (langApi == "lang=en&") {
            setLanguage("English")
          } else if (langApi == "lang=fr&") {
            setLanguage("French")
          } else if (langApi == "lang=es&") {
            setLanguage("Spanish")
          } else if (langApi == "lang=cs&") {
            setLanguage("Czech")
          } else if (langApi == "lang=pt&") {
            setLanguage("Portuguese")
          }
          setCategory(categoryApi)
        }
      })
    .catch(error => {
      console.error('Error fetching joke:', error)
    })
  }
  



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
          <JokeDisplay joke={joke} category={category} language={language} inputWord={inputWord} data={data}/>
          <article className='interact'>
            <article className='rating'>
            {isHovered ? (
        <img
          src="./src/assets/Vector (7).png" // Replace with your yellow star image source
          alt="Yellow Star"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : (
        <img
          src="./src/assets/Vector (10).png" // Replace with your black star image source
          alt="Black Star"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}
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