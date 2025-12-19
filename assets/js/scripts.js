document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('quiz-container')) return;

    let quizSet = [];
    let currentIndex = 0;
    let score = 0;
    let startTime = Date.now();
    let timerInterval;

    // Elements
    const qText = document.getElementById('question-text');
    const qNum = document.getElementById('current-q-num');
    const scoreDisplay = document.getElementById('score-count');
    const timerDisplay = document.getElementById('timer-display');
    const userInput = document.getElementById('user-answer');
    const feedback = document.getElementById('feedback');
    const solutionBox = document.getElementById('solution-box');
    const solutionText = document.getElementById('solution-text');
    
    const btnCheck = document.getElementById('btn-check');
    const btnSolution = document.getElementById('btn-solution');
    const btnNext = document.getElementById('btn-next');

    function initQuiz() {
        // Shuffle and take 20
        quizSet = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 20);
        startTimer();
        loadQuestion();
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const mins = Math.floor(elapsed / 60);
            const secs = (elapsed % 60).toString().padStart(2, '0');
            timerDisplay.textContent = `${mins}:${secs}`;
        }, 1000);
    }

    function loadQuestion() {
        const q = quizSet[currentIndex];
        qText.innerHTML = `<p>${q.question}</p>`;
        qNum.textContent = currentIndex + 1;
        
        // Reset UI
        userInput.value = '';
        userInput.disabled = false;
        feedback.textContent = '';
        solutionBox.style.display = 'none';
        btnNext.style.display = 'none';
        btnCheck.style.display = 'inline-block';
        btnSolution.disabled = true;

        // Tell MathJax to typeset the new question
        if (window.MathJax) {
            MathJax.typesetPromise([qText]);
        }
    }

    btnCheck.addEventListener('click', () => {
        const q = quizSet[currentIndex];
        const userVal = parseFloat(userInput.value);
        
        if (isNaN(userVal)) {
            feedback.textContent = "Please enter a valid number.";
            return;
        }

        userInput.disabled = true;
        btnCheck.style.display = 'none';
        btnSolution.disabled = false;
        btnNext.style.display = 'inline-block';

        if (Math.abs(userVal - q.answer) < 0.01) { // Floating point safety
            score++;
            scoreDisplay.textContent = score;
            feedback.innerHTML = '<span class="correct" role="alert">✅ Correct!</span>';
        } else {
            feedback.innerHTML = `<span class="incorrect" role="alert">❌ Incorrect. The correct answer was ${q.answer}.</span>`;
        }
    });

    btnSolution.addEventListener('click', () => {
        const q = quizSet[currentIndex];
        solutionText.innerHTML = q.solution;
        solutionBox.style.display = 'block';
        if (window.MathJax) MathJax.typesetPromise([solutionText]);
    });

    btnNext.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < quizSet.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    });

    function endQuiz() {
        clearInterval(timerInterval);
        document.getElementById('quiz-box').style.display = 'none';
        document.getElementById('final-results').style.display = 'block';
        document.getElementById('final-score').textContent = score;
        document.getElementById('final-time').textContent = timerDisplay.textContent;
    }

    initQuiz();
});
