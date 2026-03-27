window.conversionQuestionGenerators = [];

// Local rounding helper
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateConvertMassDivide(q_id) {
    const units = ["mc", "m", "", "k"];
    let s, l;
    
    while (true) {
        s = getRandomInt(1,3);
        l = getRandomInt(2,4);
        if (s < l) break;
    }
    
    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));
    
    const q = getRandomInt(5,950)*d/Math.pow(10, getRandomInt(0,2));
    
    const x1 = q/d
    const x = roundToDecimalPlaces(x1,2)
    
    const question = `Convert ${q} ${sn}g into ${ln}g.`;
    
    const solution =
        `To convert ${sn}g into ${ln}g, divide by ${d} <br />\n` +
        `\\(${q} \\div ${d} = ${x1} \\) <br />\n` +
        `${x}`;
    
    return { id: q_id, question, answer: x, solution };
}
    
window.conversionQuestionGenerators.push(generateConvertMassDivide);


function generateConvertMassMultiply(q_id) {
    const units = ["mc", "m", "", "k"];
    let s, l;
    
    while (true) {
        s = getRandomInt(1,3);
        l = getRandomInt(2,4);
        if (s < l) break;
    }
    
    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));
    
    const q = getRandomInt(5,950)*Math.pow(10, getRandomInt(1,3))/d;
    
    const x1 = q*d
    const x = roundToDecimalPlaces(x1,2)
    
    const question = `Convert ${q} ${ln}g into ${sn}g.`;
    
    const solution =
        `To convert ${ln}g into ${sn}g, multiply by ${d} <br />\n` +
        `\\(${q} \\times ${d} = ${x1} \\) <br />\n` +
        `${x}`;
    
    return { id: q_id, question, answer: x, solution };
}

window.conversionQuestionGenerators.push(generateConvertMassMultiply);


function generateConvertLengthDivide(q_id) {
    const units = ["m", "", "k"];
    let s, l;
    
    while (true) {
        s = getRandomInt(1,2);
        l = getRandomInt(2,3);
        if (s < l) break;
    }
    
    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));
    
    const q = getRandomInt(5,950)*d/Math.pow(10, getRandomInt(0,2));
    
    const x1 = q/d
    const x = roundToDecimalPlaces(x1,2)
    
    const question = `Convert ${q} ${sn}m into ${ln}m.`;
    
    const solution =
        `To convert ${sn}m into ${ln}m, divide by ${d} <br />\n` +
        `\\(${q} \\div ${d} = ${x1} \\) <br />\n` +
        `${x}`;
    
    return { id: q_id, question, answer: x, solution };
}
    
window.conversionQuestionGenerators.push(generateConvertLengthDivide);


function generateConvertLengthMultiply(q_id) {
    const units = ["m", "", "k"];
    let s, l;
    
    while (true) {
        s = getRandomInt(1,2);
        l = getRandomInt(2,3);
        if (s < l) break;
    }
    
    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));
    
    const q = getRandomInt(5,950)*Math.pow(10, getRandomInt(1,3))/d;
    
    const x1 = q*d
    const x = roundToDecimalPlaces(x1,2)
    
    const question = `Convert ${q} ${ln}m into ${sn}m.`;
    
    const solution =
        `To convert ${ln}m into ${sn}m, multiply by ${d} <br />\n` +
        `\\(${q} \\times ${d} = ${x1} \\) <br />\n` +
        `${x}`;
    
    return { id: q_id, question, answer: x, solution };
}

window.conversionQuestionGenerators.push(generateConvertLengthMultiply);


function generateConvertVolumeDivide(q_id) {
    const units = ["m", ""];
    let s, l;
    
    
    const sn = units[0];
    const ln = units[1];
    const d = 1000;
    
    const q = getRandomInt(5,950)*d/Math.pow(10, getRandomInt(0,2));
    
    const x1 = q/d
    const x = roundToDecimalPlaces(x1,2)
    
    const question = `Convert ${q} ${sn}L into ${ln}L.`;
    
    const solution =
        `To convert ${sn}L into ${ln}L, divide by ${d} <br />\n` +
        `\\(${q} \\div ${d} = ${x1} \\) <br />\n` +
        `${x}`;
    
    return { id: q_id, question, answer: x, solution };
}
    
window.conversionQuestionGenerators.push(generateConvertVolumeDivide);


function generateConvertVolumeMultiply(q_id) {
    const units = ["m", ""];
    let s, l;
    
    const sn = units[0];
    const ln = units[1];
    const d = 1000;
    
    const q = getRandomInt(5,950)*Math.pow(10, getRandomInt(1,3))/d;
    
    const x1 = q*d
    const x = roundToDecimalPlaces(x1,2)
    
    const question = `Convert ${q} ${ln}L into ${sn}L.`;
    
    const solution =
        `To convert ${ln}L into ${sn}L, multiply by ${d} <br />\n` +
        `\\(${q} \\times ${d} = ${x1} \\) <br />\n` +
        `${x}`;
    
    return { id: q_id, question, answer: x, solution };
}

window.conversionQuestionGenerators.push(generateConvertVolumeMultiply);


function generateConvertMoleDivide(q_id) {
    const units = ["mc", "m", ""];
    let s, l;
    
    while (true) {
        s = getRandomInt(1,2);
        l = getRandomInt(2,3);
        if (s < l) break;
    }
    
    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));
    
    const q = getRandomInt(5,150)*d/Math.pow(10, getRandomInt(0,2));
    
    const x1 = q/d
    const x = roundToDecimalPlaces(x1,2)
    
    const question = `Convert ${q} ${sn}mol into ${ln}mol.`;
    
    const solution =
        `To convert ${sn}mol into ${ln}mol, divide by ${d} <br />\n` +
        `\\(${q} \\div ${d} = ${x1} \\) <br />\n` +
        `${x}`;
    
    return { id: q_id, question, answer: x, solution };
}
    
window.conversionQuestionGenerators.push(generateConvertMoleDivide);


function generateConvertMoleMultiply(q_id) {
    const units = ["mc", "m", ""];
    let s, l;
    
    while (true) {
        s = getRandomInt(1,2);
        l = getRandomInt(2,3);
        if (s < l) break;
    }
    
    const sn = units[s - 1];
    const ln = units[l - 1];
    const d = Math.pow(10, 3 * (l - s));
    
    const q = getRandomInt(5,150)*Math.pow(10, getRandomInt(1,3))/d;
    
    const x1 = q*d
    const x = roundToDecimalPlaces(x1,2)
    
    const question = `Convert ${q} ${ln}mol into ${sn}mol.`;
    
    const solution =
        `To convert ${ln}mol into ${sn}mol, multiply by ${d} <br />\n` +
        `\\(${q} \\times ${d} = ${x1} \\) <br />\n` +
        `${x}`;
    
    return { id: q_id, question, answer: x, solution };
}

window.conversionQuestionGenerators.push(generateConvertMoleMultiply);
