const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const answerEls = document.querySelectorAll(".answer");
const checkAnsEls = document.querySelectorAll(".checkbox");


const submit = document.querySelector('button');

let quizLength = prompt('Enter the number of questions you want to solve:');
quizLength = parseInt(quizLength);

let score = 0;
let firstVal = undefined;
let secondVal = undefined;
let correctAnswer = undefined;
let operator = undefined;
let correctOperation = undefined;
let count = 0;

loadQuiz();

function loadQuiz() {
    count++;
    deSelectAnswers();
    firstVal = Math.floor(Math.random() * 100);
    secondVal = Math.floor(Math.random() * 100);
    let checkOperation = Math.floor(Math.random() * 4);

    switch(checkOperation){
        case 0:
            operator = "+";
            correctAnswer = firstVal + secondVal;
            break;
        case 1:
            operator = "-";
            correctAnswer = firstVal - secondVal;
            break;
        case 2:
            operator = "*";
            correctAnswer = firstVal * secondVal;
            break;
        case 3:
            operator = "/";
            correctAnswer = firstVal / secondVal;
            break;
        default:
            break;
    }

    const currentQuizData = `${count}. \t ${firstVal} ${operator} ${secondVal}`;
    questionEl.innerText = currentQuizData;

    const correctOptRan = Math.floor(Math.random() * 4);
    switch(correctOptRan){
        case 0:
            aText.innerText = correctAnswer;
            correctOperation = "a";
            bText.innerText = Math.floor(Math.random() * 10000)-1000;
            cText.innerText = Math.floor(Math.random() * 10000)-1000;
            dText.innerText = Math.floor(Math.random() * 10000)-1000;
            break;
        case 1:
            bText.innerText = correctAnswer;
            correctOperation = "b";
            aText.innerText = Math.floor(Math.random() * 10000)-1000;
            cText.innerText = Math.floor(Math.random() * 10000)-1000;
            dText.innerText = Math.floor(Math.random() * 10000)-1000;
            break;
        case 2:
            cText.innerText = correctAnswer;
            correctOperation = "c";
            aText.innerText = Math.floor(Math.random() * 10000)-1000;
            bText.innerText = Math.floor(Math.random() * 10000)-1000;
            dText.innerText = Math.floor(Math.random() * 10000)-1000;
            break;
        case 3:
            dText.innerText = correctAnswer;
            correctOperation = "d";
            aText.innerText = Math.floor(Math.random() * 10000)-1000;
            bText.innerText = Math.floor(Math.random() * 10000)-1000;
            cText.innerText = Math.floor(Math.random() * 10000)-1000;
            break;
        default:
            break;
    }
}

function getSelected(){

    let answer = undefined;
    let userChose;

    checkAnsEls.forEach((checkAnsEl,i) => {
        if(checkAnsEl.checked){
            userChose = i;
        }
    });

    answer = answerEls[userChose].innerText;
    return answer;
}

function deSelectAnswers(){
    checkAnsEls.forEach((checkAnsEl) => {
        checkAnsEl.checked = false;
    });
}

submit.addEventListener('click', ()=>{

    const selectedAnswer = getSelected();

    if (selectedAnswer === undefined) return;

    if (selectedAnswer == correctAnswer) score ++;

    if (count <= quizLength-1) loadQuiz(); 
    else {
        quiz.innerHTML = `<h2>Quiz Complete.
        You scored ${score} out of ${quizLength}</h2><button onclick="location.reload()">Retake Quiz</button>`;
    }
});