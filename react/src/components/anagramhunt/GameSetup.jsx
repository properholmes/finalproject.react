import anagrams from "./anagramsArray.js"
import SelectInput from "./SelectInput"
import Directions from "./Directions"
import Button from "./AnagramBtn"

function GameSetup (props){

    const options = Object.keys(anagrams);
   
    return (
        <div id="ana-setup" className="display-6">
                    <h1 className="display-2">Anagram Hunt</h1>
                    <SelectInput 
                    label="Word Length"
                    id="word-length"
                    currentValue={props.wordLength}
                    setCurrentValue={props.setWordLength}
                    values={options}/>
                    <Directions />
                    <Button bootstrapClass="btn btn-warning btn-lg" label="Play!" route="/play"/>
        </div>
    )   
}

export default GameSetup