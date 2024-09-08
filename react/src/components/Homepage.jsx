import Quotes from "./Quotes"
import Card from "./Card"

function Homepage(props) { 

    const math = {
        title: "Math Facts Practice",
        description: "Fun and effective Math Practice, for all ages! A super fun way to sharpen your math skills and become a whiz with numbers! Ready for the challenge?",
        src: "../src/MathFacts/Math.html"
      } 
    
      const anagram = {
        title: "Anagram Hunt",
        description: "Calling all word wizards! Dive into Anagram Hunt, a game that challenges you to find all the hidden words formed by rearranging the letters of a given word.",
        src: "tbd"
      }
    
    return (
        <>
        <Quotes />
        <Card data={math}/>
        <Card data={anagram}/>
        </>
    )
}

export default Homepage