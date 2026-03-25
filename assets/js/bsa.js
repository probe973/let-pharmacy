// ======================================================================
// BSA Question Generator (converted from Python p18-bsa.py)
// 
// ======================================================================

window.bsaQuestionGenerators = [];

// Local rounding helper
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}

function generateBSA(q_id) {

    let mass, height, bsa2;

    while (true) {
        mass = Math.floor(Math.random() * 41) + 50;   // 50–90
        height = [120, 150, 180, 200][Math.floor(Math.random() * 4)];
        bsa2 = (mass * height) / 3600;

        // Python conditions:
        // 1.1 ≤ bsa2 ≤ 5
        // round(bsa2,2) == bsa2
        const bsa2Rounded = Math.round(bsa2 * 100) / 100;

        if (bsa2 >= 1.1 && bsa2 <= 5 && bsa2Rounded === bsa2) {
            break;
        }
    }

    const height_m = height / 100;
    const height_m_str = `${height_m}`;
    const x = roundToDecimalPlaces(Math.sqrt(bsa2), 2);

    // Construct list of 7 values: six random, last = bsa2
    const srlist2 = [
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        bsa2
    ];

    const sorted_vals = srlist2.slice().sort((a, b) => a - b);

    const lines = sorted_vals.map(v => {
        const root = Math.sqrt(v);
        return `\\( \\sqrt{${v.toFixed(2)}} = ${root.toFixed(2)} \\)`;
    });

    const result_string = lines.join(" <br />\n");

    const question_text =
        `Given these values:<br />\n` +
        `${result_string} <br />\n` +
        `The formula: <br />\n` +
        `\\( \\text{BSA}(m^2) = \\sqrt{ \\frac{ \\text{mass(kg)} \\times \\text{height(cm)} }{3600} } \\) <br />\n` +
        `Find the body surface area, in metres squared, of someone who is ${height_m_str} metres tall and weights ${mass} kg. <br />\n`;

    const solution_text =
        `\\( \\frac{${mass} \\times ${height}}{3600} = ${bsa2} \\) <br />\n` +
        `Look up in list gives ${x}`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}

window.bsaQuestionGenerators.push(generateBSA);

// ======================================================================
// END OF FILE
// ======================================================================
