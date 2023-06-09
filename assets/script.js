var quizQuestionsArray = [
    {
        questionText: "Conditional statements are used to perform different actions based on different conditions and typically include the following term(s) or phrase:",
        answers: ["The symbols less than < and greater than >", "Hoisted by your own petard", "If, else, and/or switch", "Stringify"],
        correctAnswer: "If, else, and/or switch",
    },

    {
        questionText: "Data types like undefined, string, number, and Boolean are called:",
        answers: ["True / False Data Types", "Array Data Types", "For Loops", "Primitive Data Types"],
        correctAnswer: "Primitive Data Types",
    },

    {
        questionText: "An object in JavaScript can have:",
        answers: ["Only Text Values", "Only Numerical Values", "Many Values", "Imaginary Values"],
        correctAnswer: "Many Values",
    },

    {
        questionText: "A JavaScript string, a way to store and manipulate text, contain zero or more characters written inside:",
        answers: ["Curly Brackets", "Equal Signs", "Square Parenthesis", "Quotation Marks"],
        correctAnswer: "Quotation Marks",
    },

    {
        questionText: "To remove the last element from an array in JavaScript, you use which method?",
        answers: ["The Method Process","methodActing()", "The pop() Method","The string() Method"],
        correctAnswer: "The pop() Method",
    }
];

const returnHomeBtn = document.getElementById("return-home-button");
const resetScoreBtn = document.getElementById("reset-button");
var startButton = document.getElementById("start-button");
const scoreButton =document.getElementById("score-button");
const homePage = document.getElementById("start-box");
const answerCheck = document.getElementById("winner-loser");
const question = document.getElementById("question");
const quizPage = document.getElementById("quiz-container");
var timerEl = document.getElementById("timer");
var scoreReportContainer = document.getElementById("score-report-container");
const initialsBtn = document.getElementById("final-score-initials-button");
const initials = document.getElementById("initials");
const finalScore = document.getElementById("final-score");
const message = document.getElementById("answer");
var topScoreContainer = document.getElementById("top-score-container");
var scoreList = document.getElementById("score-list");

var playerScore = 0;
var questionIndex = 0;
var secCount = 60;
let counter;
var correctAnswer;

startButton.addEventListener('click', startQuiz);
scoreButton.addEventListener("click", topScorePage);
resetScoreBtn.addEventListener("click", resetScore);
returnHomeBtn.addEventListener("click", resetHome);
initialsBtn.addEventListener("click", saveFinalScore);

const quizContainer = document.getElementById("inside-quiz-container");
quizContainer.addEventListener('click', checkAnswerButton)

function startQuiz() {
  showQuizPage
  var timeLeft = 60;
  timerEl.textContent = timeLeft;
  homePage.style.visibility = "hidden";
  quizPage.style.display = "flex";
  scoreReportContainer.style.visibility = "hidden";
  returnHomeBtn.style.visibility = "hidden";
  scoreButton.style.display = "flex";
  startTimer();
  fillQuizBox();
}

function fillQuizBox() {
  if (questionIndex >= quizQuestionsArray.length) {
    recordScore();
    return;
  }
  var newQuestion = quizQuestionsArray[questionIndex];
  question.innerText = newQuestion.questionText;
  correctAnswer = newQuestion.correctAnswer;
  a_question.innerText = newQuestion.answers[0];
  b_question.innerText = newQuestion.answers[1];
  c_question.innerText = newQuestion.answers[2];
  d_question.innerText = newQuestion.answers[3];
}
 
function startTimer() {
  counter =setInterval(timer,1000);

  function timer() {
    secCount--;
    timerEl.innerText = "" + secCount;
      if(secCount == 0) {
          clearInterval(counter);
          resetScore();
      }
  }
}

function recordScore() {
clearInterval(counter);
  if(secCount > 0 && questionIndex >= quizQuestionsArray.length) {
    answerCheck.textContent=`Well Done! Your Final Score Is: ${secCount}`;
    finalScoreValue = secCount;
    setTimeout(scoreReportPage, 1000);
  } else {
    answerCheck.textContent=`No Good! Try Again!!`;
  } 
}

function checkAnswerButton(event) {
  const choice = event.target;
  if (choice.matches("p")){
    if (choice.textContent === correctAnswer) {
      message.textContent = "Correct Answer!";
    } else {
      message.textContent = "Wrong! You lose 15 seconds!";
      secCount -=15;
    }
    questionIndex++;
    setTimeout(fillQuizBox, 1000);
  }
}

function scoreReportPage() {
    scoreReportContainer.style.display = "block";
    scoreReportContainer.style.visibility = "visible";
    console.log("I work!!!")
    finalScore.textContent = "Final score: " + finalScoreValue;
    homePage.style.visibility = "hidden";
    quizPage.style.visibility = "hidden";
    returnHomeBtn.style.display = "visible";
    scoreButton.style.visibility = "hidden";
    timer.style.visibility = "hidden";
    //topScorePage();
}

function topScorePage() {
  const scores = JSON.parse(localStorage.getItem("scores"));
  console.log(scores)
  topScoreContainer.style.display = "block";
  topScoreContainer.style.visibility = "visible";
  homePage.style.visibility = "hidden";
  quizPage.style.visibility = "hidden";
  returnHomeBtn.style.visibility = "visible";
  scoreButton.style.visibility = "hidden";
  timer.style.visibility = "hidden";
  scoreList.innerHTML = "";
  for (let i=0; i<scores.length; i++) {
    let li = document.createElement("LI");
    li.textContent = scores[i].initials + " "+ scores[i].score;
    scoreList.appendChild(li);
    console.log(scores[i].initials + " " + scores[i].score)
  }
  console.log("top score page works")
  // initialsBtn.style.visibility = "visible";
  //returnHomeBtn.style.display = "flex";
}

function saveFinalScore(event) {
  event.preventDefault();
    playerScore = finalScore.textContent;
    var scores = JSON.parse(localStorage.getItem("scores"));
    if (!scores) {
      scores = [];
    }
    scores.push({initials: initials.value, score: finalScoreValue});
    localStorage.setItem("scores", JSON.stringify(scores));
    scoreReportContainer.style.display = "none";
    scoreReportContainer.style.visibility = "hidden";
    topScorePage();
  }
  
function resetScore() {
    //initialEntry.hidden = true;
  localStorage.clear();
  document.getElementById("score-list").innerHTML = "";

}

function resetHome() {
    homePage.style.display = "none";
    quizPage.style.visibility = "hidden";
    scoreList.style.visibility = "hidden";
    scoreReportContainer.style.visibility = "hidden";
    returnHomeBtn.style.visibility = "hidden";
    scoreButton.style.display = "flex";
    window.location.reload();
}

// Define variables for each page/screen
 let startPage = document.getElementById("start-container");
// const scoreReportPage = document.getElementById("score-report-container");
//const topScorePage = document.getElementById("top-score-container");

// Define functions to show and hide each page/screen
function showStartPage() {
  startPage.style.display = "block";
  quizPage.style.display = "none";
  scoreReportPage.style.display = "none";
  topScorePage.style.display = "none";
}

function showQuizPage() {
  startPage.style.display = "none";
  quizPage.style.display = "block";
  scoreReportPage.style.display = "none";
  topScorePage.style.display = "none";
}

// function showScoreReportPage() {
//   startPage.style.display = "none";
//   quizPage.style.display = "none";
//   scoreReportPage.style.display = "block";
//   topScorePage.style.display = "none";
// }

  

  