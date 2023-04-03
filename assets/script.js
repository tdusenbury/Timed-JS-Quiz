var quizQuestionsArray = [
    {
        question: "Conditional statements are used to perform different actions based on different conditions and typically include the following term(s) or phrase:",
        answers: ["The symbols less than < and greater than >", "Hoisted by your own petard", "If, else, and/or switch", "Stringify"],
        correct: "If, else, and/or switch"
    },

    {
        question: "Data types like undefined, string, number, and Boolean are called:",
        answers: ["True / False Data Types", "Array Data Types", "For Loops", "Primitive Data Types"]
        correct: "Primitive Data Types"
    },

    {
        question: "An object in JavaScript can have:",
        answers: ["Only Text Values", "Only Numerical Values", "Many Values", "Imaginary Values"]
        correct: "Many Values"
    },

    {
        question: "A JavaScript string, a way to store and manipulate text, contain zero or more characters written inside:",
        answers: ["Curly Brackets", "Equal Signs", "Square Parenthesis", "Quotation Marks"]
        answer: "Quotation Marks"
    },

    {
        question: "To remove the last element from an array in JavaScript, you use which method?",
        answers: ["The Method Process","methodActing()", "The pop() Method","The string() Method"]
        answer: "The pop() Method"
    }
];

//defining elements between html, css, and js start screen
const scoreButton =document.getElementById("#score-button");
const returnHomeButton = document.getElementById("#return-home-button")
const homePage = document.getElementById("start-box")
const startButton = document.getElementById("start-button");
const question = document.getElementById("question");
const quiz = document.getElementById("inside-quiz-container")
const scoreRepot = document.getElementById("score-report");
const scoreList = document.getElementById("score-list");
const aQuestion = document.getElementById("a_question");
const bQuestion = document.getElementById("b_question");
const cQuestion = document.getElementById("c_question");
const dQuestion = document.getElementById("d_question");
const nextButton = document.getElementById("ques-next-btn");


startButton.addEventListener("click", startQuiz);
scoreButton.addEventListener("click", scoreReport);
resetButton.addEventListener("click", resetScores);
returnHomeButton.addEventListener("return-home-button", resetHome)


var playerScore = 0

function scoreListSee() {
    homePage.hidden = true;
    quiz.hidden = true;
    scoreReport.hidden = true;
    returnHomeButton.hidden = false;
    scoreButton.hidden = true;
    //timer.hidden = true;  (UNGREEN)
}

function resetScores() {
    scoreList.hidden = true;
    window.localStorage.clear();
}

var questionIndex = 0;
function fillQuizBox() {
    if (questionIndex >= quizQuestionsArray.length) {recordScore();}
    newQuestion = quizQuestionsArray[questionIndex];
    question.textContent = newQuestion.question;
    a_question.textContent = newQuestion.answers[0]
    b_question.textContent = newQuestion.answers[1]
    c_question.textContent = newQuestion.answers[2]
    d_question.textContent = newQuestion.answers[3]
}



/*let quizStart = 0;
let score = 0;

function startQuiz() { 
    const newQuizData = quizQuestions[quizStart];
    const seeQuiz = document.getElementById("inside-quiz-container");
    const removeStartBox = document.getElementById("start-container");
    seeQuiz.style.display = "flex";
    removeStartBox.style.visibility = "hidden";
    question.innerText = newQuizData.question
    aQuestion.innerText = newQuizData.a
    bQuestion.innerText = newQuizData.b
    cQuestion.innerText = newQuizData.c
    dQuestion.innerText = newQuizData.d
}
function findAnswer() {
    var answer = "";
    const checkAnswer = document.getElementsByClassName("answer");
    for(var i = 0; i < checkAnswer.length; i++) {
        if(checkAnswer[i].checked) {
            answer = checkAnswer[i].value;
            console.log(answer);
            if(answer === quizQuestions[quizStart].answer) {
                quizStart++
                score++
            }else {
                quizStart++;
                alert ("That is the wrong answer.");
            }
        }   
    }
clearAnswers();
startQuiz();
}
function clearAnswers() {
        const checkAnswer = document.getElementsByClassName("answer");
        for(var i = 0; i < checkAnswer.length; i++) {
            checkAnswer[i].checked = false;
        }
}
*/

