window.reviewQuestionGenerators = [];

// Local rounding helper
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_mw(q_id) {
    
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
  Na2CO3: { Na: 2, C: 1, O: 3 },
  NH3: { N: 2, H: 3 },
  H3PO4: { H: 3, P: 1, O: 4},
  PCl: { P: 1, Cl: 1 },
  Ca3P2: { Ca: 3, P: 2},
  PH3: { P: 1, H: 3 },
  Fe2O3: { Fe: 2, O: 3 },
  Fe3O4: { Fe: 3, O: 4 },
  FeS2: { Fe: 1, S: 2 },
  CuSO4: { Cu: 1, S: 1, O: 4 },
  CuCl2: { Cu: 1, Cl: 2 },
  ZnO: { Zn: 1, O: 1},
  ZnSO4: {Zn: 1, S: 1, O: 4 },
  ZnCO3: {Zn: 1, C: 1, O: 3 },
  Al2O3: {Al: 2, O: 3},
  AlCl3: {Al: 1, Cl: 3},
  AlP: {Al: 1, P: 1}
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

    const keys = Object.keys(compounds);
    const compound = keys[Math.floor(Math.random() * keys.length)];
    let [formula_mass, breakdown] = calculateFormulaMass(compounds[compound]);
    const atomic_text = Object.keys(compounds[compound])
    .map(s => `${elements[s][0]} = ${elements[s][1]}`)
    .join(", ");
    
    
    let question_text, solution_text;
    
    question_text = `What is the molecular weight (in g/mol) of ${compound}, given that the molecular weights are: ${atomic_text}?  Give answers to 1 decimal place.`;
    
    solution_text = `Formula mass of ${compound}: <br />` +
                    breakdown.join("<br />") +
                    `<br />Total = ${formula_mass}`;
                    
                
    return {
        id: q_id,
        question: question_text,
        answer: formula_mass,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_mw);


function generate_molar(q_id) {
    
    let M, v, n;
    
    while (true) {
        M = getRandomInt(1,40)/2;
        v = getRandomInt(0,20)*.5+.5;
        n = M*v;
        if (n === roundToDecimalPlaces(n,0)) break;
    }

    
    let question_text, solution_test;
    
    question_text = `What is the molarity of a ${v*1000} ml solution containing ${n} moles?`;
    
    solution_text = `Molarity (M) = moles ÷ volume (L) = ${n} ÷ ${v} L = ${M} M`;
    
    return {
        id: q_id,
        question: question_text,
        answer: M,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_molar);


function generateMtoG(q_id) {
    
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
window.reviewQuestionGenerators.push(generateMtoG);


function generatemmoltog(q_id) {
    
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
  Na2CO3: { Na: 2, C: 1, O: 3 },
  NH3: { N: 2, H: 3 },
  H3PO4: { H: 3, P: 1, O: 4},
  PCl: { P: 1, Cl: 1 },
  Ca3P2: { Ca: 3, P: 2},
  PH3: { P: 1, H: 3 },
  Fe2O3: { Fe: 2, O: 3 },
  Fe3O4: { Fe: 3, O: 4 },
  FeS2: { Fe: 1, S: 2 },
  CuSO4: { Cu: 1, S: 1, O: 4 },
  CuCl2: { Cu: 1, Cl: 2 },
  ZnO: { Zn: 1, O: 1},
  ZnSO4: {Zn: 1, S: 1, O: 4 },
  ZnCO3: {Zn: 1, C: 1, O: 3 },
  Al2O3: {Al: 2, O: 3},
  AlCl3: {Al: 1, Cl: 3},
  AlP: {Al: 1, P: 1}
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
window.reviewQuestionGenerators.push(generatemmoltog);
