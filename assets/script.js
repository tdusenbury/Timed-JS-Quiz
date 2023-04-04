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
const scoreList = document.getElementById("score-list");
const finalScorePage = document.getElementById("top-score-container");
const scoreData = document.querySelector(".score-data")
var startButton = document.getElementById("start-button");
const scoreButton =document.getElementById("score-button");
const homePage = document.getElementById("start-box");
const answerCheck = document.getElementById("winner-loser");
const finalAnswer = document.getElementById("finalAnswer");
const question = document.getElementById("question");
const questionList = document.getElementById("question-list");
const quizPage = document.getElementById("quiz-container");
var timerEl = document.getElementById("timer");
const initialEntry = document.getElementById("score-list");
var scoreReportCard = document.getElementById("score-report-container");
startButton.addEventListener('click', startQuiz);
scoreButton.addEventListener("click", scoreReportPage);
resetScoreBtn.addEventListener("click", resetScore);
returnHomeBtn.addEventListener("click", homePage);
const initialsBtn = document.getElementById("final-score-initials-button");
var initials = document.getElementById("initials");
const finalScore = document.getElementById("final-score");


var playerScore = 0;

function scoreReportPage() {
    finalScore.textContent = "Final score: " + finalScore;
    homePage.style.visibility = "hidden";
    quizPage.style.visibility = "hidden";
    initialEntry.style.visibility = "hidden";
    scoreReportCard.style.display = "flex";
    returnHomeBtn.style.display = "flex";
    scoreButton.style.visibility = "hidden";
    timer.style.visibility = "hidden";
    window.location.reload();
}

initialsBtn.addEventListener("click", scoreReportPage); 

function displayFinalScore () {
    localStorage.setItem(inputInitials, value, score);
};


function resetScore() {
    scoreList.hidden = true;
    window.localStorage.clear();
}

function startQuiz() {
    homePage.style.visibility = "hidden";
    quizPage.style.display = "flex";
    scoreReportCard.style.visibility = "hidden";
    returnHomeBtn.style.visibility = "hidden";
    scoreButton.style.display = "flex";
    startTimer();
    fillQuizBox();
}

var checkAnswerButton = document.querySelectorAll(".checkAnswerButton");
    for(x = 0; x <checkAnswerButton.length; x++){
        checkAnswerButton[x].addEventListener("click", function(event) {
            if (event.target.innerText !== quizQuestionsArray[questionIndex].correctAnswer) {
                answerStatus.textContent = "Incorrect";
            }
            if (event.target.innerText == quizQuestionsArray[questionIndex].correctAnswer) {
                answerStatus.textContent = "Correct"
            }
            questionIndex++
            fillQuizBox()
        });
    }

    var questionIndex = 0;
    function fillQuizBox() {
        if (questionIndex >= quizQuestionsArray.length) {recordScore();}
        newQuestion = quizQuestionsArray[questionIndex];
        question.innerText = newQuestion.questionText;
        a_question.innerText = newQuestion.answers[0]
        b_question.innerText = newQuestion.answers[1]
        c_question.innerText = newQuestion.answers[2]
        d_question.innerText = newQuestion.answers[3]
    }
    var secCount = 30;
    let counter;

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

function resetHome() {
    homePage.style.display = "flex";
    quiz.style.visibility = "hidden";
    scoreList.style.visibility = "hidden";
    scoreReportCard.style.visibility = "hidden";
    returnHomeButton.style.visibility = "hidden";
    scoreButton.style.display = "flex";
    window.location.reload();
}
