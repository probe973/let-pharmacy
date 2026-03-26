// assets/js/tests/exam-set-1-generators.js

// This array will hold the SPECIFIC generator functions for this 'exam-set-1' test.
// The order of functions in this array determines the order of questions in the test.
window.CurrentTestGenerators = [];

// --- Generator Function for Question 1 (Example: Basic Addition with decimals) ---
// This corresponds to what might have been 'p3_1.py' logic, but is now pure JS.
function generateQ1_Addition(q_id, roundToDecimalPlaces) {
    const num1 = roundToDecimalPlaces(Math.random() * (10 - 5) + 5, 1); // Random float between 5.0 and 10.0, 1 dp
    const num2 = roundToDecimalPlaces(Math.random() * (3 - 1) + 1, 1);  // Random float between 1.0 and 3.0, 1 dp
    const answer = roundToDecimalPlaces(num1 + num2, 2);

    const question_text = ` \\( ${num1} + ${num2} \\)`;
    const solution_text = `**Answer:** \\( ${num1} + ${num2} = ${answer} \\)`;

    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateQ1_Addition); // Add to the array for this specific test

// --- Generator Function for Question 2 (Example: Percentage of a number) ---
// This corresponds to what might have been 'p3_7.py' or similar logic.
function generateQ2_Percentage(q_id, roundToDecimalPlaces) {
    const amount = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Random integer 50-200
    const percent = Math.floor(Math.random() * (20 - 5 + 1)) + 5;   // Random integer 5-20

    const raw_result = (percent / 100) * amount;
    const answer = roundToDecimalPlaces(raw_result, 2); // Round to 2 decimal places for the answer

    const question_text = `Calculate ${percent}% of ${amount}. Give your answer to 2 decimal places.`;
    const solution_text = `**Answer:** \\( \\frac{${percent}}{100} \\times ${amount} = ${answer} \\)`;

    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateQ2_Percentage); // Add to the array

// --- Generator Function for Question 3 (Example: Subtraction with integers) ---
// Simple subtraction.
function generateQ3_Subtraction(q_id, roundToDecimalPlaces) {
    const num1 = Math.floor(Math.random() * (50 - 20 + 1)) + 20; // Random integer 20-50
    const num2 = Math.floor(Math.random() * (15 - 5 + 1)) + 5;   // Random integer 5-15
    const answer = num1 - num2;

    const question_text = ` \\( ${num1} - ${num2} \\)`;
    const solution_text = `**Answer:** \\( ${num1} - ${num2} = ${answer} \\)`;

    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateQ3_Subtraction); // Add to the array

// --- Generator Function for Question 4 (Example: Division with rounding) ---
// Similar to your p3_6.py logic.
function generateQ4_Division(q_id, roundToDecimalPlaces) {
    const dividend = roundToDecimalPlaces(Math.random() * (50 - 10) + 10, 2); // 10.00-50.00, 2dp
    const divisor = Math.floor(Math.random() * (9 - 2 + 1)) + 2; // 2-9 integer

    const xf = roundToDecimalPlaces(dividend / divisor, 3); // Full calc to 3dp
    const answer = roundToDecimalPlaces(dividend / divisor, 2); // Answer to 2dp

    const question_text = ` \\( ${dividend} \\div ${divisor} \\). Give your answer to 2 decimal places.`;
    const solution_text = `**Answer:** ${xf} rounding to 2 d.p. gives ${answer}`;

    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateQ4_Division); // Add to the array

function generateQ5_phil(q_id, roundToDecimalPlaces) {
    const answer = Math.floor(Math.random()*801+100);
    const lit = roundToDecimalPlaces(answer / 1000, 3);

    const question_text = `Convert ${lit} litres into millilitres.`;
    const solution_text = `To convert ${lit} L into mL, multiply by 1000 <br />
    \\(${lit} \\times 1000 = ${answer} \\) <br />
    ${answer} mL`;

    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateQ5_phil); 

// You can add more generator functions here, one for each question you want in this test.
// The order you push them into window.CurrentTestGenerators is the order they will appear.
