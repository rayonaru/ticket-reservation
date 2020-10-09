import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


const Start = (props) => {

    const Start = styled.div`
      grid-area: content;
      text-align: center;
      align-self: center;
      justify-self: center;
    `;

    const Button = styled.button`
      background: url(./img/start-button.png);
      color: white;
      border: none;
      outline: none;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      font-size: 20px;
      border-radius: 10px;
      transition: 0.2s;
      &:hover {
        transform: scale(1.02);
      }
    `;

    return (
        <Start>
          <Link to='/home'>
            <Button>
              Reserve now
            </Button>
          </Link>
        </Start>
    );
};

export default Start;
