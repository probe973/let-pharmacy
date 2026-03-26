function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.CurrentTestGenerators = [];

function generateQ1_conversion(q_id, roundToDecimalPlaces) {
    const answer = Math.floor(Math.random()*801+100);
    const lit = roundToDecimalPlaces(answer / 1000, 3);

    const question_text = `Convert ${lit} litres into millilitres.`;
    const solution_text = `To convert ${lit} L into mL, multiply by 1000 <br />
    \\(${lit} \\times 1000 = ${answer} \\) <br />
    ${answer} mL`;

    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateQ1_conversion);

function generateQ2_conversion(q_id, roundToDecimalPlaces) {


let s, l;
while (true) {
    s = getRandomInt(1, 2);
    l = getRandomInt(2, 3);
    if (s < l) {
        break;
    }
}

const u = ['mc', 'm', ''];
const sn = u[s - 1];
const ln = u[l - 1];

const d = Math.pow(10, 3 * (l - s));
const q = getRandomInt(10, 999) / d / (Math.random() < 0.5 ? 10 : 100);
const x1 = Math.round(q * d * 1000) / 1000;
const x = Math.round(x1 * 100) / 100;

let qs;
if (l - s === 1) {
    qs = q.toFixed(5);
} else if (l - s === 2) {
    qs = q.toFixed(8);
} else {
    qs = q.toFixed(11);
}

const question_text = `Convert ${qs} ${ln}g into ${sn}g. Give your answer correct to 2 decimal places.`;

const solution_text = 
    `To convert ${ln}g into ${sn}g, multiply by ${d} <br />` +
    `\\(${qs} \\times ${d} = ${x1} \\) <br />` +
    `${x}`;

return { 
    id: q_id, 
    question: question_text, 
    answer: x, 
    solution: solution_text 
};
}
window.CurrentTestGenerators.push(generateQ2_conversion);


function generateQ3_ratioconvert(q_id, roundToDecimalPlaces) {

const r = [5, 8, 16, 20, 25, 40, 50, 80, 100, 125, 200, 250, 400, 500, 625, 2000, 5000, 10000][Math.floor(Math.random() * 18)];
const ct = [1, 2][Math.floor(Math.random() * 2)];

let question_text, solution_text, x;

if (ct === 1) {
    question_text = `Convert 1 in ${r} into mg/ml.  Give your answer to 1 decimal place`;

    const x = roundToDecimalPlaces(1000 / r, 1);

    solution_text = `This means 1 g in ${r} ml <br />
Convert to mg to get 1000 mg in ${r} ml or \\( \\frac{1000}{${r}} \\text{mg/ml} \\) <br />
${x} mg/ml`;
} else {
    question_text = `Convert 1 in ${r} into % w/v. Give your answer to 2 decimal places`;

    const x = roundToDecimalPlaces(1000 / r, 2);

    solution_text = `This means 1 g in ${r} ml <br />
For percentage weight volume, you need g per 100 ml <br />
\\(\\frac{1 \\text{ g}}{${r} \\text{ ml}} \\times 100 \\text{ ml} = ${x} \\) <br />
${x}`;
};

return { 
    id: q_id, 
    question: question_text, 
    answer: x, 
    solution: solution_text 
};

}
window.CurrentTestGenerators.push(generateQ3_ratioconvert);


function generateQ4_ratioconvert(q_id, roundToDecimalPlaces) {

    const ct = [1, 2][Math.floor(Math.random() * 2)];
    const pcalc = getRandomInt(200, 2500);

    const pc = pcalc / 100;
    const mgml = pcalc / 10;
    const gml = pc / 100;
    const mghml = mgml * 100;

    let question_text, solution_text, x;

    if (ct === 1) {

        question_text = `Convert ${pc} % w/v into mg/ml. Give your answer to 2 decimal places`;

        solution_text =
            `This means ${pc} g in 100 ml <br />` +
            `Divide by 100 to get g/ml: ${roundToDecimalPlaces(gml, 4)} g/ml <br />` +
            `Convert to mg by multiplying by 1000: ${mgml} mg/ml`;

        x = mgml;

    } else {

        question_text = `Convert ${mgml} mg/ml into % w/v. Give your answer to 2 decimal places`;

        solution_text =
            `This means ${mgml} mg in 1 ml <br />` +
            `Get this out of 100 ml, by multiplying by 100: ${mghml} mg/100 ml <br />` +
            `Convert the g by dividing by 1000: ${pc} g/100 ml <br />` +
            `${pc} % w/v`;

        x = pc;
    }

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}

window.CurrentTestGenerators.push(generateQ4_ratioconvert);

function generateQ5_grequired(q_id, roundToDecimalPlaces) {
    
    const mgml = getRandomInt(3, 20);
    const ml = getRandomInt(15, 90)*10;
    const mg = ml * mgml;
    const g = mg / 1000;

    const x = roundToDecimalPlaces(g, 1);

    question_text = `If a mixture is ${mgml} mg/ml, how many grams are required to make ${ml} ml of the mixture? Give your answer to 1 decimal place.`;

    solution_text = `\\( ${mg} \\text{ ml} \\times ${mgml} \\text{ mg/ml} = ${mg} \\text{ mg} \\) <br />` +
                    `Convert to g: ${g} <br />` +
                    `Round: ${x}`;
 
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };

}
window.CurrentTestGenerators.push(generateQ5_grequired);

function generateQ6_mlrequired(q_id, roundToDecimalPlaces) {
    
    const x = getRandomInt(5, 25);
    const mgml = getRandomInt(8,100);
    const pc = mgml / 10;
    const mg = x * mgml;
    const gml = pc / 100
    
    let question_text, solution_text;
    
    question_text = `How many millilitres of a ${roundToDecimalPlaces(pc,1)} % w/v solution are required to provide a dose of ${mg} mg?`;
    
    solution_text = `Convert ${roundToDecimalPlaces(pc,1)} % w/v into g/ml by dividing by 100: ${roundToDecimalPlaces(gml,3)} g/ml <br />` +
                    `Convert to mg/ml: ${mgml} mg/ml <br />` +
                    `${mg} mg ÷ ${mgml} mg/ml = ${x} ml`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}
window.CurrentTestGenerators.push(generateQ6_mlrequired);
