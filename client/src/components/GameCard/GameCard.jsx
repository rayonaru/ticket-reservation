import React from 'react';
import styled from '@emotion/styled';

const GameCard = ({timestamp, name1, name2}) => {

    var options = { year: 'numeric', month: 'numeric', day: 'numeric' , hour: 'numeric', minute: 'numeric'};
    var date = new Date(timestamp);

    const Card = styled.div`
      height: 150px;
      width: 200px;
      background: url(/img/shattered.png);
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
          <div>{date.toLocaleDateString("en-US", options)}</div>
        </Card>
    );
};

export default GameCard;
