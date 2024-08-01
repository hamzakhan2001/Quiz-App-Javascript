document.addEventListener('DOMContentLoaded', () => {
    const quizQuestions = [
        {
            question: "What is the capital of India?",
            a: "Hyderabad",
            b: "Ahmedabad",
            c: "Delhi",
            d: "Mumbai",
            ans: "ans3"
        },
        {
            question: "What is the capital of Thailand?",
            a:"Lampang",
            b: "Phuket",
            c: "Ayutthaya",
            d: "Bangkok",
            ans: "ans4"
        },
        {
            question: "What is the capital of Pakistan?",
            a: "Islamabad",
            b: "Lahore",
            c: "Karachi",
            d: "Quetta",
            ans:"ans1"
        },
        {
            question: "What is the capital of China?",
            a:"Chonqing",
            b:"Beijing",
            c:"Shanghai",
            d:"Wuhan",
            ans:"ans2"
        },
        {
            question: "What is the capital of Canada?",
            a:"Ottawa",
            b:"Toronto",
            c:"Hamilton",
            d:"Montreal",
            ans:"ans1"
        }
        
    ];

    const questions = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');
    const answers = document.querySelectorAll('.answer');
    const scoreShow = document.querySelector('#showScore');
    let count = 0;
    let score = 0;

    const loadQuestions = () => {
        const questionList = quizQuestions[count];
        questions.textContent = questionList.question;
        option1.textContent = questionList.a;
        option2.textContent = questionList.b;
        option3.textContent = questionList.c;
        option4.textContent = questionList.d;
    };
    
    loadQuestions();

    const getCheckAnswer = () => {
        let answer = null;
        answers.forEach((currentAns) => {
            if (currentAns.checked) {
                answer = currentAns.id;
            }
        });
        return answer;
    };

    const deselectAll=()=>{
        answers.forEach((currentAns)=>currentAns.checked=false);
    }
    submit.addEventListener("click", () => {
        const checkedAnswer = getCheckAnswer();

        if (checkedAnswer === quizQuestions[count].ans) {
            score++;
        }

        count++;
        deselectAll();
        if (count < quizQuestions.length) {
            loadQuestions();
        } else {
            scoreShow.innerHTML = `
                <h3>You Scored ${score}/${quizQuestions.length}!!</h3>
                <button class="btn" onclick="location.reload()">Play Again</button>
            `;
            scoreShow.classList.remove('scoreArea');
        }
    });
});
