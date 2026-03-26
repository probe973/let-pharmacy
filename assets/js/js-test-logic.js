// assets/js/js-test-logic.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('test-questions-container');
    const timerDisplay = document.getElementById('test-timer');
    const submitBtn = document.getElementById('btn-submit-test');
    const resultsArea = document.getElementById('test-results');
    const totalQuestionsCountDisplay = document.getElementById('total-questions-count'); // Reference the ID for updating total questions

    if (!container) {
        console.error("Test questions container (id='test-questions-container') not found. Exiting js-test-logic.js.");
        return;
    }

    // CRITICAL: This script expects 'testData' to be an array of question *generator functions*.
    // 'testData' is defined in the <script> block of _includes/js-generated-test-mode.html
    if (!Array.isArray(testData) || testData.some(item => typeof item !== 'function')) {
        console.error("ERROR: 'testData' is not an array of generator functions as expected. Please ensure your test-specific JS file correctly populates `window.CurrentTestGenerators` with functions.");
        // Disable test interaction if generators are missing or malformed
        submitBtn.disabled = true;
        if (totalQuestionsCountDisplay) totalQuestionsCountDisplay.textContent = '0';
        return;
    }

    let startTime = Date.now();
    startTimer();

    let generatedQuestionsData = []; // This will store the *actual generated question objects* for scoring

    // Helper for cleaning bold text from Markdown-like syntax
    function cleanText(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    // Helper for consistent rounding as in Python's round(value, dp)
    // This will be passed to each generator function.
    function roundToDecimalPlaces(value, dp) {
        if (isNaN(value)) return NaN;
        const multiplier = Math.pow(10, dp);
        return Math.round(value * multiplier) / multiplier;
    }

    function initTest() {
        let questionIndex = 0;
        container.innerHTML = ''; // Clear any existing questions
        generatedQuestionsData = []; // Reset generated questions for a new test run

        // The number of questions for the test is determined by how many generator functions are in testData.
        const NUM_QUESTIONS_FOR_TEST = testData.length;

        if (NUM_QUESTIONS_FOR_TEST === 0) {
            console.warn("No question generator functions found in 'testData'. The test will be empty.");
            if (totalQuestionsCountDisplay) totalQuestionsCountDisplay.textContent = '0';
            submitBtn.disabled = true; // Disable submit button if no questions
            return;
        }

        // Iterate through EACH generator function provided in the 'testData' array.
        // This ensures a fixed sequence of question types, matching your "one from each YML file" logic.
        testData.forEach((generatorFunction, i) => {
            if (typeof generatorFunction !== 'function') {
                console.warn(`Item ${i} in 'testData' is not a function. Skipping.`);
                return;
            }

            const q_id = 10000 + i; // Assign a unique ID for the dynamically generated question
            
            // EXECUTE the generator function to get the actual question data (question text, answer, solution)
            const generatedQuestion = generatorFunction(q_id, roundToDecimalPlaces);
            
            generatedQuestionsData.push(generatedQuestion); // Store the generated question object
            renderQuestionHTML(generatedQuestion, questionIndex);
            questionIndex++;
        });
        
        // Update total questions count in the status bar
        if (totalQuestionsCountDisplay) {
            totalQuestionsCountDisplay.textContent = generatedQuestionsData.length;
        }

        // Draw all MathJax equations ONCE after all questions are rendered
        if (window.MathJax) {
            MathJax.typesetPromise([container]);
        }
    }

    function renderQuestionHTML(q, i) {
        const div = document.createElement('div');
        div.className = 'test-question-item';
        div.setAttribute('role', 'group'); // For semantic grouping (accessibility)
        div.setAttribute('aria-labelledby', `question-${i}-label`); // Links group to its label

        div.innerHTML = `
            <div class="question-text" id="question-${i}-label">
                <strong>Question ${i + 1}:</strong> ${cleanText(q.question)}
            </div>
            <div class="input-area">
                <label for="ans-${i}" class="visually-hidden">Your answer for Question ${i + 1}</label>
                <input type="number" id="ans-${i}" class="user-test-input" step="any" placeholder="0.0" aria-describedby="sol-${i}-desc">
            </div>
            <div id="sol-${i}" class="solution-text" style="display:none;" aria-live="polite" aria-atomic="true">
                <hr>
                <div id="sol-${i}-desc" class="solution-feedback"></div>
                <strong>Solution:</strong><br>${cleanText(q.solution)}
            </div>
        `;
        container.appendChild(div);
    }

    function startTimer() {
        // Clear any previous interval to prevent multiple timers running
        if (window.testTimerInterval) {
            clearInterval(window.testTimerInterval);
        }
        window.testTimerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const m = Math.floor(elapsed / 60);
            const s = (elapsed % 60).toString().padStart(2, '0');
            timerDisplay.textContent = `${m}:${s}`;
        }, 1000);
    }

    submitBtn.addEventListener('click', () => {
        let score = 0;
        
        // Stop the timer when the test is submitted
        if (window.testTimerInterval) {
            clearInterval(window.testTimerInterval);
        }

        generatedQuestionsData.forEach((q, i) => {
            const inputField = document.getElementById(`ans-${i}`);
            const solutionDiv = document.getElementById(`sol-${i}`);
            const feedbackDiv = solutionDiv.querySelector('.solution-feedback'); // Reference to the feedback div
            const userAns = parseFloat(inputField.value);

            solutionDiv.style.display = 'block'; // Show the solution
            inputField.disabled = true; // Disable input after submission

            const tolerance = 0.01; // Allow for minor floating point precision issues
            if (!isNaN(userAns) && Math.abs(userAns - q.answer) < tolerance) {
                score++;
                inputField.classList.add('correct-border');
                inputField.setAttribute('aria-invalid', 'false'); // Accessibility: mark as valid
                feedbackDiv.innerHTML = '<span style="color: green; font-weight: bold;">Correct!</span>';
            } else {
                inputField.classList.add('incorrect-border');
                inputField.setAttribute('aria-invalid', 'true'); // Accessibility: mark as invalid
                feedbackDiv.innerHTML = `<span style="color: red; font-weight: bold;">Incorrect. Your answer was ${isNaN(userAns) ? 'empty or invalid' : userAns}. The correct answer is ${q.answer}.</span>`;
            }
        });

        submitBtn.style.display = 'none'; // Hide submit button
        resultsArea.style.display = 'block'; // Show results area
        
        resultsArea.innerHTML = `
            <h3>Results: ${score} / ${generatedQuestionsData.length}</h3>
            <p>Finished in: ${timerDisplay.textContent}</p>
            <button onclick="window.location.reload()" class="btn">Try Another Set</button>
        `;
        
        // Final MathJax typesetting for solutions now visible
        if (window.MathJax) MathJax.typesetPromise([container]);
    });

    // Initialize the test when the page loads
    initTest();
});
