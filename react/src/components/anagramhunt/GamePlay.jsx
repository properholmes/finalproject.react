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
    // all the word possibilies based on the character length the user selected in the first view
    const [allWords, setAllWords] = useState(anagrams[wordLength]);
    console.log(allWords);
   
    // list of possible answers in anagram block
    const[possibleWords, setPossibleWords] = useState(props.findRandom(allWords));

    // find the starting word in that anagram block
    const [wordHint, setWordHint] = useState(props.findRandom(possibleWords));

    const [filteredPossible, setFilteredPossible] = useState(() => {
        if (possibleWords && wordHint) {
            return possibleWords.filter((item) => item !== wordHint);
        } else {
            return []; // Return an empty array if either possibleWords or wordHint is undefined
        }
    });

    // words left in the anagram block
    const [wordsLeft, setWordsLeft] = useState(possibleWords.length - 1);
    // user input - set first to an empty sting
    const [inputValue, setInputValue] = useState(''); 
    //empty array for correct answers
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const[blockCorrect, setBlockCorrect]= useState([]);

    const [message, setMessage] = useState('')

    
    //check answer function that sees if word is in anagram block and adds to correct answers array
    const checkAnswer = (userInput) => {
        if (!userInput) return;

        const inList = filteredPossible.includes(userInput);


        if (inList) {
            const filteredArray = filteredPossible.filter((item) => item !== userInput);
            setMessage('')
            setWordsLeft(filteredArray.length);
            props.setScore(props.score + 1);
            // Add user input to correct answers array
            setCorrectAnswers(c =>[...c, userInput]);
            setBlockCorrect(b =>[...b, userInput]);
            
            // Update state to clear input field 
            setInputValue('');
            // Update possible words for the user to type from anagram block
            setFilteredPossible(filteredArray);

                
        } else {
            console.log("not present");
            // Handle wrong guess logic
        }
    };


    // console.log("Correct (block) Answer:" + blockCorrect.length);
    // console.log("Possible Words: " + possibleWords.length + " " +possibleWords);

    if(allWords.length===0) {
        setMessage('Wow! You got all the correct answers. Take a bow 🙇');
        setFilteredPossible(['done']);
    }

    if (blockCorrect.length === possibleWords.length - 1) {
        
        setMessage('🥳 Success! You got all anagrams for this word. Here is another one..')
        const filteredAnagrams = removeFromArrays(wordHint, allWords);

        console.log(filteredAnagrams);
    
        const newWordList = props.findRandom(filteredAnagrams);
        setWordsLeft(w => possibleWords.length - 1);
        const newWord = props.findRandom(newWordList);
      
        setWordHint(w => newWord);
        setPossibleWords(newWordList);
        //check to see if the newWordList is defined before filtering - was running into errors here
        const newPossible =  newWordList.filter((item) => item !== newWord);
        setFilteredPossible(f => [...newPossible]);
        // setAllWords(a => [...filteredAnagrams]);
        setBlockCorrect([]);

    }
    
    //checks if word is in any array in allData if it is - it is removed and filtered from allData
    function removeFromArrays(word, allData) {
        const filteredData = [];

        for (let i = 0; i < allData.length; i++) {
          const childArray = allData[i];
      
          if (!childArray.includes(word)) {
            filteredData.push(childArray);
          }
        }
        setAllWords(filteredData);
        return filteredData;
    }

 


    return (
        <div id="ana-play" className="object-fit-fill solid rounded display-6">
            <Score score={props.score} />
            <Timer />
            <hr />
            <SolveMe wordHint={wordHint} wordLength={wordLength} message={message} />
            <TextInput autofocus={true}
                inputValue={inputValue} // Pass input value as prop
                setInputValue={setInputValue} // Pass function to update input 
                checkAnswer={checkAnswer}
            />
            <Left wordsLeft={filteredPossible.length} />
            <UserGuesses possibleWords={filteredPossible} correctAnswers={correctAnswers} />
        </div>
    );
}

export default GamePlay;
