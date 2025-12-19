document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('test-questions-container');
    const timerDisplay = document.getElementById('test-timer');
    const submitBtn = document.getElementById('btn-submit-test');
    const resultsArea = document.getElementById('test-results');

    if (!container) return;

    let startTime = Date.now();
    let selectedQuestions = [];

    function initTest() {
        let questionIndex = 0;

        // Loop through every file Jekyll found in the folder
        for (let poolName in testData) {
            const questionPool = testData[poolName];
            
            // SAFETY CHECK: Only proceed if this file is actually a list (Array)
            // This prevents hidden system files from crashing the script
            if (Array.isArray(questionPool) && questionPool.length > 0) {
                
                const randomIndex = Math.floor(Math.random() * questionPool.length);
                const pickedQuestion = questionPool[randomIndex];
                
                selectedQuestions.push(pickedQuestion);
                renderQuestionHTML(pickedQuestion, questionIndex);
                questionIndex++;
            }
        }
        
        // Move startTimer here to ensure it starts even if a file is skipped
        startTimer();
    }

    function renderQuestionHTML(q, i) {
        const div = document.createElement('div');
        div.className = 'test-question-item';
        div.innerHTML = `
            <div class="question-text"><strong>Question ${i + 1}:</strong> ${q.question}</div>
            <div class="input-area">
                <input type="number" id="ans-${i}" class="user-test-input" step="any" placeholder="0.0">
            </div>
            <div id="sol-${i}" class="solution-text" style="display:none;">
                <hr>
                <strong>Solution:</strong> ${q.solution}
            </div>
        `;
        container.appendChild(div);
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

    submitBtn.addEventListener('click', () => {
        let score = 0;
        
        selectedQuestions.forEach((q, i) => {
            const inputField = document.getElementById(`ans-${i}`);
            const solutionDiv = document.getElementById(`sol-${i}`);
            const userAns = parseFloat(inputField.value);

            solutionDiv.style.display = 'block';
            inputField.disabled = true;

            // Math checking (allowing for minor rounding differences)
            if (!isNaN(userAns) && Math.abs(userAns - q.answer) < 0.01) {
                score++;
                inputField.classList.add('correct-border');
            } else {
                inputField.classList.add('incorrect-border');
            }
        });

        submitBtn.style.display = 'none';
        resultsArea.style.display = 'block';
        
        // We use window.location.href to "Restart" - it is cleaner than reload
        resultsArea.innerHTML = `
            <h3>Results: ${score} / ${selectedQuestions.length}</h3>
            <p>Finished in: ${timerDisplay.textContent}</p>
            <button onclick="window.location.href=window.location.href" class="btn">Try Another Set</button>
        `;
        
        if (window.MathJax) MathJax.typesetPromise([container]);
    });

    initTest();
});
