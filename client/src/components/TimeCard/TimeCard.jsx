import React from 'react';
import styled from '@emotion/styled';

const TimeCard = ({timestamp, name1, name2}) => {

    const Card = styled.div`
      height: 150px;
      width: 200px;
      background: url(./img/shattered.png);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      transition: 0.2s;
      &:hover {
        transform: scale(1.02);
      }
    `;

    return (
        <Card>
          <div>Game</div>
          <div>{name1} vs {name2}</div>
          <div>{timestamp}</div>
        </Card>
    );
};

export default TimeCard;
