// ========================================================
// Conversion Question Generators (from p3_13 → p3_16)
// 
// ========================================================

window.conversionQuestionGenerators = [];

// Local rounding helper
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}

// ------------------------------------------------------------
// p3_13 — Convert mass (mcg → mg → g → kg) — division
// ------------------------------------------------------------
function generateConvertMassDivide(q_id) {
    const units = ["mc", "m", "", "k"];
    let s, l;

    while (true) {
        s = Math.floor(Math.random() * 3) + 1;
        l = Math.floor(Math.random() * 3) + 2;
        if (s < l) break;
    }

    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));

    const q =
        Math.floor(Math.random() * (Math.round(1200 * d) - Math.round(0.8 * d) + 1)) +
        Math.round(0.8 * d);

    const x1 = q / d;
    const x = roundToDecimalPlaces(x1, 2);

    const question = `Convert ${q} ${sn}g into ${ln}g. Give your answer correct to 2 decimal places`;

    const solution =
        `To convert ${sn}g into ${ln}g, divide by ${d} <br />\n` +
        `\\(${q} \\div ${d} = ${x1} \\) <br />\n` +
        `${x}`;

    return { id: q_id, question, answer: x, solution };
}

window.conversionQuestionGenerators.push(generateConvertMassDivide);

// ------------------------------------------------------------
// p3_14 — Convert mass (mcg → mg → g → kg) — multiplication
// ------------------------------------------------------------
function generateConvertMassMultiply(q_id) {
    const units = ["mc", "m", "", "k"];
    let s, l;

    while (true) {
        s = Math.floor(Math.random() * 3) + 1;
        l = Math.floor(Math.random() * 3) + 2;
        if (s < l) break;
    }

    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));

    const divider = Math.random() < 0.5 ? 10 : 100;
    const raw_q = (Math.floor(Math.random() * 990) + 10) / d / divider;

    const x1 = roundToDecimalPlaces(raw_q * d, 3);
    const x = roundToDecimalPlaces(x1, 2);

    let qs;
    const diff = l - s;
    if (diff === 1) qs = raw_q.toFixed(5);
    else if (diff === 2) qs = raw_q.toFixed(8);
    else qs = raw_q.toFixed(11);

    const question = `Convert ${qs} ${ln}g into ${sn}g.`;

    const solution =
        `To convert ${ln}g into ${sn}g, multiply by ${d} <br />\n` +
        `\\(${qs} \\times ${d} = ${x1} \\) <br />\n` +
        `${x}`;

    return { id: q_id, question, answer: x, solution };
}

window.conversionQuestionGenerators.push(generateConvertMassMultiply);

// ------------------------------------------------------------
// p3_15 — Convert mol (mcmol → mmol → mol → kmol)
// ------------------------------------------------------------
function generateConvertMol(q_id) {
    const units = ["mc", "m", "", "k"];
    let s, l;

    while (true) {
        s = Math.floor(Math.random() * 3) + 1;
        l = Math.floor(Math.random() * 2) + 2;
        if (s < l) break;
    }

    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));

    const divider = Math.random() < 0.5 ? 10 : 100;
    const raw_q = (Math.floor(Math.random() * 990) + 10) / d / divider;

    const x1 = roundToDecimalPlaces(raw_q * d, 3);
    const x = roundToDecimalPlaces(x1, 2);

    let qs;
    const diff = l - s;
    if (diff === 1) qs = raw_q.toFixed(5);
    else if (diff === 2) qs = raw_q.toFixed(8);
    else qs = raw_q.toFixed(11);

    const question = `Convert ${qs} ${ln}mol into ${sn}mol.`;

    const solution =
        `To convert ${ln}mol into ${sn}mol, multiply by ${d} <br />\n` +
        `\\(${qs} \\times ${d} = ${x1} \\) <br />\n` +
        `${x}`;

    return { id: q_id, question, answer: x, solution };
}

window.conversionQuestionGenerators.push(generateConvertMol);

// ------------------------------------------------------------
// p3_16 — Scientific Notation Conversion (litres)
// ------------------------------------------------------------
function generateSciNotationConvert(q_id) {
    const units = ["mc", "m", "", "k"];
    let s, l;

    while (true) {
        s = Math.floor(Math.random() * 3) + 1;
        l = Math.floor(Math.random() * 2) + 2;
        if (s < l) break;
    }

    const sn = units[s - 1];
    const ln = units[l - 1];

    const q = (Math.floor(Math.random() * 90) + 10) / 10;
    const qs = q.toFixed(2);

    const n = Math.floor(Math.random() * 21) + 5;
    const t = Math.random() < 0.5 ? -1 : 1;

    const d = 3 * (l - s) * t;
    const x = n + d;

    let question, solution;

    if (t === -1) {
        question =
            `Given \\(${qs} \\times 10^{${n}} \\text{ ${sn}l} = ${qs} \\times 10^{m} \\text{ ${ln}l}\\)<br />\n` +
            `Write down the value of \\(m\\)`;

        solution =
            `To convert ${sn}l to ${ln}l multiply by \\(10^{${d}}\\) <br />\n` +
            `Add the powers: \\(m = ${n} + ${d} = ${x}\\)`;
    } else {
        question =
            `Given \\(${qs} \\times 10^{${n}} \\text{ ${ln}l} = ${qs} \\times 10^{m} \\text{ ${sn}l}\\)<br />\n` +
            `Write down the value of \\(m\\)`;

        solution =
            `To convert ${ln}l to ${sn}l multiply by \\(10^{${d}}\\) <br />\n` +
            `Add the powers: \\(m = ${n} + ${d} = ${x}\\)`;
    }

    return { id: q_id, question, answer: x, solution };
}

window.conversionQuestionGenerators.push(generateSciNotationConvert);

// ========================================================
// END OF FILE
// ========================================================
