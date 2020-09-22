import React from 'react';
import styled from '@emotion/styled';

const Footer = (props) => {

    const Footer = styled.div`
      font-size: 14px;
      font-family: 'Fira Sans', sans-serif;
      grid-area: footer;
      text-align: center;
      height: 50px;
    `;

    const Title = styled.div`
      font-family: 'Fira Sans', sans-serif;
      font-size: 14px;
      padding-top: 15px;
    `;

    return (
        <Footer>
          <Title>
            Copyright by Rayonaru &copy; 2020
          </Title>
        </Footer>
    );
};

export default Footer;
