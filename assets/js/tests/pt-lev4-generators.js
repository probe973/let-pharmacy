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

    x = roundToDecimalPlaces(1000 / r, 1);

    solution_text = `This means 1 g in ${r} ml <br />
Convert to mg to get 1000 mg in ${r} ml or \\( \\frac{1000}{${r}} \\text{mg/ml} \\) <br />
${x} mg/ml`;
} else {
    question_text = `Convert 1 in ${r} into % w/v. Give your answer to 2 decimal places`;

    x = roundToDecimalPlaces(100 / r, 2);

    solution_text = `This means 1 g in ${r} ml <br />
For percentage weight volume, you need g per 100 ml <br />
\\(\\frac{1 \\text{ g}}{${r} \\text{ ml}} \\times 100 \\text{ ml} = ${x} \\text{ % w/v} \\) <br />
${x} % w/v`;
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


function generateQ11_ftin(q_id, roundToDecimalPlaces) { 
    
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
    let cmsanity;
    if (roundToDecimalPlaces(inc/2,0) === inc/2) {
        cmsanity = cm;
    } else {
        cmsanity = cm+0.5;
    }
    const m = roundToDecimalPlaces(cmsanity/100, 2);
    
    const ct = getRandomInt(1,2);
    
    
    let question_text, solution_text;
    
    if (ct === 1) {
    
        question_text = `Assuming 2.5 cm is 1 inch, convert a height of ${ft} feet and ${inc} inches into metres.  Give your answer to 2 d.p.`;
        
    } else {
        
        question_text = `A patient is ${ft} feet and ${inc} inches.  What is the patient's height in metres, giving your answer to no more than 2 d.p..  Use 2.5 cm is 1 inch.`
    }
    
    solution_text = `1 foot is 12 inches, so ${ft} feet and ${inc} inches is ${ft} × 12 + ${inc} = ${inches} inches<br />` +
                    `Convert to cm:  ${inches} inch × 2.5 cm/inch = ${cm} cm<br />` +
                    `Convert to m, divide by 100, and round to 2 d.p.: ${m} m`;
     
    
    return {
        id: q_id,
        question: question_text,
        answer: m,
        solution: solution_text
    };
    
}
window.CurrentTestGenerators.push(generateQ11_ftin); 


function generateQ12_stlb(q_id, roundToDecimalPlaces) { 
    
    const st = getRandomInt(5,20);
    const lb = getRandomInt(1,13);
    const pounds = 14*st + lb;
    const kg = roundToDecimalPlaces(pounds/2,1);
    
    const ct = getRandomInt(1,2);
    
    let question_text, solution_text;
    
    if (ct === 1) {
    
        question_text = `Using 1 kg = 2 lbs, what is the mass of a patient, in kg, if they are ${st} stone and ${lb} lbs? Give you answer to 1 d.p.`;
        
    } else {
        
        question_text = `Making use of 1 kg = 2 lbs: convert ${st} stone and ${lb} pounds into kg, giving your answer to 1 d.p..`;
    }
    
    solution_text = `1 stone is 14 lbs, so ${st} stone and ${lb} lbs is ${st} × 14 + ${lb} = ${pounds} lbs<br />` +
                    `Convert to kg, divide by 2:  ${pounds} ÷ 2 = ${kg} kg`;
    
    return {
        id: q_id,
        question: question_text,
        answer: kg,
        solution: solution_text
    };
    
}
window.CurrentTestGenerators.push(generateQ12_stlb);


function generateQ14_CF(q_id, roundToDecimalPlaces) {
    
    const c = getRandomInt(1,19)*5;
    const f = 9*c/5 + 32;
    
    const ct = getRandomInt(1,4);
    
    let question_text, solution_text, answer;
    
    if (ct === 1) {
        question_text = `Convert \\( ${c} ^{\\circ} \\text{C into } ^{\\circ} \\text{F} \\)`;
        solution_text = `\\( F = \\frac{9}{5}C + 32 \\) <br />` +
                        `\\( F = \\frac{9}{5} \\times ${c} + 32 = ${9*c/5} +32 = ${f} \\)`;
        
        answer = f;
    } else  if (ct === 2) {
        question_text = `Convert \\( ${f} ^{\\circ} \\text{F into } ^{\\circ} \\text{C} \\)`;
        solution_text = `\\( C = \\frac{5}{9}(F - 32) \\) <br />` +
                        `\\( C = \\frac{5}{9} (${f} - 32) = \\frac{5}{9} \\times ${f - 32} = ${c} \\)`;
        
        answer = c;
    } else if (ct === 3) {
        question_text = `The instructions to a procedure say that while preparing a solution it must be at ${c} degrees centigrade.  What is this in degrees Fahrenheit?`;
        solution_text = `\\( F = \\frac{9}{5}C + 32 \\) <br />` +
                        `\\( F = \\frac{9}{5} \\times ${c} + 32 = ${9*c/5} +32 = ${f} \\)`;
        answer = f;
    } else {
        question_text = `A measurement of a surface gives a reading of ${f} degrees Fahrenheit.  What is this in degrees centigrade?`;
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
window.CurrentTestGenerators.push(generateQ14_CF);


function generateQ20_recipe(q_id, roundToDecimalPlaces) {
    
    const chosen = ["A", "B", "C"][Math.floor(Math.random() * 3)];
    
    const wt = getRandomInt(5,25)*10;
    
    let A, B, C, mp, wk, wku, question_text, solution_text;
    
    while (true) {
        mp = getRandomInt(1, 10)*10;
        A = getRandomInt(1, 20);
        B = getRandomInt(10,100)*5;
        C = getRandomInt(1, Math.round(wt/3));
        if (mp*wt/1000 >= 1 && mp*wt/1000 <= 10 && A*mp <= 1000 && B*mp <= 1000 && C*mp <= 1000) {
            break;
        }
    }
    
    const rwt = mp*wt/1000;
    
    
    
    if (chosen === "A") {
        wk = A; 
        wku = "g";
    } else if (chosen === "B") {
        wk = B; 
        wku = "mg";
    } else {
        wk = C; 
        wku = "ml";
    }
    
    const answer = wk*mp;
    
    question_text = `A formula for a lotion is: <br />` +
                    `Compound A:  ${A} g <br />` +
                    `Compound B:  ${B} mg <br />` +
                    `Solution C:  ${C} ml <br />` +
                    `Water to ${wt} ml <br /><br />` +
                    `How much of ${chosen} is required, in ${wku}, to make ${rwt} L of the lotion?`;
                    
    solution_text = `${rwt} L is ${rwt * 1000} mL <br />` +
                    `This is ${mp} times more than the original lotion formula amount of ${wt} mL <br />` +
                    `Multiply ${wk} ${wku} by ${mp} gives ${answer} ${wku}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: answer,
        solution: solution_text
    };
}
window.CurrentTestGenerators.push(generateQ20_recipe);


function generateQ5_grequired(q_id, roundToDecimalPlaces) {
    
    const mgml = getRandomInt(3, 20);
    const ml = getRandomInt(15, 90)*10;
    const mg = ml * mgml;
    const g = mg / 1000;

    const x = roundToDecimalPlaces(g, 1);
    
    const ct = getRandomInt(1,2);
    
    if (ct === 1) {

        question_text = `If a mixture is ${mgml} mg/ml, how many grams are required to make ${ml} ml of the mixture? Give your answer to 1 decimal place.`;
    } else {
        question_text = `How many grams of active indgredient are required to make ${ml} ml of a solution with strength ${mgml} mg/ml?  Give answer to 1 d.p..`;
    }

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


function generateQ17_ww(q_id, roundToDecimalPlaces) {
    
    let pc1, pc2, pc, m, reqg, reqmg;
    
    while (true) {
        pc1 = getRandomInt(1, 9);
        pc2 = 10**getRandomInt(0,2);
        pc = pc1/pc2;
        m = getRandomInt(2, 40)*10;
        reqg = pc*m/100;
        reqmg = reqg*1000;
        
        if (reqg <= 2 && reqg >= 0.001 && reqmg === roundToDecimalPlaces(reqmg,0)) {
            break;
        }
    }
         
    
    let question_text, solution_text;
    
    question_text = `If an ointment is described as ${pc} % w/w, how much active ingredient, in milligrams, will be required to make ${m} grams?`;
    
    solution_text = `${pc} % of ${m} g:  <br /> `+ 
                    `\\( \\frac{${pc}}{100} \\times ${m} = ${reqg} \\) <br />`  +
                    `Convert to mg: ${reqmg}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: reqmg,
        solution: solution_text
    };
}
window.CurrentTestGenerators.push(generateQ17_ww);


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
    
    const ct = getRandomInt(1,2);
    
    if (ct === 1) {
    
        question_text =`How much ${compound}, in grams, is required to make ${millimoles} millimoles, given that the atomic weights are: ${atomic_text}?`;
    } else {
        question_text =`Given the following atomic weights: ${atomic_text}, how many grams of ${compound} are required for ${millimoles} mmol?`;
    }
    
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


function generateQ10_c1v1(q_id, roundToDecimalPlaces) {
    
    const v1 = getRandomInt(6,50)*5;
    const mf = getRandomInt(5,16)/2;
    const c2 = getRandomInt(3,10);
    const v2 = mf*v1;
    const c1 = mf*c2;
    
    let question_text, solution_text;
    
    question_text = `You need to make ${v2} mL of a ${c2} M solution from a ${c1} M stock solution. How many millilitres of stock solution do you require?`;
    
    solution_text = `\\( C_{1}V_{1} = C_{2}V_{2} \\) <br />` +
                    `\\( C_{1} = ${c1} \\text{ M} \\) <br />` +
                    `\\( V_{1} = \\text{ ?} \\) <br />` +
                    `\\( C_{2} = ${c2} \\text{ M} \\) <br />` +
                    `\\( V_{2} = ${v2} \\text{ ml} \\) <br />` +
                    `\\( V_{1} = \\frac{C_{2}V_{2}}{C_{1}} = \\frac{${c2} \\times ${v2}}{${c1}} = ${v1} \\) <br />` +
                    `${v1} ml`;
    
    return {
        id: q_id,
        question: question_text,
        answer: v1,
        solution: solution_text
    };
    
}
window.CurrentTestGenerators.push(generateQ10_c1v1);                


function generateQ15_dilution(q_id, roundToDecimalPlaces) {
    
    let c1, df, c2, v2, v1;
    
    while (true) {
        c1 = getRandomInt(1, 10)*100;
        df = getRandomInt(1,10)*5;
        c2 = c1*df;
        v2 = getRandomInt(1,80)*10;
        v1 = v2/df;
        
        const check = roundToDecimalPlaces(v1,2);
        
        if (v1 === check) {
            break;
        }
    }
    
    const x = roundToDecimalPlaces(v1,1);
    
    let question_text, solution_text;
    
    question_text = `How many millilitres of a 1 in ${c1} solution is required to produce ${v2} mL of a 1 in ${c2} solution? Please give your answer to 1 decimal places`;
    
    solution_text = `1 in ${c2} has been diluted by a factor of ${df} from a 1 in ${c1} solution ( ${c2} ÷ ${c1} ) <br />` +
                    `Volume required from stock is ${v2} ÷ ${df} = ${v1} mL <br />` +
                    `Round: ${x} mL`;
                    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.CurrentTestGenerators.push(generateQ15_dilution);


function generateQ13_bsa(q_id, roundToDecimalPlaces) {
    
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
        `Given these values:<br />` +
        `${result_string} <br />` +
        `The formula: <br />` +
        `\\( \\text{BSA}(m^2) = \\sqrt{ \\frac{ \\text{mass(kg)} \\times \\text{height(cm)} }{3600} } \\) <br />` +
        `Find the body surface area, in metres squared, of someone who is ${height_m_str} metres tall and weights ${mass} kg. <br />`;

    const solution_text =
        `\\( \\frac{${mass} \\times ${height}}{3600} = ${bsa2} \\) <br />` +
        `Look up in list gives ${x}`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.CurrentTestGenerators.push(generateQ13_bsa);


function generateQ16_crcl(q_id, roundToDecimalPlaces) {
    
    sex = ["female","male"][Math.floor(Math.random() * 2)];
    
    let mad = 0;
    
    if (sex === "male") {
        mad = 20;
    }
    
    const age = getRandomInt(65, 90);
    const abw = getRandomInt(60, 75);
    const ibw = abw + getRandomInt(1, 10);
    const secr = getRandomInt(8, 14)*10 + mad;
    
    const crcl = roundToDecimalPlaces((140-age)*abw/secr,2);
    const answer = roundToDecimalPlaces((140-age)*abw/secr,1);
    
    let question_text, solution_text;
    
    question_text = `If a ${age} year old ${sex} has an ideal body weight of ${ibw} kg and an actual body weight of ${abw} kg, with a serum creatinine of ${secr} micromol/litre, what is their CrCl? ` + 
                    `Please give your answer to 1 decimal place <br />` +
                    `Assume: <br />` +
                    `\\( \\text{CrCl (ml/min)} = \\frac{(140 - \\text{age}) \\times \\text{Weight (kg)}}{\\text{Serum Creatine (micromol/L)}} \\)`;
    
    solution_text = `Underweight, so use ABW. <br />` +
                    `\\( (140 - \\text{age}) = 140 - ${age} = ${140 - age} \\) <br />` +
                    `\\( ${140 - age} \\times ${abw} = ${(140 - age)*abw} \\) <br />` +
                    `\\( \\frac{${(140 - age)*abw}}{${secr}} = ${crcl} \\) <br />` +
                    `Round: ${answer}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: answer,
        solution: solution_text
    };
}
window.CurrentTestGenerators.push(generateQ16_crcl);


function generateQ6_mlrequired(q_id, roundToDecimalPlaces) {
    
    const x = getRandomInt(5, 25);
    const mgml = getRandomInt(8,100);
    const pc = mgml / 10;
    const mg = x * mgml;
    const gml = pc / 100
    
    let question_text, solution_text;
    
    const ct = getRandomInt(1,2);
    
    if (ct === 1) {
    
        question_text = `How many millilitres of a ${roundToDecimalPlaces(pc,1)} % w/v solution are required to provide a dose of ${mg} mg?`;
    } else {
        question_text = `If a patient requires a dose ${mg} mg and you have a ${roundToDecimalPlaces(pc,1)} % w/v solution, how many millilitres should you give? `;
    }
    
    solution_text = `\\( \\frac{\\text{Need}}{\\text{Have}} \\times \\text{Supplied In} \\) <br />` +
                    `${roundToDecimalPlaces(pc,1)} % w/v means ${roundToDecimalPlaces(pc,1)} g in 100 ml <br />` +
                    `\\( \\frac{${mg} \\text{ mg}}{${roundToDecimalPlaces(pc,1)} \\text{ g}} \\times 100 \\text{ ml} = \\frac{${mg/1000} \\text{ g}}{${roundToDecimalPlaces(pc,1)} \\text{ g}} \\times 100 \\text{ ml} = ${x} \\text{ ml} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}
window.CurrentTestGenerators.push(generateQ6_mlrequired);
    

function generateQ19_ratetime(q_id, roundToDecimalPlaces) {
    
    let rate, time, mcg, mg
    
    while (true) {
        rate = getRandomInt(20, 100);
        time = [5, 6, 8, 12, 15, 16, 20, 24, 36][Math.floor(Math.random() * 9)];
        mcg = 60*rate*time;
        mg = mcg/1000;
        
        if (mg >= 1 && mg <= 1000) {
            break;
        }
    }
    
    const answer = roundToDecimalPlaces(mg,1);
    
    const ct = getRandomInt(1,2);
    
    let question_text, solution_text
    
    if (ct === 1) {
        question_text = `If a patient requires ${rate} mcg/minute of a drug for ${time} hours, what is total amount of drug they will receive in milligrams? Please give your answer to 1 decimal place`;
    } else {
        question_text = `A patient receives treatment for ${time} hours of a drug at ${rate} mcg/min.  How much drug did they receive?  Give your answer in milligrams, correct to 1 d.p..`;
    }
    
    solution_text = `${rate} mcg/min × 60 min/hr = ${rate*60} mcg/hr <br />` +
                    `${rate*60} mcg/hr × ${time} hr = ${mcg} mcg = ${mg} mg<br />` +
                    `${answer} mg`;
                    
    return {
        id: q_id,
        question: question_text,
        answer: answer,
        solution: solution_text
    };
}
window.CurrentTestGenerators.push(generateQ19_ratetime);

    
function generateQ18_nhs(q_id, roundToDecimalPlaces) {
    
    const mass = getRandomInt(40, 100);
    const rate = getRandomInt(1,20)/10;
    const time = getRandomInt(1,9)*10;
    const pc = [2, 4, 5, 8, 10, 20, 25, 40, 50][Math.floor(Math.random() * 9)];
    const mgml = pc*10;
    
    const needmg = mass*rate*time;
    const needg = needmg/1000;
    
    const qt = getRandomInt(1,2);
    
    let question_text, solution_text, answer;
    
    if (qt === 1) {
        question_text = `A ${mass} Kg patient requires ${rate} mg/Kg/minute for ${time} minutes.  This is to be delivered from a ${pc} % w/v solution. How much solution will they need in ml? `+
                        `Please give your answer to 1 decimal places`;
        
        answer = roundToDecimalPlaces(needg/pc * 100,1);
                        
        solution_text = `Need ${mass} kg × ${rate} mg/kg/minute = ${roundToDecimalPlaces(mass*rate,1)} mg/min <br />` +
                        `Need ${roundToDecimalPlaces(mass*rate,1)} mg/min × ${time} min = ${roundToDecimalPlaces(needmg,1)} mg <br />` +
                        `Have ${pc} g in 100 ml <br />` +
                        `\\( \\frac{\\text{Need}}{\\text{Have}} \\times \\text{Supplied In} = \\frac{${roundToDecimalPlaces(needmg,1)} \\text{ mg}}{${pc} \\text{ g}} \\times 100 \\text{ ml} = ` +
                        `\\frac{${needg} \\text{ g}}{${pc} \\text{ g}} \\times 100 \\text{ ml} = ${answer} \\text{ ml} \\)`;
        
    } else {
        question_text = `A ${mass} Kg patient requires ${rate} mg/Kg/minute for ${time} minutes.  This is to be delivered from a ${mgml} mg/ml solution. How much solution will they need in ml? `+
                        `Please give your answer to 1 decimal place`;
        
        answer = roundToDecimalPlaces(needmg/mgml,1);
                        
        solution_text = `Need ${mass} kg × ${rate} mg/kg/minute = ${roundToDecimalPlaces(mass*rate,1)} mg/min <br />` +
                        `Need ${roundToDecimalPlaces(mass*rate,1)} mg/min × ${time} min = ${roundToDecimalPlaces(needmg,1)} mg <br />` +
                        `Have ${mgml} mg in 1 ml <br />` +
                        `\\( \\frac{\\text{Need}}{\\text{Have}} \\times \\text{Supplied In} = \\frac{${roundToDecimalPlaces(needmg,1)} \\text{ mg}}{${mgml} \\text{ mg}} \\times 1 \\text{ ml} = ${answer} \\text{ ml} \\)`;
        }
        
    return {
        id: q_id,
        question: question_text,
        answer: answer,
        solution: solution_text
    };
}
window.CurrentTestGenerators.push(generateQ18_nhs);
