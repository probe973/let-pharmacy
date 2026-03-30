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


function generate_bsa(q_id) {
    
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
window.reviewQuestionGenerators.push(generate_bsa);


function generate_crcl(q_id) {
    
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
window.reviewQuestionGenerators.push(generate_crcl);


function generate_bmi(q_id) {
    
    let bmi, hcm, hm, mass, question_text, solution_text;
    
    while (true) {
        hcm = [140, 150, 160, 180, 200][getRandomInt(0,4)];
        hm = hcm/100;
        mass = [45, 49, 54, 60, 63, 64, 68, 72, 76, 80, 81, 84, 88, 92][getRandomInt(0,13)];
        bmi = mass/hm/hm;
        
        if (bmi === roundToDecimalPlaces(bmi,0)) break;
    }
    
    question_text = `Find the BMI of someone who is ${hcm} cm tall and has a mass of ${mass} kg.`;
    
    solution_text = `Height in m: ${hm} m <br />` +
                    `Height squared: ${hm} × ${hm} = ${roundToDecimalPlaces(hm*hm,4)} <br />` +
                    `\\( \\text{BMI} = \\frac{${mass}}{${roundToDecimalPlaces(hm*hm,4)}} = ${bmi} \\text{ kg/m}^2 \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: bmi,
        solution: solution_text
    };
}
window.reviewQuestionGenerators.push(generate_bmi);


function generate_bsap2(q_id) {
    
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
window.reviewQuestionGenerators.push(generate_bsap2);
