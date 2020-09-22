import React from 'react';
import styled from '@emotion/styled';

const TimeCard = (props) => {

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
          <div className='Day'>Monday</div>
          <div className='Day'>Naruto vs Sasuke</div>
          <div className='Time'>17:00 PM</div>
        </Card>
    );
};

export default TimeCard;
