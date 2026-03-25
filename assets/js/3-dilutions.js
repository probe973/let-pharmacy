// ======================================================================
//(generateDilution);// Dilution Question Generator (converted from Python 19-dilutions.py)

// ======================================================================
// END OF FILE
// ======================================================================
// 
// ======================================================================

window.dilutionQuestionGenerators = [];

// Local rounding helper
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}

function generateDilution(q_id) {

    const original_g = (Math.floor(Math.random() * 20) + 1) / 2;  // 0.5–10 step 0.5
    const original_g_str = `${original_g}`;

    const original_vol = Math.random() < 0.5 ? 50 : 100;           // 50 or 100 ml

    const v1 = (Math.floor(Math.random() * 8) + 3) * 50;           // 150–500 ml step 50
    const v1mult = Math.floor(Math.random() * 7) + 2;              // 2–8
    const v1add = v1mult * v1 - v1;                                // added water
    const v2 = v1mult * v1;                                        // final total volume

    const mult = v1 / original_vol;
    const m1 = original_g * mult;                                  // grams in v1 ml

    const pcmult = v2 / 100;
    const x = roundToDecimalPlaces((m1 / v2) * 100, 1);            // % w/v to 1 d.p.

    const question_text =
        `A solution contains ${original_g_str} g of solute per ${original_vol} ml of solution. ` +
        `${v1} ml of this solution is diluted by adding a further ${v1add} ml of water. ` +
        `What is the resulting percentage strength of the new solution expressed as % w/v? ` +
        `Give the answer correct to 1 decimal place.`;

    const solution_text =
        `${original_g_str} g of solute per ${original_vol} ml is <br />\n` +
        `${m1} g of solute per ${v1} ml (multiplying by ${mult}) <br />\n` +
        `Add ${v1add} ml means ${v2} ml <br />\n` +
        `${m1} g of solute per ${v2} ml of solution <br />\n` +
        `For percentage need 100 ml, so divide through by ${pcmult} <br />\n` +
        `${x} g of solute per 100 ml <br />\n` +
        `${x} %w/v`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}

window.dilutionQuestionGenerators.push(generateDilution);
