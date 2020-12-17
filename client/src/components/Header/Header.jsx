import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const Header = styled.div`
      grid-area: header;
      text-align: center;
      background: url(/img/prism.png);
    `;

    const Title = styled.div`
      font-size: 30px;
      font-family: 'Fira Sans', sans-serif;
      padding: 15px 0px 15px 15px;
      text-align: center;
      text-decoration:none;
    `;
    const StyledLink = styled(Link)`
      text-decoration: none;
      &:focus, &:hover, &:visited, &:link, &:active {
          text-decoration: none;
      }
      color: white;
`;

    return (
        <>
          <Header>
            <Title>
              <StyledLink to='/'>
                Ticket Reserve Web Service
              </StyledLink>
            </Title>
          </Header>
        </>
    );
};

export default Header;
