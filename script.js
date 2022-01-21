const quizQuestions = [
    {
        question:   'Who is the father of computer science?',
        a: 'Charles Babbage',
        b: 'Dennis Ritchie',
        c: 'AT&T Bells',
        d: 'Marconi',
        correct: 'a'
    },

    {
        question: 'Which of the following is the framework of Python?',
        a:  'Express.js',
        b:  'Spring',
        c:  'Django',
        d:  'Laravel',
        correct:    'c'
    },

    {
        question: 'Animations and interactivity with the user on web pages can be done by?',
        a: 'JavaScript',
        b: 'C',
        c: 'C#',
        d: 'PHP',
        correct: 'a'
    },

    {
        question: 'Which of the following is the correct syntax to display "Hello World" in an alert box using JavaScript?',
        a: 'alertbox("Hello World");',
        b: 'msg("Hello World");',
        c: 'msgbox("Hello World");',
        d: 'alert("Hello World");',
        correct: 'd'
    },

    {
        question: 'Who is the mother of Computer Science?',
        a: 'Grace Hopper',
        b: 'Ada Lovelace',
        c: 'Marie Curie',
        d: 'Margaret Hamilton',
        correct: 'b'
    }
]

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const answerEls = document.querySelectorAll(".answer");

const submit = document.querySelector('button');

let currentQuestion = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deSelectAnswers();
    const currentQuizDate = quizQuestions[currentQuestion];
    questionEl.innerText = currentQuizDate.question;
    aText.innerText = currentQuizDate.a;
    bText.innerText = currentQuizDate.b;
    cText.innerText = currentQuizDate.c;
    dText.innerText = currentQuizDate.d;
}

function getSelected(){

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) answer = answerEl.id;
    });
    return answer;
}

function deSelectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submit.addEventListener('click', ()=>{

    const selectedAnswer = getSelected();

    if (selectedAnswer === undefined) {
        return;
    }

    const answer = quizQuestions[currentQuestion].correct;
    if (selectedAnswer == answer) {
        score ++;
    }
    if (currentQuestion < quizQuestions.length-1) {
        currentQuestion++;
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>Quiz Complete.
        You scored ${score} out of ${quizQuestions.length}</h2><button onclick="location.reload()">Retake Quiz</button>`;
    }


    // const answer = getSelected();
    // console.log(answer);

    // currentQuestion++;
    // if(currentQuestion < quizQuestions.length){
    //     loadQuiz();
    // }
    // else
    // {
    //     alert('Quiz Completed');
    // }

});