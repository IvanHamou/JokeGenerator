import React from 'react'
import Header from '../components/Header'
import JokeDisplay from '../components/JokeDisplay'
import './Home.css'

function Home() {
  return (
    <div>
      <Header/>
      <div className='mainContent'>
        <section className='sectionA'>
          <article>
            <div className='filterOptionsHome'>
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
                <select>
                  <option value="0">Czech</option>
                  <option value="1">German</option>
                  <option value="2">English</option>
                  <option value="3">Spanish</option>
                  <option value="4">French</option>
                  <option value="5">Portuguese</option>
                </select>
              </article>
              <article>
                <h4>Includes Word</h4>
                <input type="text" />
              </article>
              <article>
                <button>Generate!</button>
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
        <hr />
        <section className='sectionB'>
          <JokeDisplay buttonText={"Add To Favorites"}/>
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