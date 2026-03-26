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

function generateQ7_lfrompart(q_id, roundToDecimalPlaces) {
    
    let part, g;
    while (true) {
        part = [5, 8, 16, 20, 25, 40, 50, 80, 100, 125, 200, 250, 400, 500, 625][Math.floor(Math.random() * 15)];
        g = getRandomInt(11,99);
        if (part * g > 900) {
            break;
        }
    }
    
    const ml = part * g;
    const l = ml / 1000;
    const x = roundToDecimalPlaces(l, 1);
        
    let question_text, solution_text;
    
    question_text = `How many litres are required to provide a dose of ${g} g from a drug described as 1 part in ${part}?  Give answer to 1 decimal place.`;
    
    solution_text = `1 g in ${part} ml <br />` +
                    `${g} g in ${part} × ${g} ml = ${g} g in ${ml} ml <br />`+
                    `Convert to litres: ${l} L <br />`+
                    `Round: ${x} L`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}
window.CurrentTestGenerators.push(generateQ7_lfrompart);
    
function generateQ8_mmoltog(q_id, roundToDecimalPlaces) {
    
    const elements = {
  H: ["hydrogen", 1],
  C: ["carbon", 12],
  O: ["oxygen", 16],
  Na: ["sodium", 23],
  Cl: ["chlorine", 35.5],
  Ca: ["calcium", 40],
  K: ["potassium", 39],
  N: ["nitrogen", 14],
  S: ["sulfur", 32],
  Mg: ["magnesium", 24],
  P: ["phosphorus", 31],
  Fe: ["iron", 56],
  Cu: ["copper", 63.5],
  Zn: ["zinc", 65],
  Al: ["aluminium", 27],
  Ag: ["silver", 108],
  Ba: ["barium", 137],
  Pb: ["lead", 207],
  Br: ["bromine", 80],
  I: ["iodine", 127]
};
    
    const compounds = {
  H2O: { H: 2, O: 1 },
  CO2: { C: 1, O: 2 },
  NaCl: { Na: 1, Cl: 1 },
  KCl: { K: 1, Cl: 1 },
  CaCO3: { Ca: 1, C: 1, O: 3 },
  MgSO4: { Mg: 1, S: 1, O: 4 },
  Na2CO3: { Na: 2, C: 1, O: 3 }
};

    function calculateFormulaMass(formula) {
  let total = 0;
  let breakdown = [];

  for (const symbol in formula) {
    const count = formula[symbol];
    const [name, weight] = elements[symbol];

    const subtotal = weight * count;
    total += subtotal;

    breakdown.push(
      count === 1
        ? `${name} = ${weight}`
        : `${name} = ${count} × ${weight} = ${subtotal}`
    );
  }

  return [total, breakdown];
}
    
    let compound, formula_mass, breakdown, millimoles, grams;

    while (true) {

        const keys = Object.keys(compounds);
        compound = keys[Math.floor(Math.random() * keys.length)];

        [formula_mass, breakdown] = calculateFormulaMass(compounds[compound]);

        const choices = [10, 20, 25, 40, 50, 60, 75, 80, 100, 120, 125, 150, 200, 250, 500];
        millimoles = choices[Math.floor(Math.random() * choices.length)];

        grams = formula_mass * millimoles / 1000;

    // stop condition (same logic as Python)
        if (Math.abs(grams - Math.round(grams)) < 1e-9) {
            grams = Math.round(grams);
            break;
        }
    }
    
    const atomic_text = Object.keys(compounds[compound])
    .map(s => `${elements[s][0]} = ${elements[s][1]}`)
    .join(", ");
    
    
    let question_text, solution_text;
    
    question_text =`How much ${compound}, in grams, is required to make ${millimoles} millimoles, given that the atomic weights are: ${atomic_text}?`;
    
    solution_text =`Formula mass of ${compound}: <br />` +
                    breakdown.join("<br />") +
                    `<br />Total = ${formula_mass} g/mol<br /><br />` +
                    `${millimoles} millimoles = ${millimoles/1000} mol<br /><br />` +
                    `Mass = ${millimoles/1000} mol × ${formula_mass} g/mol <br />`+
                    `= ${grams} g`;
    
    return {
        id: q_id,
        question: question_text,
        answer: grams,
        solution: solution_text
    };
    
}
window.CurrentTestGenerators.push(generateQ8_mmoltog);
    

function generateQ9_Mtog(q_id, roundToDecimalPlaces) {
    
    const compounds = {
    "Sodium Chloride": 58.5,
    "Potassium Chloride": 74,
    "Calcium Carbonate": 100,
    "Magnesium Sulfate": 120,
    "Glucose": 180,
    "Sodium Carbonate": 106,
    "Hydrochloric Acid": 36.5,
    "Sulfuric Acid": 98,
    "Nitric Acid": 63,
    "Potassium Nitrate": 101,
    "Sodium Hydroxide": 40,
    "Potassium Hydroxide": 56,
    "Calcium Chloride": 111,
    "Copper Sulfate": 160,
    "Zinc Chloride": 136,
    "Iron(III) Chloride": 162.5,
    "Aluminium Oxide": 102,
    "Calcium Oxide": 56,
    "Magnesium Oxide": 40,
    "Ammonia": 17
    };
    
    
    const compoundNames = Object.keys(compounds);
    const randomIndex = Math.floor(Math.random() * compoundNames.length);
    const compound_name = compoundNames[randomIndex];
    const mw = compounds[compound_name];
    
    const molarityOptions = [0.5, 1, 1.25, 1.5, 2, 2.5, 4, 5];
    const molesOptions = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1, 1.2, 1.25, 1.5, 2, 2.4, 2.5, 4, 5, 8, 10, 12.5];

    const molarity = molarityOptions[Math.floor(Math.random() * molarityOptions.length)];
    const moles = molesOptions[Math.floor(Math.random() * molesOptions.length)];

    const volume_L = moles / molarity;
    const volume_ml = Math.round(volume_L * 1000);

    const grams = moles * mw;
    const answer = roundToDecimalPlaces(grams, 0);
    
    let question_text, solution_text;
    
    question_text = `How many grams of ${compound_name} (molecular weight = ${mw}) are required to produce ${volume_ml} millilitres of a ${molarity} molar solution? Please give your answer to the nearest g.` ;
    
    solution_text = `Convert volume to litres:<br />` +
                    `${volume_ml} ml = ${roundToDecimalPlaces(volume_L,3)} L<br /><br />` +
                    `Moles = molarity × volume<br />` +
                    `= ${molarity} × ${roundToDecimalPlaces(volume_L,3)}<br />` +
                    `${moles} mol<br /><br />` +
                    `Mass = moles × molecular weight<br />` +
                    `= ${moles} × ${mw}<br />` +
                    `=${grams} g<br /><br />` +
                    `Answer to nearest g = ${answer} g`;
    
    return {
        id: q_id,
        question: question_text,
        answer: answer,
        solution: solution_text
    };
    
}
window.CurrentTestGenerators.push(generateQ9_Mtog);
