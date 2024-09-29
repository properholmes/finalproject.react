import Message from "./Message";

function SolveMe(props) {
    return (
        <>
            <Message message={props.message}/>
         <h5>Guess anagram of the following word:</h5>
     
         <h2>{props.wordHint}</h2>
         <h4>{props.wordLength} letters</h4>
        </>
       
    )
}

export default SolveMe;
