import React from 'react';
import './Weather.css'
import { Navbar } from '../components/navbar/Navbar';
import CityBreadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import { CurrentWeather } from '../components/current weather/CurrentWeather'
import { FutureWeather } from '../components/future weather/FutureWeather';

export const Weather = () => {
    return (
        <div class="wrapper">
            <Navbar />
            <CityBreadcrumbs />
            <CurrentWeather />
            <FutureWeather />
        </div>
    )
};