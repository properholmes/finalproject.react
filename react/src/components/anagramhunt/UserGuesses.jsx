function UserGuesses(props) {
    const wordList = props.wordAnswers;
    console.log(wordList);
    const listOptions = wordList.map((word)=> (
        <li key={word}>{word}</li>
    ));
    const correctList= props.correctAnswers;
    const correctOptions = correctList.map((word) => (
        <li key={word}>{word}</li>
    ));

    return (
        <>
        <ul>
            {listOptions}
        </ul>

        <h6>Your correct answers:</h6>

        <ul>
            {correctOptions}
        </ul>
           
        </>
    )
}

export default UserGuesses;