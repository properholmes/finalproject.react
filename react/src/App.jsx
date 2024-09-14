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
import './anaApp.css'




function App() { 

  //include the findRandom function and constants in the App component for use with anagram-hunt
  function findRandom(value) {
    if (value) {
      const random = Math.floor(Math.random() * value.length)
      const randomSelected = value[random];
      return randomSelected;
    }
      return 0;
    
  }

  const [wordLength, setWordLength] = useState('5');
  const wordAnswers = findRandom(anagrams[wordLength]);
  const [score, setScore] = useState(0);
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
    </Routes>
    <Footer />
    </>
  )
  
}

export default App
