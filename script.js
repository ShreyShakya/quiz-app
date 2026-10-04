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

let currentIndex = 0
score.textContent = 0

currentQuestion(currentIndex)

function currentQuestion(i) {
    question.textContent = questions[i].question
    createBtn(questions[i].answers)
}

function createBtn(arr) {
    let hasAnswered = false
    for (let i = 0; i < arr.length; i++) {
        const answerBtn = document.createElement("button")
        answerBtn.textContent = arr[i]
        answerBtn.addEventListener("click", function () {

            if (answerBtn.textContent === questions[currentIndex].correct) {
                alert("Correct")
                hasAnswered = true
                score.textContent++
            } else {
                alert("wrong!")
                hasAnswered = true
            }

            for (let i = 0; i < answers.children.length; i++) {
                answers.children[i].classList.add("answered")
                answers.children[i].disabled = true
            }
        })
        answers.append(answerBtn)
    }
}

nextBtn.addEventListener("click", function () {
    if (currentIndex === questions.length - 1) {
        alert("There are no more questions left!")
        return
    }
    currentIndex++
    answers.textContent = ""
    currentQuestion(currentIndex)
})