
const quizData = [
    {
        question: 'Vilket år är Carolina född?',
        a: '1992',
        b: '1993',
        c: '1994',
        d: '1995',
        correct: 'a'
    },
    {
        question: 'Vad heter Carolina i andranamn?',
        a: 'Emma',
        b: 'Emmy',
        c: 'Anna',
        d: 'Saga',
        correct: 'b'
    },
    {
        question: 'I vilken stad är Carolina född?',
        a: 'Trollhättan',
        b: 'Göteborg',
        c: 'Uddevalla',
        d: 'Mölndal',
        correct: 'a'
    },
    {
        question: 'Vad har Carolina för utbildning utöver systemutveckling?',
        a: 'Medieproducent och sjuksköterska',
        b: 'Skådespelare och journalist',
        c: 'Skådespelare och sjuksköterska',
        d: 'Medieproducent och skådespelare',
        correct: 'd'
    },
    {
        question: 'Vilken filmgenre föredrar Carolina mest?',
        a: 'Komedi',
        b: 'Skräck',
        c: 'Drama',
        d: 'Action',
        correct: 'b'
    }
]

const answerEls = document.querySelectorAll('.answer');

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

submitBtn.addEventListener('click', () => {
    // Check to see the answer
    const answer = getSelected();

    if (answer) {
        
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            // Show results and reload
            quiz.innerHTML = `<h2>Du svarade rätt på ${score}/${quizData.length} frågor!</h2>
            <button onclick="location.reload()">Gör om Quiz</button>`;
        }
    }
});