document.addEventListener('DOMContentLoaded', () => {
    // 1. Identify the container where questions will go
    const container = document.getElementById('test-questions-container');
    const timerDisplay = document.getElementById('test-timer');
    const submitBtn = document.getElementById('btn-submit-test');
    const resultsArea = document.getElementById('test-results');

    // If this specific element isn't on the page, stop the script
    if (!container) return;

    let startTime = Date.now();
    let selectedQuestions = [];

    function initTest() {
        let questionIndex = 0;

        // 'testData' will be the variable Jekyll sends to this script
        // We loop through every "pool" (YAML file) provided
        for (let poolName in testData) {
            const questionPool = testData[poolName];
            
            // Pick exactly ONE random question from this file's pool
            const randomIndex = Math.floor(Math.random() * questionPool.length);
            const pickedQuestion = questionPool[randomIndex];
            
            // Store it so we can check the answer later
            selectedQuestions.push(pickedQuestion);
            
            // Put the question on the screen
            renderQuestionHTML(pickedQuestion, questionIndex);
            questionIndex++;
        }
        startTimer();
    }

    function renderQuestionHTML(q, i) {
        const div = document.createElement('div');
        div.className = 'test-question-item';
        div.innerHTML = `
            <div class="question-text"><strong>Question ${i + 1}:</strong> ${q.question}</div>
            <div class="input-area">
                <input type="number" id="ans-${i}" class="user-test-input" step="any" placeholder="Enter number">
            </div>
            <div id="sol-${i}" class="solution-text" style="display:none;">
                <hr>
                <strong>Solution:</strong> ${q.solution}
            </div>
        `;
        container.appendChild(div);
        
        // Render MathJax for this new question block
        if (window.MathJax) MathJax.typesetPromise([div]);
    }

    function startTimer() {
        setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const m = Math.floor(elapsed / 60);
            const s = (elapsed % 60).toString().padStart(2, '0');
            timerDisplay.textContent = `${m}:${s}`;
        }, 1000);
    }

    // Logic for the single "Check Answers" button at the bottom
    submitBtn.addEventListener('click', () => {
        let score = 0;
        
        selectedQuestions.forEach((q, i) => {
            const inputField = document.getElementById(`ans-${i}`);
            const solutionDiv = document.getElementById(`sol-${i}`);
            const userAns = parseFloat(inputField.value);

            // Show the solution
            solutionDiv.style.display = 'block';
            inputField.disabled = true;

            // Mark as correct or incorrect using CSS classes
            if (Math.abs(userAns - q.answer) < 0.01) {
                score++;
                inputField.classList.add('correct-border');
            } else {
                inputField.classList.add('incorrect-border');
            }
        });

        // Show final results
        submitBtn.style.display = 'none';
        resultsArea.style.display = 'block';
        resultsArea.innerHTML = `<h3>Results: ${score} / ${selectedQuestions.length}</h3>
                                 <p>Finished in: ${timerDisplay.textContent}</p>
                                 <button onclick="location.reload()" class="btn">Try Another Set</button>`;
        
        // Render MathJax for the newly revealed solutions
        if (window.MathJax) MathJax.typesetPromise([container]);
    });

    initTest();
});
