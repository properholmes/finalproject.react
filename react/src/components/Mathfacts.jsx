import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';

function Mathfacts() {
  // State variables to manage game state
  const [score, setScore] = useState(0);            // Tracks the player's score
  const [operation, setOperation] = useState("addition"); // Current math operation selected by the player
  const [problem, setProblem] = useState("");       // Current math problem presented to the player
  const [userAnswer, setUserAnswer] = useState(""); // User's input answer
  const [timer, setTimer] = useState(30);           // Countdown timer starting at 30 seconds
  const [isGameActive, setIsGameActive] = useState(false); // Tracks whether the game is currently active
  const [isFinalView, setIsFinalView] = useState(false);   // Tracks whether to show the final score view

  // Effect to manage the countdown timer
  useEffect(() => {
    if (isGameActive && timer > 0) {
      // Set an interval to decrease the timer every second
      const timerId = setInterval(() => {
        setTimer(prev => prev - 1); // Decrease the timer
      }, 1000);

      // Cleanup function to clear the interval on component unmount or when conditions change
      return () => clearInterval(timerId);
    } else if (timer === 0) {
      endGame(); // End the game when the timer reaches zero
    }
  }, [isGameActive, timer]); // Depend on game active state and timer

  // Function to start the game
  const startGame = () => {
    setIsGameActive(true); // Activate the game state
    setScore(0);           // Reset the score
    setTimer(30);         // Reset the timer
    createMathProblem();   // Generate the first math problem
  };

  // Function to end the game
  const endGame = () => {
    setIsGameActive(false); // Deactivate the game state
    setIsFinalView(true);   // Show the final score view
  };

  // Function to create a new math problem based on the selected operation
  const createMathProblem = () => {
    const num1 = randInt(1, 10); // Generate a random number between 1 and 10
    const num2 = randInt(1, 10); // Generate another random number

    let newProblem; // Variable to store the generated problem

    // Switch statement to create the problem based on the selected operation
    switch (operation) {
      case "addition":
        newProblem = `${num1} + ${num2} =`; // Format the addition problem
        break;
      case "subtraction":
        if (num1 < num2) [num1, num2] = [num2, num1]; // Ensure no negative results
        newProblem = `${num1} - ${num2} =`; // Format the subtraction problem
        break;
      case "multiplication":
        newProblem = `${num1} * ${num2} =`; // Format the multiplication problem
        break;
      case "division":
        newProblem = `${num1 * num2} / ${num1} =`; // Ensure the division is valid
        break;
      default:
        newProblem = "Invalid operation!"; // Fallback for invalid operations
    }
    setProblem(newProblem); // Update the problem state with the new problem
  };

  // Function to check the user's answer
  const checkAnswer = () => {
    const correctAnswer = evaluateAnswer(problem); // Get the correct answer
    if (parseInt(userAnswer) === correctAnswer) { // Compare user's answer to the correct answer
      setScore(prev => prev + 1); // Increment score for correct answer
      setUserAnswer(""); // Clear the input field
      createMathProblem(); // Generate a new problem
    } else {
      // Handle incorrect answer feedback (to be implemented)
    }
  };

  // Function to evaluate the answer based on the problem
  const evaluateAnswer = (problem) => {
    const [left, operator, right] = problem.split(' '); // Split the problem into components
    const num1 = parseInt(left); // Convert the left number to an integer
    const num2 = parseInt(right); // Convert the right number to an integer

    // Switch statement to return the correct answer based on the operation
    switch (operator) {
      case '+':
        return num1 + num2; // Return sum
      case '-':
        return num1 - num2; // Return difference
      case '*':
        return num1 * num2; // Return product
      case '/':
        return num1 / num2; // Return quotient
      default:
        return null; // Fallback if operation is invalid
    }
  };

  // Function to generate a random integer between low and high (inclusive)
  const randInt = (low, high) => Math.floor(Math.random() * (high - low + 1) + low);

  return (
    <>
      <main>
        <div id="math-container">
          <h2 id="math-title">Math Facts Practice</h2>
          {/* Setup screen for selecting operation */}
          {!isGameActive && !isFinalView && (
            <div id="math-setup">
              <form id="math-form">
                <div id="selection-operation">
                  <label htmlFor="operation">Operation:</label>
                  {/* Dropdown for selecting math operation */}
                  <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    id="operation"
                    name="operation"
                  >
                    <option value="addition">Addition</option>
                    <option value="subtraction">Subtraction</option>
                    <option value="multiplication">Multiplication</option>
                    <option value="division">Division</option>
                  </select>
                </div>
              </form>
              <div id="directions">
                <ul>
                  <li>1. Select Operation.</li>
                  <li>2. Press <strong>Go.</strong></li>
                  <li>3. How many problems can you solve in 30 seconds?</li>
                </ul>
              </div>
              {/* Button to start the game */}
              <button onClick={startGame} id="go-btn">Go</button>
            </div>
          )}
          {/* Game screen where problems are presented */}
          {isGameActive && (
            <div id="math-facts-game">
              <h3 id="game-mode">{operation.toUpperCase()}</h3>
              <h3 id="math-problem">{problem}</h3>
              {/* Form for user input */}
              <form onSubmit={(e) => { e.preventDefault(); checkAnswer(); }}>
                <input
                  type="text" value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter your answer here"
                  id="answer" autoComplete="off" autoFocus
                />
              </form>
              {/* Display current score and timer */}
              <h3 id="score">SCORE: {score}</h3>
              <h3 id="math-timer">TIME LEFT: {timer}</h3>
              <h3 id="message"></h3>
            </div>
          )}
          {/* Final score view after the game ends */}
          {isFinalView && (
            <div id="final-view">
              <h3 id="selectedGameMode">{operation.toUpperCase()}</h3>
              <h5>Time's up!</h5>
              <h3>Your final score is:</h3>
              <h2 id="final-score">{score}</h2>
              {/* Button to reset the game */}
              <button onClick={() => setIsFinalView(false) & setIsGameActive(false)} id="again-btn">Play Again</button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Mathfacts;
