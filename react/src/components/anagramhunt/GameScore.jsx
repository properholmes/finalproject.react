import { Link } from 'react-router-dom';
import Score from "./Score";
import Button from "./Button";


function GameScore (props) {
    return (
        <div id="ana-finalview" className="d-grid gap-5">
            <Score score={props.score} />
            <Link to="/play" className="btn btn-primary">Play Again!</Link>
            <Link to="/" className="btn btn-primary">Back to Settings</Link>
        </div>

    )
}

export default GameScore;