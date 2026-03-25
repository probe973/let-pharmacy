// assets/js/fdp-questions.js

// Declare a global array to hold our FDP question generators.
// This array will be accessed by your core revision logic.
window.fdpQuestionGenerators = [];

// Helper function for rounding to a specific number of decimal places.
// This is defined locally within this file to ensure it's always available
// for the generator functions, even if a core logic file isn't loaded yet,
// or passes a different rounding function.
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) {
        return NaN; // Handle non-numeric input gracefully
    }
    const multiplier = Math.pow(10, dp);
    return Math.round(value * multiplier) / multiplier;
}

// --- Question Generation Functions (Translated from Python scripts) ---

// From p3_11.py (Percentage Increase)
function generatePercIncrease(q_id) {
    const t = Math.floor(Math.random() * (2 - 1 + 1)) + 1; // random.choice([1,2])
    let a, b_val, b_str, question_text;

    if (t === 1) {
        a = Math.floor(Math.random() * (400 - 250 + 1)) + 250; // random.randint(250,400)
        b_val = (Math.floor(Math.random() * (49 - 11 + 1)) + 11) / 10; // random.randint(11,49)/10
        b_str = b_val.toFixed(1); // Format to one decimal place string for consistency with Python's f-string

        question_text = (
            `If your weekly wages are £${a} and you receive a ${b_str} percent pay increase, ` +
            `what are your new weekly wages? Give the answer correct to the nearest whole number.`
        );
    } else { // t === 2
        a = Math.floor(Math.random() * (80 - 50 + 1)) + 50; // random.randint(50,80)
        b_val = (Math.floor(Math.random() * (49 - 11 + 1)) + 11) / 10;
        b_str = b_val.toFixed(1);

        question_text = (
            `A patient's weight increases by ${b_str} percent from an original weight of ${a} kilograms. ` +
            `What is their new weight? Give the answer correct to the nearest whole number.`
        );
    }

    const percent = parseFloat(b_str); // Use the formatted string's value for calculation
    const increase = roundToDecimalPlaces((percent / 100) * a, 2); // Python's round(val, 2)
    const x1 = roundToDecimalPlaces(a + increase, 2); // Python's round(val, 2)
    const x = Math.round(x1); // Python's math.floor(x1 + 0.5) is equivalent to Math.round()

    const solution_text = (
        `**Answer** Find ${b_str} percent: <br />\n` +
        ` \\( \\frac{${b_str}}{100} \\times ${a} = ${increase} \\) <br />\n` +
        `Add: <br />\n` +
        ` \\( ${a} + ${increase} = ${x1} \\) <br />\n` +
        `Round to nearest whole number ${x}`
    );

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.fdpQuestionGenerators.push(generatePercIncrease);

// From p3_10.py (Percentage Decrease)
function generatePercDecrease(q_id) {
    const t = Math.floor(Math.random() * (2 - 1 + 1)) + 1; // random.choice([1,2])
    let a, b, question_text;

    if (t === 1) {
        a = (Math.floor(Math.random() * (14 - 4 + 1)) + 4) * 5; // random.randint(4,14)*5
        b = Math.floor(Math.random() * (12 - 1 + 1)) + 1;       // random.randint(1,12)
        question_text = (
            `If you are travelling at ${a} mph and your speed decreases by ${b} percent, what is your new speed? ` +
            `Give the answer correct to 2 decimal places.`
        );
    } else { // t === 2
        a = (Math.floor(Math.random() * (20 - 1 + 1)) + 1) * 50; // random.randint(1, 20)*50
        b = Math.floor(Math.random() * (25 - 5 + 1)) + 5;       // random.randint(5,25)
        question_text = (
            `The cost of a drug is normally £${a} but has been reduced by ${b} percent. ` +
            `What is the new cost of the drug? ` +
            `Give the answer correct to 2 decimal places.`
        );
    }

    const d = roundToDecimalPlaces((b / 100) * a, 2); // Python's round(val, 2)
    const x = roundToDecimalPlaces(a - d, 2);         // Python's round(val, 2)

    const solution_text = (
        `**Answer** Find ${b} percent: <br />\n` +
        ` \\( \\frac{${b}}{100} \\times ${a} = ${d} \\) <br />\n` +
        `Subtract: <br />\n` +
        ` \\( ${a} - ${d} = ${x} \\)`
    );

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.fdpQuestionGenerators.push(generatePercDecrease);

// From p3_9.py (Fraction to Percentage)
function generateFracToPerc(q_id) {
    let n, d;
    while (true) {
        n = (Math.floor(Math.random() * (38 - 10 + 1)) + 10) * 25; // random.randint(10,38)*25
        d = (Math.floor(Math.random() * (16 - 1 + 1)) + 1) * 500;   // random.randint(1,16)*500
        if (n < d) { // Python's condition
            break;
        }
    }

    const x = roundToDecimalPlaces((100 * n) / d, 2); // Python's round(val, 2)

    const question_text = `Express ${n} out of ${d} as a percentage, giving the answer to 2 decimal places.`;
    const solution_text = `**Answer** \\( \\frac{${n}}{${d}} \\times 100 = ${x} \\)`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.fdpQuestionGenerators.push(generateFracToPerc);

// From p3_8.py (Fraction to Decimal)
function generateFracToDec(q_id) {
    let n, d;
    const d_choices = [2, 5, 20, 40, 50];
    while (true) {
        n = Math.floor(Math.random() * (99 - 1 + 1)) + 1; // random.randint(1,99)
        d = d_choices[Math.floor(Math.random() * d_choices.length)]; // random.choice([2, 5, 20, 40, 50])
        if (n % d !== 0) { // Ensure numerator is not a multiple of denominator for a non-integer result
            break;
        }
    }

    const x = roundToDecimalPlaces(n / d, 2); // Python's round(val, 2)

    let n2, d2; // For solution simplification steps
    if (d === 5 || d === 50) {
        n2 = n * 2;
        d2 = d * 2;
    } else if (d === 2) {
        n2 = n * 5;
        d2 = d * 5; // Should be 10 for consistency with python's logic
    } else if (d === 20) {
        n2 = n / 2;
        d2 = d / 2; // Should be 10 for consistency with python's logic
    } else { // d === 40
        n2 = n / 4;
        d2 = d / 4; // Should be 10 for consistency with python's logic
    }

    const question_text = `Express \\( \\frac{${n}}{${d}} \\) as a decimal, giving the answer to 2 decimal places.`;
    const solution_text = `**Answer** \\( \\frac{${n}}{${d}} = \\frac{${n2}}{${d2}} = ${x} \\)`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.fdpQuestionGenerators.push(generateFracToDec);

// From p3_7.py (Decimal to Percentage)
function generateDecToPerc(q_id) {
    const a = (Math.floor(Math.random() * (99 - 1 + 1)) + 1) / 100; // random.randint(1,99)/100

    const x = Math.round(a * 100); // Python's round() without dp rounds to nearest integer

    const question_text = `Express ${a} as a percentage, giving the answer to the nearest whole number.`;
    const solution_text = `**Answer:** \\(${a} \\times 100 = ${x} \\)`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.fdpQuestionGenerators.push(generateDecToPerc);

// --- NEW Question Type: Percentage to Decimal ---
function generatePercentToDecimal(q_id) {
    let perc_val;
    let perc_str; // Store as string to handle x.0 formatting

    // Generate a percentage that might have one decimal place for variety
    const type = Math.floor(Math.random() * 2);
    if (type === 0) { // Whole number percentage
        perc_val = Math.floor(Math.random() * (99 - 1 + 1)) + 1; // 1 to 99
        perc_str = perc_val.toString();
    } else { // One decimal place percentage
        perc_val = (Math.floor(Math.random() * (999 - 10 + 1)) + 10) / 10; // e.g., 10/10=1, 11/10=1.1, up to 999/10=99.9
        perc_str = perc_val.toFixed(1); // Format to one decimal place string, e.g., "12.0" or "12.5"
    }
    
    const x = roundToDecimalPlaces(parseFloat(perc_str) / 100, 4); // Allow up to 4 d.p. for decimal output, e.g., 12.5% -> 0.125, 50% -> 0.50, 1.25% -> 0.0125

    const question_text = `Express ${perc_str}% as a decimal, giving the answer to 4 decimal places where necessary.`;
    const solution_text = `**Answer:** \\( \\frac{${perc_str}}{100} = ${x} \\)`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.fdpQuestionGenerators.push(generatePercentToDecimal);
