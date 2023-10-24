import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
    const navigate = useNavigate();
    const [toggleMode, setToggleMode] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    function handleClick() {
        setToggleMode(prev => !prev);
        setAnimationClass(toggleMode ? 'slide-out' : 'slide-in');

        document.body.classList.toggle('dark-mode', !toggleMode);
        document.body.classList.toggle('switch', !toggleMode);
    }

    return (
        <div className='header'>
            <section className='logoSec'>
                <article onClick={() => navigate("/")}>
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
                        <li className='lightMode' onClick={handleClick}>
                            <img src="src/assets/Vector (6).png" alt="sun"/>
                            <div className={`circle ${animationClass}`}></div>
                            <img src="src/assets/Vector (5).png" alt="moon"/>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Header;
