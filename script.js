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
const restartBtn = document.querySelector("#restartButton")
const result = document.querySelector("#result")

let currentIndex = 0
score.textContent = 0

currentQuestion(currentIndex)

function currentQuestion(i) {
    question.textContent = questions[i].question
    createBtn(questions[i].answers)
}

function createBtn(arr) {
    for (let i = 0; i < arr.length; i++) {
        const answerBtn = document.createElement("button")
        answerBtn.textContent = arr[i]
        answerBtn.addEventListener("click", function () {

            if (answerBtn.textContent === questions[currentIndex].correct) {
                alert("Correct")
                score.textContent++
            } else {
                alert("wrong!")
                answerBtn.classList.add("wrongColor")
            }

            for (let i = 0; i < answers.children.length; i++) {
                answers.children[i].disabled = true
                if (answers.children[i].textContent === questions[currentIndex].correct) {
                    answers.children[i].classList.add("correctColor")
                }
            }

            if (currentIndex === questions.length - 1) {
                result.textContent = `Quiz complete! You got ${score.textContent} correct`
                return
            }
        })

        answers.append(answerBtn)
    }
}

nextBtn.addEventListener("click", function() {
    if (currentIndex === questions.length - 1) {
        alert("There are no more questions left!")
        return
    }

    currentIndex++
    answers.textContent = ""
    currentQuestion(currentIndex)
})

restartBtn.addEventListener("click", function() { 
    currentIndex = 0
    score.textContent = 0
    answers.textContent = ""
    currentQuestion(currentIndex)
    result.textContent = ""
})