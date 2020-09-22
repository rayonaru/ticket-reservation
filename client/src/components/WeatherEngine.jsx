import React, { useState, useEffect } from 'react';

import WeatherCard from './WeatherCard/component.js';

const WeatherEngine = ({location}) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({
        temp: null,
        city: null,
        country: null,
        condition: null
    });

    const getWeather = async(q) => {
        setQuery('');
        setLoading(true);
        try {
            const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q},gb&units=metric&appid=cb41950a9c70dc2a8814556b7941f75b`);
            const resJson = await apiRes.json();
            setWeather({
                temp: resJson.main.temp,
                city: resJson.name,
                country: resJson.country,
                condition: resJson.weather[0].main
            });
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    const handleSearch = e => {
        e.preventDefault();
        getWeather(query);
    };

    useEffect(() => {
        getWeather(location);
    }, [location]);

    return (
        <div>
          {!loading && !error ? (
              <div>
                <WeatherCard
                  city={weather.city}
                  country={weather.country}
                  temp={weather.temp}
                  condition={weather.condition}
                />
                <form>
                  <input value={query} onChange={(e)=>{setQuery(e.target.value);}}/>
                  <button onClick={(e) => handleSearch(e)}>Search</button>
                </form>
              </div>
          ): loading ? (
              <div style={{color: 'black'}}>Loading</div>
          ): !loading && error ? (
              <div style={{color: 'black'}}>
                Error!
                <button onClick={() => setError(false)}>Reset!</button>
              </div>
          ): null}
        </div>
    );
};

export default WeatherEngine;
