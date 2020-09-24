import React from 'react';
import styled from '@emotion/styled';
import './Loading.css';

const Loading = () => {
    return (
        <div className='loading'>
          <span className='loadspan'>↓</span>
          <span className='loadspan' style={{delay: '0.1s'}}>↓</span>
          <span className='loadspan' style={{delay: '0.1s'}}>↓</span>
          <span className='loadspan' style={{delay: '0.1s'}}>↓</span>
          <span className='loadspan' style={{delay: '0.1s'}}>↓</span>
        </div>
    );
};

export default Loading;
