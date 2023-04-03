const quizQuestions = [
    {
        question: "Conditional statements are used to perform different actions based on different conditions and typically include the following term(s) or phrase:",
        a: "The symbols less than < and greater than >",
        b: "Hoisted by your own petard",
        c: "If, else, and/or switch",
        d: "Stringify",
        answer: "c"
    },

    {
        question: "Data types like undefined, string, number, and Boolean are called:",
        a: "True / False Data Types",
        b: "Array Data Types",
        c: "For Loops",
        d: "Primitive Data Types",
        answer: "d"
    },

    {
        question: "An object in JavaScript can have:",
        a: "Only Text Values",
        b: "Only Numerical Values",
        c: "Many Values",
        d: "Imaginary Values",
        answer: "c"
    },

    {
        question: "A JavaScript string, a way to store and manipulate text, contain zero or more characters written inside:",
        a: "Curly Brackets",
        b: "Equal Signs",
        c: "Square Parenthesis",
        d: "Quotation Marks",
        answer: "d"
    },

    {
        question: "To remove the last element from an array in JavaScript, you use which method?",
        a: "The Method Process",
        b: "methodActing()",
        c: "The pop() Method",
        d: "The string() Method",
        answer: "c"
    }
];

//defining elements between html, css, and js start screen

const startButton = document.getElementById("start-button");
const scoreBox = document.getElementById("score-box");
const scoreButton = document.getElementById("score-button");
//defining elements between html, css, and js quiz screen
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
//const answer = document.querySelectorAll(".answer");
const aQuestion = document.getElementById("a_question");
const bQuestion = document.getElementById("b_question");
const cQuestion = document.getElementById("c_question");
const dQuestion = document.getElementById("d_question");
const nextButton = document.getElementById("ques-next-btn");


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", findAnswer)

let quizStart = 0;
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
            if(answer === quizQuestions[quizStart].answer ) {
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





