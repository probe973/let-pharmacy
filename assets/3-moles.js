// ======================================================================
// Molarity Question Generator (converted from Python p17-mw.py)
//
// ======================================================================

window.molarityQuestionGenerators = [];

// Local rounding helper
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}

// ----------------------------------------------------------------------
// p17-mw.py — Moles, molarity, MW → required grams
// ----------------------------------------------------------------------
function generateMolarityRequiredMass(q_id) {
    const compound = (Math.floor(Math.random() * 191) + 10) / 2;  // 10/2 to 200/2 step = 0.5
    const compound_str = `${compound}`;

    const volume_ml = (Math.floor(Math.random() * 18) + 2) * 50; // 100,150,...950 ml
    const volume_l = volume_ml / 1000;
    const volume_l_str = `${volume_l}`;

    const molar = Math.floor(Math.random() * 15) + 1;  // 1–15
    const molar_str = `${molar}`;

    const x = roundToDecimalPlaces(compound * volume_l * molar, 2);

    const question_text =
        `How many grams of compound X (molecular weight = ${compound_str}) are required ` +
        `to produce ${volume_ml} ml of a ${molar_str} molar solution? <br />\n` +
        `Give the answer correct to 2 decimal places`;

    const solution_text =
        `\\( \\text{mass (g)} = \\text{MW (g/mol) } \\times \\text{Molarity (mol/L) } \\times \\text{Volume (L)} \\) <br />\n` +
        `\\( ${compound_str} \\times ${molar_str} \\times ${volume_l_str} = ${x} \\)`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}

window.molarityQuestionGenerators.push(generateMolarityRequiredMass);

// ======================================================================
// END OF FILE
// ======================================================================
