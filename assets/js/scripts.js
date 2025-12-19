document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if we are on a page that actually has a quiz
    if (!document.getElementById('quiz-container')) return;

    // 2. Variables to track the quiz state
    let quizSet = [];
    let currentIndex = 0;
    let score = 0;
    let startTime = Date.now();
    let timerInterval;

    // 3. Get all the HTML elements we need to talk to
    const qText = document.getElementById('question-text');
    const qNum = document.getElementById('current-q-num');
    const scoreDisplay = document.getElementById('score-count');
    const timerDisplay = document.getElementById('timer-display');
    const userInput = document.getElementById('user-answer');
    const feedback = document.getElementById('feedback');
    const solutionBox = document.getElementById('solution-box');
    const solutionText = document.getElementById('solution-text');
    
    const btnCheck = document.getElementById('btn-check');
    const btnSkip = document.getElementById('btn-skip');
    const btnSolution = document.getElementById('btn-solution');
    const btnNext = document.getElementById('btn-next');

    // 4. THE FUNCTIONS (The actions the quiz takes)

    function initQuiz() {
        // Shuffle all available questions and pick the first 20
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
        
        // Reset the interface for the new question
        userInput.value = '';
        userInput.disabled = false;
        feedback.textContent = '';
        solutionBox.style.display = 'none';
        btnNext.style.display = 'none';
        btnCheck.style.display = 'inline-block';
        btnSkip.style.display = 'inline-block';
        btnSolution.disabled = true;

        // Tell MathJax to look at the new question and draw the math symbols
        if (window.MathJax) {
            MathJax.typesetPromise([qText]);
        }
    }

    // Logic for the 'Check Answer' button
    btnCheck.addEventListener('click', () => {
        const q = quizSet[currentIndex];
        const userVal = parseFloat(userInput.value);
        
        if (isNaN(userVal)) {
            feedback.innerHTML = '<span style="color:red">Please enter a number.</span>';
            return;
        }

        // Lock the input and hide Check/Skip buttons
        userInput.disabled = true;
        btnCheck.style.display = 'none';
        btnSkip.style.display = 'none';
        btnSolution.disabled = false;
        btnNext.style.display = 'inline-block';

        // Check if the answer is correct (allowing for minor rounding differences)
        if (Math.abs(userVal - q.answer) < 0.01) {
            score++;
            scoreDisplay.textContent = score;
            feedback.innerHTML = '<span class="correct" role="alert">✅ Correct!</span>';
        } else {
            feedback.innerHTML = `<span class="incorrect" role="alert">❌ Incorrect. The correct answer was ${q.answer}</span>`;
        }
    });

    // Logic for the 'Skip' button
    btnSkip.addEventListener('click', () => {
        feedback.innerHTML = '<span class="incorrect">Question Skipped.</span>';
        userInput.disabled = true;
        btnCheck.style.display = 'none';
        btnSkip.style.display = 'none';
        btnSolution.disabled = false;
        btnNext.style.display = 'inline-block';
    });

    // Logic for the 'Show Solution' button
    btnSolution.addEventListener('click', () => {
        const q = quizSet[currentIndex];
        solutionText.innerHTML = q.solution;
        solutionBox.style.display = 'block';
        // Tell MathJax to draw the math in the solution
        if (window.MathJax) MathJax.typesetPromise([solutionText]);
    });

    // Logic for the 'Next' button
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

    // Start everything
    initQuiz();
});
