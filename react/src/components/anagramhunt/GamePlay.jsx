import React, { useState } from 'react';
import Score from "./Score";
import Timer from "./Timer";
import Left from "./Left";
import UserGuesses from "./UserGuesses";
import SolveMe from "./SolveMe";
import TextInput from "./TextInput";
import Keyboard from "./KeyBoard";
import anagrams from "./anagramsArray.js"

function GamePlay(props) {
    const [wordLength, setWordLength] = useState(props.wordLength); 
    const allWords = anagrams[wordLength];
    const [wordAnswers, setWordAnswers] = useState(props.findRandom(allWords));
    const [startingWord, setStartingWord] = useState(props.findRandom(wordAnswers));

    
    
    const[possibleWords, setPossibleWords] = useState(wordAnswers);
    const [wordsLeft, setWordsLeft] = useState(possibleWords.length - 1);
    const [inputValue, setInputValue] = useState(''); // State for input value;
    const [correctAnswers, setCorrectAnswers] = useState([]);
    
   
   
    

    const checkAnswer = (userInput) => {
        const inList = wordAnswers.includes(userInput);

            console.log(startingWord);

        if (inList) {
            //console.log("in List " + wordAnswers.includes(userInput));
            const filteredArray = possibleWords.filter((item) => item !== userInput);
            //console.log(filteredArray);
            setWordsLeft(filteredArray.length);
            props.setScore(props.score + 1);
            // Add user input to correct answers array
            setCorrectAnswers([...correctAnswers, userInput]);
            console.log(correctAnswers);
            // Update state to clear input field and update word list
            setInputValue('');
            setPossibleWords(filteredArray);

            const filteredAnagrams = removeFromArrays(startingWord, allWords);
                
            const smallerArray = filterArray(startingWord, allWords);
            
            console.log(filteredAnagrams);
            console.log(props.findRandom(filteredAnagrams));

            if (props.score === wordAnswers.length) {
                console.log(filteredArray);
                console.log("All correct!")
                const newWordList = props.findRandom(filteredAnagrams);
                setWordAnswers(newWordList);
                console.log(wordAnswers);
                const newWord = props.findRandom(newWordList);
                setStartingWord(newWord);
            }
        } else {
            console.log("not present");
            // Handle wrong guess logic
        }
    };


    

    function removeFromArrays(word, allData) {
        const filteredData = [];
        for (const key in allData) {
            const childArray = allData[key];
            if (!childArray.includes(word)) {             
                filteredData[key] = childArray; // Add child arrays excluding the word         
            }
        }
        return filteredData;
    }

    function filterArray(word, allData) {
        const filteredData = [];
        for (const key in allData) {
            const childArray = allData[key];
            if (childArray.includes(word)) {             
                filteredData[key] = childArray; // Add child arrays excluding the word         
            }
        }
        return filteredData;
    }



    return (
        <div id="ana-play" className="object-fit-fill solid rounded display-6">
            <Score score={props.score} />
            <Timer />
            <hr />
            <SolveMe startingWord={startingWord} wordLength={wordLength} />
            <TextInput
                inputValue={inputValue} // Pass input value as prop
                setInputValue={setInputValue} // Pass function to update input (optional)
                checkAnswer={checkAnswer}
            />
            <Left wordsLeft={wordsLeft} />
            <UserGuesses wordAnswers={wordAnswers} correctAnswers={correctAnswers} />
        </div>
    );
}

export default GamePlay;
