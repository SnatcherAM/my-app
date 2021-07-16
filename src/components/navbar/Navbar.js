import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom"; 
import Signup from '../../pages/Signup';

export const Navbar = () => {
    return (
        <nav class="nav">
            <div class="nav__logo">
                forecast
            </div>
            <div class="nav__content">
                <ul class="nav__list">
                    <li class="nav__list-item">
                        <button class="nav-btn active">Прогноз на 10 дней</button>
                    </li>
                    <li class="nav__list-item">
                        <button class="nav-btn">Прогноз на месяц</button>
                    </li>
                    <li class="nav__list-item">
                        <button class="nav-btn">Погода на карте</button>
                    </li>
                    <li class="nav__list-item">
                        <img class="input-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg" alt=""></img>
                        <input class="nav-input" type="text" placeholder="Город или район"></input>
                    </li>
                    <li class="nav__list-item">
                        <Link to="/Signup"><button class="nav-btn"><img class="user-icon" src="http://simpleicon.com/wp-content/uploads/user1.svg" alt=""></img></button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};