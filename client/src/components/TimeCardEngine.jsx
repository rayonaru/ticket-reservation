import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import TimeCard from './TimeCard/TimeCard.jsx';

const TimeCardEngine = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [games, setGames] = useState([]);

    async function fetchData() {
        setLoading(true);
        const res = await fetch('https://localhost:5001/api/games');
        res.json()
           .then(res => setGames(res))
           .then(setLoading(false))
           .catch(err => setError(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const TimeCards = styled.div`
      grid-area: content;
      align-self: center;
      justify-self: center;
      display: grid;
      grid-template-columns: repeat(${games.length - Math.trunc(games.length /2)}, 1fr);
      grid-gap: 10px;
    `;

    return (
        <TimeCards>
          { !loading && !error ? (
              games.map(item => (
                  <TimeCard key={item.id} name1={item.name1} name2={item.name2} timestamp={item.timestamp}></TimeCard>
              ))
          ) : loading ? (
              <div style={{color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                  Loading...
                </div>
              </div>
          ) : !loading && error ? (
              <div style={{color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                  Error...
                </div>
              </div>
          ) : null}
        </TimeCards>
    );
};

export default TimeCardEngine;
