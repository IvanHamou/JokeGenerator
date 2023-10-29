import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header({ isConditionMet, activePage }) {
    const navigate = useNavigate();
    const [toggleMode, setToggleMode] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [animationClass, setAnimationClass] = useState('');
    const [menuDisplay, setMenuDisplay] = useState('');

    function switchMode() {
        setToggleMode(prev => !prev)
        setAnimationClass(toggleMode ? 'slide-out' : 'slide-in')

        document.body.classList.toggle('dark-mode', !toggleMode)
        document.body.classList.toggle('switch', !toggleMode)
    }

    function openMenu() {
        setToggleMenu(prev => !prev)
        setMenuDisplay(!toggleMenu ? 'visible' : '')

        //document.body.classList.toggle('nav', !toggleMode)
    }

    return (
        <div className='header'>
            <div>
                <section className='logoSec'>
                    <article onClick={() => navigate("/")}>
                        <h1>JOKE GENERATOR</h1>
                        <img src="src/assets/Group (1).png" alt="logoIcon" />
                    </article>
                </section>
                    <article className='hamburger' onClick={openMenu}>
                        <div className='hamburgerLine'></div>
                        <div className='hamburgerLine'></div>
                        <div className='hamburgerLine'></div>
                </article>
            </div>
            <section className={`navSec ${menuDisplay}`}>
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => navigate("/alljokes")} style={{ color: isConditionMet ? '#FFE500' : 'white' }}>All Jokes</button>
                        </li>
                        <li>
                            <button onClick={() => navigate("/favorites")} style={{ color: activePage ? '#FFE500' : 'white' }}>Favorites</button>
                        </li>
                        <li className='lightMode' onClick={switchMode}>
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
