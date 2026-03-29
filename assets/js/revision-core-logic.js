// assets/js/revision-core-logic.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('revision-questions-container');

    // Helper to clean text from Markdown-like bolding for display
    function cleanText(text) {
        if (!text) return "";
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    // Helper for rounding to a specific number of decimal places (if needed elsewhere)
    function roundToDecimalPlaces(value, dp) {
        const multiplier = Math.pow(10, dp);
        return Math.round(value * multiplier) / multiplier;
    }

    // Function to render a single question's HTML structure
    function renderQuestionHTML(q, i) {
        const fieldset = document.createElement('fieldset');
        fieldset.className = 'revision-question-item';

        // The legend is for accessibility to label the fieldset, it's visually hidden.
        // The actual visual question text is now in a div inside the fieldset's padding.
        fieldset.innerHTML = `
            <legend class="visually-hidden">Question ${i + 1}</legend>
            
            <div class="revision-question-text" id="question-${i}-label">
                <strong>Question ${i + 1}:</strong> ${cleanText(q.question)}
            </div>
            
            <div class="input-area">
                <label for="rev-ans-${i}" class="visually-hidden">Your answer for Question ${i + 1}</label>
                <input type="number" id="rev-ans-${i}" class="user-revision-input" step="any" placeholder="0.0" aria-labelledby="question-${i}-label">
                <button type="button" class="btn btn-check-answer" data-question-index="${i}" aria-controls="rev-sol-${i}">Check Answer</button>
            </div>
            <div id="rev-sol-${i}" class="revision-solution-text" style="display:none;" aria-live="polite">
                <hr>
                <div class="solution-feedback"></div>
                <strong>Solution:</strong><br>${cleanText(q.solution)}
            </div>
        `;
        container.appendChild(fieldset);
    }

    // Event listener for "Check Answer" buttons
    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-check-answer')) {
            const questionIndex = parseInt(event.target.dataset.questionIndex);
            const q = window.revisionQuestionsData[questionIndex]; // Access stored question data

            const inputField = document.getElementById(`rev-ans-${questionIndex}`);
            const solutionDiv = document.getElementById(`rev-sol-${questionIndex}`);
            const feedbackDiv = solutionDiv.querySelector('.solution-feedback');
            const userAns = parseFloat(inputField.value);

            solutionDiv.style.display = 'block';
            event.target.disabled = true; // Disable check button after checking
            inputField.disabled = true; // Disable input after checking

            // Compare with a small tolerance for floating point answers
            const tolerance = 0.01;
            if (!isNaN(userAns) && Math.abs(userAns - q.answer) < tolerance) {
                feedbackDiv.innerHTML = '<span style="color: green; font-weight: bold;">Correct!</span>';
                inputField.classList.add('correct-border');
                inputField.setAttribute('aria-invalid', 'false');
            } else {
                feedbackDiv.innerHTML = `<span style="color: red; font-weight: bold;">Incorrect. Your answer was ${isNaN(userAns) ? 'empty or invalid' : userAns}. The correct answer is ${q.answer}.</span>`;
                inputField.classList.add('incorrect-border');
                inputField.setAttribute('aria-invalid', 'true');
            }
            
            // Redraw math in the solution after it becomes visible
            if (window.MathJax) MathJax.typesetPromise([solutionDiv]);
        }
    });

    // --- Core function to initialize a revision test ---
    window.initRevisionTest = function(questionGeneratorFunctions, numQuestions = 10) {
    if (!container) {
        console.error("Revision questions container not found.");
        return;
    }

    container.innerHTML = '';
    window.revisionQuestionsData = [];

    // Use provided number OR default to 10
    const NUM_REVISION_QUESTIONS = numQuestions || 10;

    for (let i = 0; i < NUM_REVISION_QUESTIONS; i++) {
        const randomGeneratorIndex = Math.floor(Math.random() * questionGeneratorFunctions.length);
        const selectedGenerator = questionGeneratorFunctions[randomGeneratorIndex];
        const q_id = 7000 + i;

        const question = selectedGenerator(q_id, roundToDecimalPlaces);
        window.revisionQuestionsData.push(question);
        renderQuestionHTML(question, i);
    }

    if (window.MathJax) {
        MathJax.typesetPromise([container]);
    }
};
});
