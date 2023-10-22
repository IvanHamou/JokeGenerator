import React from 'react'
import Favorites from '../views/Favorites'
import Alljokes from '../views/Alljokes'

function Header() {
  return (
    <div>
        <section>
            <article>
                <h1>Joke Generator</h1>
                <img src="src/assets/Group (1).png" alt="logoIcon" />
            </article>
        </section>
        <section>
            <nav>
                <ul>
                    <li>
                        <button>All Jokes</button>
                    </li>
                    <li>
                        <button>Favorites</button>
                    </li>
                    <li>
                        <img src="src/assets/Vector (6).png" alt="sun" />
                        <img src="src/assets/Vector (5).png" alt="moon" />
                    </li>
                </ul>
            </nav>
        </section>
    </div>
  )
}

export default Header