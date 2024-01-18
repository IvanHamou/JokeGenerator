import React, { useState } from 'react'
import "./Filter.css"

function Filter({ allowedLanguages, onLanguageChange }) {

  const [selectedLanguage, setSelectedLanguage] = useState("")

  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value
    setSelectedLanguage(selectedLanguage)
    onLanguageChange(selectedLanguage)
    
  }

  return (
    <div className='filterPage'>
      <section className='filterTitle'>
        <h2>Filter</h2>
      </section>
      <section className='filterOptions'>
        <article>
          <h4>Select Category</h4>
          <select>
            <option value="0">Programming</option>
            <option value="1">Misc</option>
            <option value="2">Dark</option>
            <option value="3">Pun</option>
            <option value="4">Spooky</option>
            <option value="5">Christmas</option>
          </select>
        </article>
        <article>
          <h4>Select Language</h4>
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            {allowedLanguages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </article>
        <article>
          <h4>Includes Word</h4>
          <input type="text" />
        </article>
      </section>
      <section className='hrSec'>
        <hr />
      </section>
    </div>
  )
}

export default Filter