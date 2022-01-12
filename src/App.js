import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

function App() {
  const apiKey = "96e62086d6a6c76b5e7358421736657e";
  const [cities, setCities] = useState([]);

  const onSearch = city => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then(c => {
        if(c.main !== undefined) {
          const city = {
            min: Math.round(c.main.temp_min),
            max: Math.round(c.main.temp_max),
            img: c.weather[0].icon,
            wind: c.wind.speed,
            temp: c.main.temp,
            name: c.name,
            weather: c.weather[0].main,
            clouds: c.clouds.all,
            latitud: c.coord.lat,
            longitud: c.coord.lon
          }
          setCities(oldCities => [...oldCities, city]);
        }
      })
  }

  function onClose(name) {
    setCities(oldCities => oldCities.filter(c => c.name !== name));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}

export default App;