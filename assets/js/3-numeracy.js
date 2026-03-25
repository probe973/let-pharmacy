// assets/js/3-numeracy-questions.js

// Declare a global object to hold our question generators
window.numeracyQuestionGenerators = [];

// Helper for rounding to a specific number of decimal places
// This is duplicated for now, but in a real module system, you'd import it.
// For simple script includes, it's safer to have it here, or ensure core_logic is loaded first
// and pass it as a parameter (as done in initRevisionTest call below).

// Type 1: From p3_1.py (BIDMAS: ( (a * b) - c ) / d )
function generateQuestionType1(q_id, roundToDecimalPlaces) {
    let a, b, c, d, x, brackets, brackets2, c2, question_text, solution_text;
    while (true) {
        d = Math.floor(Math.random() * (9 - 3 + 1)) + 3; // random.randint(3,9)
        const w = Math.floor(Math.random() * (2 - 1 + 1)) + 1; // random.randint(1,2)

        if (w === 1) {
            a = (Math.floor(Math.random() * (Math.floor(95 / d) - 5 + 1)) + 5) * d;
            b = Math.floor(Math.random() * (9 - 3 + 1)) + 3;
        } else {
            a = Math.floor(Math.random() * (95 - 21 + 1)) + 21;
            b = (Math.floor(Math.random() * (Math.floor(10 / (d - 1)) - 1 + 1)) + 1) * d;
        }

        c = (Math.floor(Math.random() * (5 - (-5) + 1)) + (-5)) * d;

        brackets = a * b;
        brackets2 = brackets - c;
        x = roundToDecimalPlaces(brackets2 / d, 0);

        if (x > 0 && c !== 0) {
            break;
        }
    }

    if (c < 0) {
        c2 = -c;
        question_text = ` \\( ((${a} \\times ${b} ) + ${c2} ) \\div ${d} \\)`;
        solution_text = `**Inside Brackets** \\( ${a} \\times ${b} = ${brackets} \\) <br />\n` +
                        `**Outside Brackets** \\( ${brackets} + ${c2} = ${brackets2} \\) <br />\n` +
                        `**Division** \\( ${brackets2} \\div ${d} = ${x} \\)`;
    } else {
        question_text = ` \\( ((${a} \\times ${b} ) - ${c} ) \\div ${d} \\)`;
        solution_text = `**Inside Brackets** \\( ${a} \\times ${b} = ${brackets} \\) <br />\n` +
                        `**Outside Brackets** \\( ${brackets} - ${c} = ${brackets2} \\) <br />\n` +
                        `**Division** \\( ${brackets2} \\div ${d} = ${x} \\)`;
    }

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.numeracyQuestionGenerators.push(generateQuestionType1); // Add to the global array

// Repeat for generateQuestionType2, generateQuestionType3, etc.
// Each should accept q_id and roundToDecimalPlaces as arguments.

function generateQuestionType2(q_id, roundToDecimalPlaces) {
    // ... (your existing logic for Type 2, modified to accept roundToDecimalPlaces if applicable)
    let a, b, c, d, numerator, divisors;
    while (true) {
        a = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        b = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        c = Math.floor(Math.random() * (12 - 3 + 1)) + 3;

        numerator = Math.abs((a - b) * c);
        divisors = [];
        for (let i = 2; i <= 9; i++) {
            if (numerator % i === 0) {
                divisors.push(i);
            }
        }

        if (divisors.length > 0) {
            d = divisors[Math.floor(Math.random() * divisors.length)];
            break;
        }
    }

    const brackets = a - b;
    const brackets2 = brackets * c;
    const x = brackets2 / d;

    const question_text = `\\( ((${a} - ${b}) \\times ${c}) \\div ${d} \\)`;
    const solution_text = `**Inside Brackets** \\( ${a} - ${b} = ${brackets} \\) <br />\n` +
                            `**Outside Brackets** \\( ${brackets} \\times ${c} = ${brackets2} \\) <br />\n` +
                            `**Division** \\( ${brackets2} \\div ${d} = ${x} \\)`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.numeracyQuestionGenerators.push(generateQuestionType2);

function generateQuestionType3(q_id, roundToDecimalPlaces) {
    const a1 = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
    const a2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    const a3 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const a4 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    const b1 = Math.floor(Math.random() * (9 - 4 + 1)) + 4;
    const b2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

    const a = 1000 * a1 + 100 * a2 + 10 * a3 + a4;
    const b = 10 * b1 + b2;

    const x = a * b;

    const b10 = b1 * 10;
    const b10a = b10 * a;
    const b2a = b2 * a;

    const question_text = ` \\( ${a} \\times ${b} \\)`;
    const solution_text = `\\( ${a} \\times ${b10} = ${b10a} \\) <br />\n` +
                            `\\( ${a} \\times ${b2} = ${b2a} \\) <br />\n` +
                            `**Answer:** \\( ${b10a} + ${b2a} = ${x} \\)`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.numeracyQuestionGenerators.push(generateQuestionType3);

function generateQuestionType4(q_id, roundToDecimalPlaces) {
    const a1 = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
    const a2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const a3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    const b1 = Math.floor(Math.random() * (9 - 4 + 1)) + 4;
    const b2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

    const a = 10 * a1 + 1 * a2 + 0.1 * a3;
    const b = b1 + 0.1 * b2;

    const x = roundToDecimalPlaces(a * b, 2);

    const a10 = Math.round(a * 10);
    const b10 = Math.round(b * 10);
    const x100 = Math.round(a10 * b10);

    const question_text = ` \\( ${a} \\times ${b} \\)`;
    const solution_text = `\\( ${a10} \\times ${b10} = ${x100} \\) <br />\n` +
                            `\\( ${a} \\times ${b} = ${x} \\) <br />\n` +
                            `**Answer:** ${x}`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.numeracyQuestionGenerators.push(generateQuestionType4);

function generateQuestionType5(q_id, roundToDecimalPlaces) {
    const x1 = Math.floor(Math.random() * (9 - 3 + 1)) + 3;
    const x2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const x3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    const x = roundToDecimalPlaces(100 * x1 + 10 * x2 + x3, 0);

    const b1 = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    const b2_choices = [1, 2, 5];
    const b2 = b2_choices[Math.floor(Math.random() * b2_choices.length)];
    const b = roundToDecimalPlaces(10 * b1 + b2, 0);

    const a = roundToDecimalPlaces(x * b, 0);

    const question_text = ` \\( ${a} \\div ${b} \\)`;
    const solution_text = `**Answer:** ${x}`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.numeracyQuestionGenerators.push(generateQuestionType5);

function generateQuestionType6(q_id, roundToDecimalPlaces) {
    const a1 = Math.floor(Math.random() * (9 - 4 + 1)) + 4;
    const a2 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const a3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    const a = roundToDecimalPlaces(a1 + 0.1 * a2 + 0.01 * a3, 2);

    const b1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    const b2_choices = [1, 2, 4, 5];
    const b2 = b2_choices[Math.floor(Math.random() * b2_choices.length)];
    const b = roundToDecimalPlaces(10 * b1 + b2, 0);

    const xf = roundToDecimalPlaces(a / b, 3);
    const x = roundToDecimalPlaces(a / b, 2);

    const question_text = ` \\( ${a} \\div ${b} \\)`;
    const solution_text = `**Answer:** ${xf} rounding to 2 d.p. gives ${x}`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.numeracyQuestionGenerators.push(generateQuestionType6);

