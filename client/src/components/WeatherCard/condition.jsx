import React from 'react';
import styled from '@emotion/styled';

const Condition = ({temp, condition}) => {

  const Temp = styled.h1`
      font-family: 'Merriwheathe', sans-serif;
      font-size: 2rem;
    `;

  const State = styled.h3`
      font-family: 'Merriwheathe', sans-serif;
      font-size: 2rem;
    `;

  return (
    <>
      <Temp>{temp} °C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
