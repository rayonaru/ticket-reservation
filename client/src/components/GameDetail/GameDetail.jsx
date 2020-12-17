import React from 'react';

import './GameDetail.css';

const GameDetail = ({id}) => {

    return (
        <div className='container'>
            <div className='inf'>
                <h1>Raru vs Rayonaru</h1>
                <h2>12/12/2020, 12:00 PM</h2>
            </div>

            <div className='places'>
                 <div style={{}} className="block">
                    <div className="square"></div>
                </div>
                <div className="block">
                    <div className="square"></div>
                </div>
                <div className="block">
                    <div className="square"></div>
                </div>
                <div className="block">
                    <div className="square"></div>
                </div>
                <div className="block">
                    <div className="square"></div>
                </div>
                <div className="block">
                    <div className="square"></div>
                </div>
                <div className="block">
                    <div className="square"></div>
                </div>
                <div className="block">
                    <div className="square"></div>
                </div>
            </div>
        </div>
    );
}

export default GameDetail;