import React from 'react';
import './CurrentWeather.css';
import icon from '../images/rainy.png'

export const CurrentWeather = () => {
    return (
        <div class="current-weather">
            <div class="current-weather__container">
            <div class="current-weather__header">
                <div class="city-name">
                    Погода в Харькове
                    <div class="current-time">Сейчас 13:27. Вчера в это время +6&deg;</div>
                </div>
                <button class="near-btn">Рядом со мной</button>
            </div>
            <div class="current-weather__body">
                <div class="current-weather__body-item">
                    <div class="current-weather__temp">+4&deg;</div>
                    <div class="current-weather__icon"><img src={icon} alt=""></img></div>
                    <div class="icon-description">
                        Небольшой дождь
                        <div class="feels-like">Ощущается как +1&deg;</div>
                    </div>
                </div>
                <div class="current-weather__body-item">
                    <div class="wind-speed">2,0 м/с</div>
                    <div class="humidity">76%</div>
                    <div class="pressure">745 мм рт. ст.</div>
                </div>
            </div>
            <hr class="divider_solid"></hr>
            <div class="current-weather__footer">
                <div class="current-weather__footer-item">
                    <div class="footer-item__time">13:00</div>
                    <div class="footer-item__icon"><img src={icon} alt=""></img></div>
                    <div class="footer-item__temp">+4&deg;</div>
                </div>
                <div class="current-weather__footer-item">
                    <div class="footer-item__time">14:00</div>
                    <div class="footer-item__icon"><img src={icon} alt=""></img></div>
                    <div class="footer-item__temp">+5&deg;</div>
                </div>
                <div class="current-weather__footer-item">
                    <div class="footer-item__time">15:00</div>
                    <div class="footer-item__icon"><img src={icon} alt=""></img></div>
                    <div class="footer-item__temp">+5&deg;</div>
                </div>
                <div class="current-weather__footer-item">
                    <div class="footer-item__time">16:00</div>
                    <div class="footer-item__icon"><img src={icon} alt=""></img></div>
                    <div class="footer-item__temp">+4&deg;</div>
                </div>
                <div class="current-weather__footer-item">
                    <div class="footer-item__time">17:00</div>
                    <div class="footer-item__icon"><img src={icon} alt=""></img></div>
                    <div class="footer-item__temp">+4&deg;</div>
                </div>
                <div class="current-weather__footer-item">
                    <div class="footer-item__time">18:00</div>
                    <div class="footer-item__icon"><img src={icon} alt=""></img></div>
                    <div class="footer-item__temp">+3&deg;</div>
                </div>
                <div class="current-weather__footer-item">
                    <div class="footer-item__time">19:00</div>
                    <div class="footer-item__icon"><img src={icon} alt=""></img></div>
                    <div class="footer-item__temp">+2&deg;</div>
                </div>
            </div>
            </div>
        </div>
    )
};