import React from 'react';
import './FutureWeather.css'

export const FutureWeather = () => {
    return (
        <div class="future-weather">
            <h1 class="future-weather__title">Прогноз на 10 дней</h1>
            <div class="future-weather__content">
                <div class="future-weather__item">
                    <div class="item__title">Вчера</div>
                    <div class="item__date">19 окт</div>
                    <div class="item__icon"></div>
                    <div class="item__temp">+6&deg;</div>
                    <div class="item__icon-descr">Пасмурно</div>
                </div>
                <div class="future-weather__item">
                    <div class="item__title">Сегодня</div>
                    <div class="item__date">20 окт</div>
                    <div class="item__icon"></div>
                    <div class="item__temp">+4&deg;</div>
                    <div class="item__icon-descr">Пасмурно</div>
                </div>
                <div class="future-weather__item">
                    <div class="item__title">Ср</div>
                    <div class="item__date">21 окт</div>
                    <div class="item__icon"></div>
                    <div class="item__temp">+5&deg;</div>
                    <div class="item__icon-descr">Пасмурно</div>
                </div>
                <div class="future-weather__item">
                    <div class="item__title">Чт</div>
                    <div class="item__date">22 окт</div>
                    <div class="item__icon"></div>
                    <div class="item__temp">+6&deg;</div>
                    <div class="item__icon-descr">Пасмурно</div>
                </div>
                <div class="future-weather__item">
                    <div class="item__title">Пт</div>
                    <div class="item__date">23 окт</div>
                    <div class="item__icon"></div>
                    <div class="item__temp">+6&deg;</div>
                    <div class="item__icon-descr">Пасмурно</div>
                </div>
                <div class="future-weather__item">
                    <div class="item__title">Сб</div>
                    <div class="item__date">24 окт</div>
                    <div class="item__icon"></div>
                    <div class="item__temp">+7&deg;</div>
                    <div class="item__icon-descr">Пасмурно</div>
                </div>
                <div class="future-weather__item">
                    <div class="item__title">Вс</div>
                    <div class="item__date">25 окт</div>
                    <div class="item__icon"></div>
                    <div class="item__temp">+6&deg;</div>
                    <div class="item__icon-descr">Пасмурно</div>
                </div>
            </div>
        </div>
    )
};