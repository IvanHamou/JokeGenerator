import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

  return (
    <div className='header'>
        <section className='logoSec'>
            <article>
                <h1>JOKE GENERATOR</h1>
                <img src="src/assets/Group (1).png" alt="logoIcon" />
            </article>
        </section>
        <section className='navSec'>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => navigate("/alljokes")}>All Jokes</button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/favorites")}>Favorites</button>
                    </li>
                    <li className='lightMode'>
                        <img src="src/assets/Vector (6).png" alt="sun" />
                        <div className='circle'></div>
                        <img src="src/assets/Vector (5).png" alt="moon" />
                    </li>
                </ul>
            </nav>
        </section>
    </div>
  )
}

export default Header