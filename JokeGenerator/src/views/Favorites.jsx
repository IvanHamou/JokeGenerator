import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import JokeDisplay from '../components/JokeDisplay';

function Favorites() {
  const [activePage, setActivePage] = useState(true);
  const [favoriteJokes, setFavoriteJokes] = useState([]);
  const [filteredJokes, setFilteredJokes] = useState([]);


  useEffect(() => {
    function getJokes() {
      const data = JSON.parse(sessionStorage.getItem("savedJokes")) || [];
      setFavoriteJokes(data);
      setFilteredJokes(data)
    }
    getJokes();
  }, []);

  const updateFavoriteJokes = () => {
    const data = JSON.parse(sessionStorage.getItem("savedJokes")) || [];
    setFavoriteJokes(data);
    setFilteredJokes(data)
  };

  const allowedLanguages = ["Czech", "German", "English", "Spanish", "French", "Portuguese"];

  function handleLanguageChange(selectedLanguage) {
    const filtered = favoriteJokes.filter(joke => joke.language === selectedLanguage);
    setFilteredJokes(filtered);
  }



  return (
    <div>
      <Header activePage={activePage} />
      <Filter allowedLanguages={allowedLanguages} onLanguageChange={handleLanguageChange}/>
      <section className='jokeSection'>
        {filteredJokes.map((dataInfo, index) => (
          <JokeDisplay
            key={index}
            joke={dataInfo.joke}
            category={dataInfo.category}
            language={dataInfo.language}
            inputWord={dataInfo.inputWord}
            updateFavoriteJokes={updateFavoriteJokes}
          />
        ))}
      </section>
    </div>
  );
}

export default Favorites;
