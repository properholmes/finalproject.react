import Header from "./Header";
import Footer from "./Footer";

function Mathfacts() {

//create global variables for the needed elements
const goBtn = document.getElementById("go-btn");
const mathSetup = document.getElementById("math-setup");
const mathFactsGame = document.getElementById("math-facts-game");
const playAgain = document.getElementById("again-btn");
const mathTimer = document.getElementById("math-timer");
const inGameScore = document.getElementById("score");
const finalScore = document.getElementById("final-score");
const finalView = document.getElementById("final-view");
let gameMode = document.getElementById("game-mode");
let score = 0;


  //create an event listener for the go button
  goBtn.addEventListener("click", function () {
  //hide the game-select screen and show the math game screen
  hideShow(mathSetup, mathFactsGame);
  //get the selected operation
  const operation = document.getElementById("operation").value;

  focusInput("answer");  //focus on the answer input field

  //populate the game-mode element with the selected operation
  gameMode.textContent = operation.toUpperCase();

  createMathProblem();  //create a math problem when the go button is clicked 

  setTimer('math-timer');  //reusable timer function initialized after clicking go button
});

playAgain.addEventListener("click", function () {
  //hide the final view screen and return to mathfacts.html
  hideShow(finalView, mathSetup);
  document.getElementById("message").textContent = "";
  document.getElementById("answer").value = "";
  score = 0;
  inGameScore.textContent = "SCORE: " + score;
});

//create function to use for hiding and showing the different math game screens, etc.
function hideShow(screen1, screen2) {
  screen1.style.display = "none";
  screen2.style.display = "block";
};


function focusInput(fieldID) {
  //focus on answer input field
  const ansInput = document.getElementById(fieldID);
  ansInput.focus();
}

function createMathProblem() {

  //generate two random numbers between 1 and 10
  let num1 = randInt(1, 10);
  let num2 = randInt(1, 10);


  const operation = document.getElementById("operation").value;
  //print out the math problme and change values for num1 and num2 as needed for subtraction and division
  function printProblem() {
    switch (operation) {

      case "addition":
        const addProblem = `${num1} + ${num2} =`;
        return addProblem;

      case "subtraction":
        // make sure the subtraction problem has a positive answer
        if (num1 < num2) {
          let temp = num1;
          num1 = num2;
          num2 = temp;
        }
        const subProblem = `${num1} - ${num2} =`;
        return subProblem;

      case "multiplication":
        const multProblem = `${num1} * ${num2} =`;
        return multProblem;

      case "division":
        // make sure the division problem has a whole number answer
        num2 = num1 * num2;
        const divProblem = `${num2} / ${num1} =`;
        return divProblem;

      default:
        return "Alert: Invalid operation!";
    }
  }

  //store the math problem in a variable
  let problem = printProblem();

  //populate the problem element with the math problem
  document.getElementById("math-problem").textContent = problem;


  function solveProblem() {
    // switch through the operation and return the answer
    switch (operation) {
      case "addition":
        return num1 + num2;

      case "subtraction":
        return num1 - num2;

      case "multiplication":
        return num1 * num2;

      case "division":
        return num2 / num1;

      default:
        return "Alert: Invalid operation!";
    }
  }

  //store the answer in a variable
  let answer = solveProblem();

  function getUserAnswer() {
    // Get answer input field
    let answerField = document.getElementById('answer');

    let typedValue = 0;
    // Listen for keyup (when the user types) event in answer input field
    answerField.addEventListener("keyup", function (event) {
      // value typed assigned to a variable
      // change string to number
      typedValue = event.target.value;
      //check if the user's answer is correct
      checkAnswer(typedValue, answer);

    });

    //get all the buttons with the className name "int"
    let buttons = document.getElementsByclassNameName("int");

    // Declare outside the function because it's used outside the function
    let buttonValue;

    function getButtonValue() {
      // loop through the buttons and add an event listener to each
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
          // assign the value of the button clicked to buttonValue
          buttonValue = buttons[i].textContent;

          if (buttonValue !== "CLEAR") {
            typedValue += buttonValue;

            typedValue = parseInt(typedValue);

            answerField.value = typedValue;
            focusInput("answer");

            // //check if the user's answer is correct
            checkAnswer(typedValue, answer);
            return answerField.value;
          }

          else {

            typedValue = 0;
            return;
          }

        });
      }
    }

    getButtonValue();


    document.getElementById("clearBtn").addEventListener("click", function () {
      clearAnswer();

    });

  }

  getUserAnswer();


};


//check if the user's answer is correct
function checkAnswer(userAnswer, actualAnswer) {
  //get the user's answer
  //compare the user's answer to the correct answer
  if (userAnswer == actualAnswer) {
    //if the answer is correct, display a message and generate a new problem
    document.getElementById("message").textContent = "Correct!";
    document.getElementById("message").style.color = "green";
    resetProblem();

    //increment the score
    score++;
    //display the score
    document.getElementById("score").textContent = "SCORE: " + score;

  } else {
    //if the answer is incorrect, display a message and clear the answer field
    document.getElementById("message").textContent = "Try again!";
    document.getElementById("message").style.color = "red";

  }
  return score
}

function setTimer(element) {
  // variables to store time remaining and timer reference
  let timeRemaining = 30;
  let timer;

  function updateTime() {
    timeRemaining = timeRemaining - 1;
    document.getElementById(element).textContent = "TIME LEFT: " + timeRemaining;

    // check if time is up
    if (timeRemaining === 0) {
      clearInterval(timer);
      hideShow(mathFactsGame, finalView);
      const selectedGameMode = document.getElementById("selectedGameMode")
      const operation = document.getElementById("operation").value;
      selectedGameMode.textContent = operation.toUpperCase();

      finalScore.textContent = score;
    }
  }

  // start the timer
  timer = setInterval(updateTime, 1000);
}

function randInt(low, high) {
  const rndDec = Math.random();
  return Math.floor(rndDec * (high - low + 1) + low);
}

function clearAnswer() {

  document.getElementById("answer").value = "";
  focusInput("answer");
}

function resetProblem() {
  //clear the answer field
  clearAnswer();
  //create a new math problem
  createMathProblem();
}

    return (
        <>
        {<Header /> }
        <main>
            <div id="math-container">
            <h2 id="math-title">Math Facts Practice</h2>
            <div id="math-setup">
                <form id="math-form">
                <div id="selction-operation">
                    <label htmlFor="operation">Operation:</label>
                    <select id="operation" name="operation">
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
                <button type="submit" id="go-btn">Go</button>
            </div>

            <div id="math-facts-game">
                <h3 id="game-mode"></h3>
                <h3 id="math-problem"></h3>
                <form>
                <input type="text" id="answer" placeholder="Enter your answer here"/>
                </form>

                <table>
                <tr>
                    <td>
                    <button className="int" value="1">1</button>
                    </td>
                    <td>
                    <button className="int">2</button>
                    </td>
                    <td>
                    <button className="int">3</button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button className="int">4</button>
                    </td>
                    <td>
                    <button className="int">5</button>
                    </td>
                    <td>
                    <button className="int">6</button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button className="int">7</button>
                    </td>
                    <td>
                    <button className="int">8</button>
                    </td>
                    <td>
                    <button className="int">9</button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button className="int">0</button>
                    </td>
                    <td colspan="2">
                    <button id="clearBtn" className="int">CLEAR</button>
                    </td>
                </tr>
                </table>
                <h3 id="score"></h3>
                <h3 id="message"></h3>
                <h3 id="math-timer"></h3>
            </div>
            <div id="final-view">
                <h3 id="selectedGameMode"></h3>
                <h5>Time's up!</h5>
                <h3>Your final score is:</h3>
                <h2 id="final-score"></h2>
                <button type="play-again" id="again-btn">Play Again</button>
            </div>
            </div>
        </main>
        {<Footer />}
        </>

    )
  }
  
  export default Mathfacts