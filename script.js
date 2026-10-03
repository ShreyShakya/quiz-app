const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    },
    {
        question: "How many continents are there?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "Which language runs in a web browser?",
        answers: ["Python", "Java", "JavaScript", "C++"],
        correct: "JavaScript"
    }
];

const question = document.querySelector("#question")
const answers = document.querySelector("#answers")
const score = document.querySelector("#score")
const nextBtn = document.querySelector("#nextButton")

currentQuestion(questions)
score.textContent = 0

function currentQuestion(arr) {
    question.textContent = questions[0].question
    createBtn(questions[0].answers)
}

function createBtn(arr) {
    for (let i = 0; i < arr.length; i++) {
        const answerBtn = document.createElement("button")
        answerBtn.textContent = arr[i]
        answerBtn.addEventListener("click", function () {
            if (answerBtn.textContent === questions[i].correct) {
                alert("Correct")
                score.textContent++
            } else {
                alert("try again")
            }
        })
        answers.append(answerBtn)
    }
}