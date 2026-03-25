// ======================================================================
// Strength Question Generators (converted from Python p12 and p20)
// 
// ======================================================================

window.strengthQuestionGenerators = [];

// Local rounding helper (same as FDP/Conversions)
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}

// ======================================================================
// p12-perc_of.py  (Strength % w/w or % w/v)
// ======================================================================
function generateStrengthPercOf(q_id) {
    const t = Math.random() < 0.5 ? 1 : 2;
    const p = Math.floor(Math.random() * 20) + 1;      // 1–20
    const a = (Math.floor(Math.random() * 25) + 1) * 25; // 25–625 step 25

    const x1 = (a * p) / 100;
    const x = Math.floor(x1 + 0.5); // nearest whole number (Python: floor(x1+0.5))

    let question_text;

    if (t === 1) {
        question_text =
            `How many grams of active ingredient is there in ${a} g of cream that is ${p} % w/w? ` +
            `Give answer correct to the nearest whole number.`;
    } else {
        question_text =
            `You have ${a} ml of a solution that is ${p} % w/v. ` +
            `How many grams of active ingredient are there? ` +
            `Give answer correct to the nearest whole number.`;
    }

    const solution_text =
        `**Answer** Find ${p} percent: <br />\n` +
        `\\( \\frac{${p}}{100} \\times ${a} = ${x1} \\) <br />\n` +
        `Round to nearest whole number if needed <br />\n` +
        `${x}`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}

window.strengthQuestionGenerators.push(generateStrengthPercOf);

// ======================================================================
// p20-activemg.py  (Strength % → mg in volume)
// ======================================================================
function generateStrengthActiveMg(q_id) {
    let active, active_str, volume, g;

    while (true) {
        active = (Math.floor(Math.random() * 20) + 1) / 2; // 0.5 to 10.0 step 0.5
        active_str = `${active}`;

        volume = Math.floor(Math.random() * 97) + 4;       // 4–100
        g = (active * volume) / 100;

        // Python conditions:
        // g < 1 AND active != 1 AND volume mod 10 not in [1,3,7,9]
        if (
            g < 1 &&
            active !== 1 &&
            volume % 10 !== 1 &&
            volume % 10 !== 3 &&
            volume % 10 !== 7 &&
            volume % 10 !== 9
        ) {
            break;
        }
    }

    const x = Math.round(g * 1000); // grams to mg

    const question_text =
        `A liquid medication contains ${active_str} % active ingredient. ` +
        `How many milligrams would there be in a ${volume} ml dose?`;

    const solution_text =
        `${active_str} % of ${volume} ml is <br />\n` +
        `\\( \\frac{${active_str}}{100} \\times ${volume} = ${g} \\) <br />\n` +
        `This is ${g} g, so convert to mg: <br />\n` +
        `\\( ${g} \\times 1000 = ${x} \\) <br />\n` +
        `${x} mg`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}

window.strengthQuestionGenerators.push(generateStrengthActiveMg);

// ======================================================================
// END OF FILE
// ======================================================================
