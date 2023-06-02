const DATA = [
    {
        question: 'Question 1',
        answers: [
            {
                id: '1',
                value: 'Answer 1',
                correct: true,
            },
            {
                id: '2',
                value: 'Answer 2',
                correct: false,
            },
            {
                id: '3',
                value: 'Answer 3',
                correct: false,
            }
        ]
    },
    {
        question: 'Question 2',
        answers: [
            {
                id: '4',
                value: 'Answer 4',
                correct: false,
            },
            {
                id: '5',
                value: 'Answer 5',
                correct: true,
            },
        ]
    },
    {
        question: 'Question 3',
        answers: [
            {
                id: '6',
                value: 'Answer 6',
                correct: true,
            },
            {
                id: '7',
                value: 'Answer 7',
                correct: false,
            },
            {
                id: '8',
                value: 'Answer 8',
                correct: false,
            }
        ]
    },
    {
        question: 'Question 4',
        answers: [
            {
                id: '9',
                value: 'Answer 9',
                correct: true,
            },
            {
                id: '10',
                value: 'Answer 10',
                correct: false,
            },
            {
                id: '11',
                value: 'Answer 11',
                correct: false,
            }
        ]
    },
    {
        question: 'Question 5',
        answers: [
            {
                id: '12',
                value: 'Answer 12',
                correct: true,
            },
            {
                id: '13',
                value: 'Answer 13',
                correct: false,
            },
            {
                id: '14',
                value: 'Answer 14',
                correct: false,
            }
        ]
    }
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestion = (index) => {
    renderIndicator(index+1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
        `)
        .join('');

    questions.innerHTML = `
        <div class="quiz-questions-item">
            <div class="quiz-questions-item_question">${DATA[index].question}</div>
            <ul class="quiz-questions-item_answers">${renderAnswers()}</ul>
        </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';
            if (!answer.correct && answer.id === localResults[questionIndex]) {
                classname = 'answer--invalid';
            } else if (answer.correct) {
                classname = 'answer--valid';
            }
        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');


    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item_question">${question.question}</div>
                <ul class="quiz-results-item_answers">${getAnswers(index)}</ul>
            </div>
        `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `<span>${currentStep}/${DATA.length}</span>`
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('indicator--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');

            renderResults();
        } else {
           renderQuestion(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }

    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('indicator--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestion(0)
    }
});

renderQuestion(0)