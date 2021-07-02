import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="wrapper">
        <div class="head">
            <div class="head__row">
                <div class="cityname">Kharkiv</div>
                <div class="icon"></div>
            </div>
            <div class="head__row">
                <div class="temp">+30</div>
                <div class="icon-descr"></div>
            </div>
        </div>
        <div class="bottom">
            <div class="humidity">
            Humidity
                <div>70%</div>
            </div>
            <div class="windspeed">
            Wind speed
                <div>5 m/s</div>
            </div>
            <div class="pressure">
            Pressure
                <div>50</div>
            </div>
        </div>
        <div class="date">02.07.2021</div>
    </div>
  );
}

export default App;
