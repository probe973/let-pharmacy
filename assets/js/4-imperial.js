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

function generateConvertMassKg(q_id) {
    
    const st = getRandomInt(3,20);
    const lb = getRandomInt(1,13);
    const pounds = 14*st + lb;
    const kg = roundToDecimalPlaces(pounds/2,1);
    
    let question_text, solution_text;
    
    question_text = `For this question assume that 1 kg = 2 lbs. What is the mass of a patient, in kg, if they are ${st} stone and ${lb} lbs? Give you answer to 1 d.p.`;
    
    solution_text = `1 stone is 14 lbs, so ${st} stone and ${lb} lbs is ${st} × 14 + ${lb} = ${pounds} lbs<br />` +
                    `Convert to kg, divide by 2:  ${pounds} ÷ 2 = ${kg} kg`;
    
    return {
        id: q_id,
        question: question_text,
        answer: kg,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvertMassKg);


function generateConvertLengthm(q_id) {
    
    let ft, inc;
    
    while (true) {
    
        ft = getRandomInt(3, 6);
        inc = getRandomInt(1, 11);
        if (!(ft === 6 && inc > 6)) {
            break;
        }
    }
    
    const inches = ft*12 + inc;
    const cm = inches * 2.5;
    const m = roundToDecimalPlaces(cm/100, 2);
    
    let question_text, solution_text;
    
    question_text = `Assuming 2.5 cm is 1 inch, convert a height of ${ft} feet and ${inc} inches into metres.  Give your answer to 2 d.p.`;
    
    solution_text = `1 foot is 12 inches, so ${ft} feet and ${inc} inches is ${ft} × 12 + ${inc} = ${inches} inches<br />` +
                    `Convert to cm:  ${inches} inch × 2.5 cm/inch = ${cm} cm<br />` +
                    `Convert to m, divide by 100: ${m} m`;
     
    
    return {
        id: q_id,
        question: question_text,
        answer: m,
        solution: solution_text
    };
    
}
window.conversionQuestionGenerators.push(generateConvertLengthm); 


function generateConvertLengthcm(q_id) {
    
    let ft, inc;
    
    while (true) {
    
        ft = getRandomInt(2, 6);
        inc = getRandomInt(1, 11);
        if (!(ft === 6 && inc > 6)) {
            break;
        }
    }
    
    const inches = ft*12 + inc;
    const cm = inches * 2.5;
    const m = roundToDecimalPlaces(cm, 0);
    
    let question_text, solution_text;
    
    question_text = `Assuming 2.5 cm is 1 inch, convert a height of ${ft} feet and ${inc} inches into centimetres.  Give your answer to nearest cm.`;
    
    solution_text = `1 foot is 12 inches, so ${ft} feet and ${inc} inches is ${ft} × 12 + ${inc} = ${inches} inches<br />` +
                    `Convert to cm:  ${inches} inch × 2.5 cm/inch = ${cm} cm<br />` +
                    `${m} cm`;
     
    
    return {
        id: q_id,
        question: question_text,
        answer: m,
        solution: solution_text
    };
    
}
window.conversionQuestionGenerators.push(generateConvertLengthcm);


function generateConvertTemp(q_id, roundToDecimalPlaces) {
    
    const c = getRandomInt(1,19)*5;
    const f = 9*c/5 + 32;
    
    const ct = getRandomInt(1,2);
    
    let question_text, solution_text, answer;
    
    if (ct === 1) {
        question_text = `Convert \\( ${c} ^{\\circ} \\text{C into } ^{\\circ} \\text{F} \\)`;
        solution_text = `\\( F = \\frac{9}{5}C + 32 \\) <br />` +
                        `\\( F = \\frac{9}{5} \\times ${c} + 32 = ${9*c/5} +32 = ${f} \\)`;
        
        answer = f;
    } else {
        question_text = `Convert \\( ${f} ^{\\circ} \\text{F into } ^{\\circ} \\text{C} \\)`;
        solution_text = `\\( C = \\frac{5}{9}(F - 32) \\) <br />` +
                        `\\( C = \\frac{5}{9} (${f} - 32) = \\frac{5}{9} \\times ${f - 32} = ${c} \\)`;
        
        answer = c;
    }
    
    return {
        id: q_id,
        question: question_text,
        answer: answer,
        solution: solution_text
    };
}
window.conversionQuestionGenerators.push(generateConvertTemp);
