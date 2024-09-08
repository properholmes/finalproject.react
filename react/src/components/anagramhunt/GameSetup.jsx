import anagrams from "/src/assets/anagramsArray.js"
import SelectInput from "./SelectInput"
import Directions from "./Directions"
import Button from "./Button"

function GameSetup (props){
    const options = Object.keys(anagrams);
   
    return (
        <div id="ana-setup" className="display-6">
                    <SelectInput 
                    label="Word Length"
                    id="word-length"
                    currentValue={props.wordLength}
                    setCurrentValue={props.setWordLength}
                    values={options}/>
                    <Directions />
                    <Button onClick={props.buttonAction} bootstrapClass="btn btn-warning btn-lg" label="Play!" route="/play"/>
        </div>
    )   
}

export default GameSetup