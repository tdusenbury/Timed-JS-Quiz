const quizQuestions = [
    {
        question: "Conditional statements are used to perform different actions based on different conditions and typically include the following term(s) or phrase:",
        a: "The symbols less than < and greater than >",
        b: "Hoisted by your own petard",
        c: "If, else, and/or switch",
        d: "Stringify",
        correct: "c",
    },

    {
        question: "Data types like undefined, string, number, and Boolean are called:",
        a: "True / False Data Types",
        b: "Array Data Types",
        c: "For Loops",
        d: "Primitive Data Types",
        correct: "d",
    },

    {
        question: "An object in JavaScript can have:",
        a: "Only Text Values",
        b: "Only Numerical Values",
        c: "Many Values",
        d: "Imaginary Values",
        correct: "c",
    },

    {
        question: "A JavaScript string, a way to store and manipulate text, contain zero or more characters written inside:",
        a: "Curly Brackets",
        b: "Equal Signs",
        c: "Square Parenthesis",
        d: "Quotation Marks",
        correct: "d",
    },

    {
        question: "To remove the last element from an array in JavaScript, you use which method?",
        a: "The Method Process",
        b: "methodActing()",
        c: "The pop() Method",
        d: "The string() Method",
        correct: "c",
    }
];

//defining elements between html, css, and js start screen
const startBox = document.getElementById("start-box");
const startButton = document.getElementById("start-button");
const scoreBox = document.querySelector(".score-box");
const scoreButton = document.querySelector("score-button");
//defining elements between html, css, and js quiz screen
const quiz = getElementById("quiz");
const question = document.getElementById("question");
const answer = document.querySelectorAll(".answer");
const aQuestion = document.getElementById("a-question");
const bQuestion = document.getElementById("b-question");
const cQuestion = document.getElementById("c-question");
const dQuestion = document.getElementById("d-question");
const nextButton = document.getElementById("ques-next-btn");


startButton.addEventListener("click", startQuiz);

function startQuiz() { 
    const seeQuiz = document.getElementById("quiz");
    const removeStartBox = document.getElementById("start-box");
    seeQuiz.style.display="flex";
    removeStartBox.style.visibility="hidden";
    const newQuizData = quizData[newQuiz]
    question.innerText = newQuizData.question;
    aQuestion.innerText = newQuizData.a;
    bQuestion.innerText = newQuizData.b;
    cQuestion.innerText = newQuizData.c;
    dQuestion.innerText = newQuizData.d;
}

function deselectAnswers() {
    answer.forEach(answer => answer.checked = false)
}

function getSelected() {
    let answer
    answer.forEach(answer => {
        if(answer.checked) {
            answer = answer.id
        }
    })
    return answer
}



































/*var timerElement = document.getElementById('countdown');
var timerElement = document.getElementById('main');

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timerElement.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerElement.textContent = timeLeft + 'second remaining';
            timeLeft--;
        } else {
            timerElement.textContent= '' + 'QUIZ OVER'
        } 
    }, 60000);
}
