import { Link } from 'react-router-dom';
import Score from "./Score";
import Button from "./AnagramBtn";
import Proptypes from 'prop-types';

function reset(props) {
    props.setScore(0);
}


function GameScore (props) {
    return (
        <div id="ana-finalview" className="d-grid gap-5">
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