import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import GameDetail from './GameDetail/GameDetail.jsx';


const GameDetailEngine = () => {

    let { id } = useParams();

    return (
        <GameDetail id={id}>

        </GameDetail>
    );
};

export default GameDetailEngine;