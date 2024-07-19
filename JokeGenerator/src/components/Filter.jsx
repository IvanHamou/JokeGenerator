import React, { useState } from 'react'
import "./Filter.css"

function Filter({ allowedLanguages, onLanguageChange, allowedCategories, onCategoryChange }) {

  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value
    setSelectedLanguage(selectedLanguage)
    onLanguageChange(selectedLanguage)
    
  }
  function handleCategoryChange(event) {
    const selectedCategory = event.target.value
    setSelectedCategory(selectedCategory)
    onCategoryChange(selectedCategory)
    
  }

  return (
    <div className='filterPage'>
      <section className='filterTitle'>
        <h2>Filter</h2>
      </section>
      <section className='filterOptions'>
        <article>
          <h4>Select Category</h4>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            {allowedCategories.map ((category, index) =>(
              <option key={index} value={category}>
                {category}
              </option>
            ))}
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