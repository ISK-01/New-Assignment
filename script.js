const quizData = [
    {
        question: "Who is the CEO of BOAT?",
        a: "Aman Gupta",
        b: "Anupam Mittal",
        c: "Ghazal Alagh",
        d: "Piyush Bansal",
        correct: "a"
    },
    {
        question: "What is motto of BMW?",
        a:"Move with Meaning",
        b:"A Diamond is Forever",
        c:"The Ultimate Driving machine",
        d:"Vorsprung dutch technik",
        correct:"c"
    },
    {
        question:"who is father of Disney?",
        a:"Jethalal",
        b:"Walt disney",
        c:"Ajay Devgan",
        d:"Elon Musk",
        correct:"b"
    },

    
];
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <ul class="options">
            <li><input type="radio" name="answer" value="a"> ${currentQuizData.a}</li>
            <li><input type="radio" name="answer" value="b"> ${currentQuizData.b}</li>
            <li><input type="radio" name="answer" value="c"> ${currentQuizData.c}</li>
            <li><input type="radio" name="answer" value="d"> ${currentQuizData.d}</li>
        </ul>
    `;
}

submitButton.addEventListener('click', () => {
    const answerElements = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;

    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            selectedAnswer = answerElement.value;
        }
    });

    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = '';
            submitButton.style.display = 'none';
            resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
        }
    } else {
        alert('Please select an answer!');
    }
});

