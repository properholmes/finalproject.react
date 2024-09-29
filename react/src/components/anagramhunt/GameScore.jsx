import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Score from "./Score";
import Button from "./AnagramBtn";
import Proptypes from 'prop-types';

function reset(props) {
    props.setScore(0);
}


function GameScore (props) {

    const [scoreMessage, setScoreMessage] = useState('');

    useEffect(() => {
        if (props.score > 2) {
            setScoreMessage('Great job!');
        } else {
            setScoreMessage('Better luck next time :(');
        }
    }, [props.score]);

    console.log(typeof props.score);
    return (
        <div id="ana-finalview" className="d-grid gap-5">
            <p className="display-3"> {scoreMessage}</p>
            <Score score={props.score} />
            <Link to="/play" onClick={reset}className="btn btn-primary">Play Again!</Link>
            <Link to="/anagramhunt" onClick={reset} className="btn btn-primary">Back to Settings</Link>
        </div>

    )
}

GameScore.propTypes = {
    score: Proptypes.number
}

export default GameScore;