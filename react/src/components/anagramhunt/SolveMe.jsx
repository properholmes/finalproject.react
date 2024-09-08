function SolveMe(props) {
    return (
        <>
         <h5>Guess anagram of the following word:</h5>
         <h2>{props.startingWord}</h2>
         <h4>{props.wordLength} letters</h4>
        </>
       
    )
}

export default SolveMe;
