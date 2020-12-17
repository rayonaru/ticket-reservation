import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import GameCard from './GameCard/GameCard.jsx';

const GameCardEngine = () => {

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

    const GameCards = styled.div`
      grid-area: content;
      align-self: center;
      justify-self: center;
      display: grid;
      grid-template-columns: repeat(${games.length - Math.trunc(games.length /2)}, 1fr);
      grid-gap: 10px;
    `;

    return (
        <GameCards>
          { !loading && !error ? (
              games.map(item => (
                  <GameCard key={item.id} name1={item.name1} name2={item.name2} timestamp={item.timestamp}></GameCard>
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
        </GameCards>
    );
};

export default GameCardEngine;
