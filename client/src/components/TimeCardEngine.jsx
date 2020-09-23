import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import TimeCard from './TimeCard/TimeCard.jsx';

const TimeCardEngine = () => {

    const TimeCards = styled.div`
      grid-area: content;
      align-self: center;
      justify-self: center;
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    `;

    const getGames = async(q) => {
        const apiRes = await fetch('http://localhost:5000/api/games');
        const resJson = await apiRes.json();

        console.log(resJson.id);
    };

    getGames();

    return (
        <TimeCards>
          <TimeCard/>
          <TimeCard/>
          <TimeCard/>
          <TimeCard/>
          <TimeCard/>
          <TimeCard/>
          <TimeCard/>
          <TimeCard/>
          <TimeCard/>
        </TimeCards>
    );
};

export default TimeCardEngine;
