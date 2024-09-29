import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import anagrams from "./components/anagramhunt/anagramsArray.js";
import Footer from "./components/Footer";
import GamePlay from './components/anagramhunt/GamePlay';
import GameScore from './components/anagramhunt/GameScore';
import GameSetup from './components/anagramhunt/GameSetup';
import Header from "./components/Header";
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import './anaApp.css'


function App() { 

  // find a random index in an array
  function findRandom(array) {
    if (array) {
      const random = Math.floor(Math.random() * array.length)
      const randomSelected = array[random];
      return randomSelected;
    }
      return 0;
  }

  // set the initial wordlength to 5 
  const [wordLength, setWordLength] = useState('5');
  // set the first block of anagram words to a random block of 5 characters
  const [wordAnswers, setWordAnswer] = findRandom(anagrams[wordLength]);
  // set the initial score to 0 - need the score to persist in GamePlay and GameScore - so set in parent to avoid change
  const [score, setScore] = useState(0);
  // get length of anagram block and subtract 1 because we will show the user one of the words as a hint
  const [wordsLeft, setWordsLeft] = useState(wordAnswers.length - 1);


  return (
    <>
    <Header />
    <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/anagramhunt" element={
          <GameSetup
          wordLength={wordLength}
          setWordLength={setWordLength} />
          }>
        </Route>
        <Route exact path="/play" element={
          <GamePlay 
          score={score}
          setScore={setScore}
          wordAnswers={wordAnswers}
          wordLength={wordLength}
          wordsLeft={wordsLeft}
          findRandom= {findRandom}/>
        }>
        </Route>
        <Route exact path="/score" element={
          <GameScore score={score}/>
        }>          
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
    </Routes>
    <Footer />
    </>
  )
  
}

export default App
