document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('test-questions-container');
    const timerDisplay = document.getElementById('test-timer');
    const submitBtn = document.getElementById('btn-submit-test');
    const resultsArea = document.getElementById('test-results');

    if (!container) return;

    // 1. Start the timer immediately so it isn't blocked by the loop
    let startTime = Date.now();
    startTimer();

    let selectedQuestions = [];

    // 2. A simple "Translator" function to handle bold text (Markdown to HTML)
    function cleanText(text) {
        if (!text) return "";
        // This replaces **text** with <strong>text</strong>
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    function initTest() {
        let questionIndex = 0;

        for (let poolName in testData) {
            const questionPool = testData[poolName];
            
            // Only proceed if the file contains a list of questions
            if (Array.isArray(questionPool) && questionPool.length > 0) {
                
                const randomIndex = Math.floor(Math.random() * questionPool.length);
                const pickedQuestion = questionPool[randomIndex];
                
                selectedQuestions.push(pickedQuestion);
                renderQuestionHTML(pickedQuestion, questionIndex);
                questionIndex++;
            }
        }
        
        // 3. Draw all math symbols ONCE after the loop is finished
        if (window.MathJax) {
            MathJax.typesetPromise([container]);
        }
    }

    function renderQuestionHTML(q, i) {
        const div = document.createElement('div');
        div.className = 'test-question-item';
        div.innerHTML = `
            <div class="question-text">
                <strong>Question ${i + 1}:</strong> ${cleanText(q.question)}
            </div>
            <div class="input-area">
                <input type="number" id="ans-${i}" class="user-test-input" step="any" placeholder="0.0">
            </div>
            <div id="sol-${i}" class="solution-text" style="display:none;">
                <hr>
                <strong>Solution:</strong><br>${cleanText(q.solution)}
            </div>
        `;
        container.appendChild(div);
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

            if (!isNaN(userAns) && Math.abs(userAns - q.answer) < 0.01) {
                score++;
                inputField.classList.add('correct-border');
            } else {
                inputField.classList.add('incorrect-border');
            }
        });

        submitBtn.style.display = 'none';
        resultsArea.style.display = 'block';
        
        resultsArea.innerHTML = `
            <h3>Results: ${score} / ${selectedQuestions.length}</h3>
            <p>Finished in: ${timerDisplay.textContent}</p>
            <button onclick="window.location.reload()" class="btn">Try Another Set</button>
        `;
        
        // Final math draw for the solutions
        if (window.MathJax) MathJax.typesetPromise([container]);
    });

    initTest();
});
