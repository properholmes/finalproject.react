//import css from './App.css';
import Header from "./components/Header";
import Quotes from "./components/Quotes";
import Card from "./components/Card";
import Footer from "./components/Footer";



function App() {

  const math = {
    title: "Math Facts Practice",
    description: "Fun and effective Math Practice, for all ages! A super fun way to sharpen your math skills and become a whiz with numbers! Ready for the challenge?",
    button: "play-a"
  } 

  const anagram = {
    title: "Anagram Hunt",
    description: "Calling all word wizards! Dive into Anagram Hunt, a game that challenges you to find all the hidden words formed by rearranging the letters of a given word.",
    button: "play-b"
  }


  return (
    <>
    <Header />
      <Quotes />
      <Card data={math}/>
      <Card data={anagram}/>
    <Footer />
    </>
  )
  
}

export default App
