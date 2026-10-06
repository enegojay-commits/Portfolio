// =========================
// QUIZ QUESTIONS
// =========================

const questions = [
    {
        question: "What is the capital of the Philippines?",
        answers: [
            { text: "Manila", correct: true },
            { text: "Cebu", correct: false },
            { text: "Davao", correct: false },
            { text: "Baguio", correct: false }
        ]
    },

    {
        question: "Which language is used to style a website?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    },

    {
        question: "Which language adds interaction to a website?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "SQL", correct: false }
        ]
    },

    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Modern Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlink Text Management Language", correct: false }
        ]
    },

    {
        question: "Which one is a programming language?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Photoshop", correct: false }
        ]
    }
];


// =========================
// GET HTML ELEMENTS
// =========================

const questionElement = document.querySelector(".question");
const questionNumberElement = document.querySelector(".question-number");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next-button");
const feedbackElement = document.querySelector(".feedback");
const progressElement = document.querySelector(".progress");

const resultElement = document.querySelector(".result");
const scoreElement = document.querySelector(".score");
const restartButton = document.querySelector(".restart-button");


// =========================
// QUIZ VARIABLES
// =========================

let currentQuestionIndex = 0;
let score = 0;


// =========================
// SHOW QUESTION
// =========================

function showQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    questionNumberElement.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

        progressElement.style.width =
    `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    questionElement.textContent = currentQuestion.question;

    answerButtons.innerHTML = "";

    feedbackElement.textContent = "";

    currentQuestion.answers.forEach((answer) => {

        const button = document.createElement("button");

        button.textContent = answer.text;

        button.addEventListener("click", () => {

            const allButtons =
                answerButtons.querySelectorAll("button");

            allButtons.forEach((button) => {
                button.disabled = true;
            });

            nextButton.disabled = false;


            if (answer.correct) {

    button.style.background = "#22c55e";

    feedbackElement.textContent = "✅ Correct!";
    feedbackElement.style.color = "#22c55e";

    score++;

} else {

    button.style.background = "#ef4444";

    feedbackElement.textContent = "❌ Incorrect!";
    feedbackElement.style.color = "#ef4444";

    // Find and highlight the correct answer
    const allButtons =
        answerButtons.querySelectorAll("button");

    allButtons.forEach((button) => {

        const correctAnswer =
            currentQuestion.answers.find(
                (answer) => answer.correct
            );

        if (button.textContent === correctAnswer.text) {
            button.style.background = "#22c55e";
        }

    });

}

        });

        answerButtons.appendChild(button);

    });
}


// =========================
// NEXT BUTTON
// =========================

nextButton.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// =========================
// SHOW RESULT
// =========================

function showResult() {

    questionElement.style.display = "none";
    questionNumberElement.style.display = "none";
    answerButtons.style.display = "none";
    nextButton.style.display = "none";

    resultElement.style.display = "block";

    scoreElement.textContent =
        `Your score: ${score} / ${questions.length}`;

}


// =========================
// RESTART QUIZ
// =========================

restartButton.addEventListener("click", () => {

    currentQuestionIndex = 0;
    score = 0;

    questionElement.style.display = "block";
    questionNumberElement.style.display = "block";
    answerButtons.style.display = "flex";
    nextButton.style.display = "block";

    resultElement.style.display = "none";

    showQuestion();

});


// =========================
// START QUIZ
// =========================

resultElement.style.display = "none";

showQuestion();