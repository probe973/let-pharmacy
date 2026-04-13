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

function generateConvert_mgml_pc(q_id) {
    
    const mgml = getRandomInt(1,500);
    const pc = roundToDecimalPlaces(mgml/10,1);
    
    let question_text, solution_text;
    
    question_text = `Convert ${mgml} mg/ml into %w/v, giving answers correct to 1 decimal place`;
    
    solution_text = `We have ${mgml} mg in 1 ml <br />` +
                    `Multiply by 100 to get 100 ml: ${mgml} × 100 = ${mgml*100} mg/100 ml <br />` +
                    `Convert to g: ${pc} g per 100 ml <br />` +
                    `${pc} %w/v`;
                    
    return {
        id: q_id,
        question: question_text,
        answer: pc,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_mgml_pc);


function generateConvert_pc_mgml(q_id) {
    
    const mgml = getRandomInt(1,500);
    const pc = roundToDecimalPlaces(mgml/10,1);
    
    let question_text, solution_text;
    
    question_text = `Convert ${pc} %w/v into mg/ml.`;
    
    solution_text = `We have ${pc} g in 100 ml <br />` +
                    `Convert to mg: ${pc*1000} mg in 100 ml <br />` +
                    `Divide by 100 to get 1 ml: ${pc*1000} mg ÷ 100 = ${mgml} mg per 1 ml <br />` +
                    `${mgml} mg/ml`;
                    
    return {
        id: q_id,
        question: question_text,
        answer: mgml,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_pc_mgml);


function generateConvert_mgml_1in(q_id) {
    
    let pow2, pow5, mgml;
    
    while (true) {
        pow2 = getRandomInt(0,4);
        pow5 = getRandomInt(0,4);
        mgml = Math.pow(2,pow2)*Math.pow(5,pow5);
        if (mgml < 1000) break;
    }
        
    
    const x = roundToDecimalPlaces(1000/mgml,1);
    
    let question_text, solution_text;
    
    question_text = `Convert ${mgml} mg/ml into 1 in X.  Type the value of X in the solution box only, to 1 decimal place if necessary`;
    
    solution_text = `\\( ${mgml} \\text{ mg : } 1 \\text{ ml} \\) <br />` +
                    `\\( 1 \\text{ mg : } \\frac{1}{${mgml}} \\text{ ml} \\) <br />`+
                    `\\( 1000 \\text { mg : }  \\frac{1}{${mgml}} \\times 1000 \\text{ ml} \\) <br />` +
                    `\\( 1 \\text{ g : } ${x} \\text{ ml} \\) <br />`+
                    `1 in ${x}`;
                    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_mgml_1in);


function generateConvert_pc_1in(q_id) {
    
    let pow2, pow5, mgml;
    
    while (true) {
        pow2 = getRandomInt(0,4);
        pow5 = getRandomInt(0,4);
        mgml = Math.pow(2,pow2)*Math.pow(5,pow5);
        if (mgml < 1000) break;
    }
        
    
    const x = roundToDecimalPlaces(1000/mgml,1);
    const pc = mgml/10
    
    let question_text, solution_text;
    
    question_text = `Convert ${pc} %w/v into 1 in X.  Type the value of X in the solution box only, to 1 decimal place if necessary`;
    
    solution_text = `\\( ${pc} \\text{ g : }  \\text{ 100 ml} \\) <br />` +
                    `\\( 1 \\text{ g : } \\frac{100}{${pc}} \\text{ ml} \\) <br />`+
                    `\\( 1 \\text{ g : } ${x} \\text{ ml} \\) <br />`+
                    `1 in ${x}`;
                    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_pc_1in);



function generateConvert_1in_pc(q_id) {
    
    const r = [2, 5, 8, 16, 20, 25, 40, 50, 80, 100, 125, 200, 250, 400, 500, 625, 2000, 5000, 10000][Math.floor(Math.random() * 18)];
    
    const x = roundToDecimalPlaces(100 / r, 2);
    
    let question_text, solution_text;
    
    question_text = `Convert 1 in ${r} into % w/v. Give your answer to 2 decimal places`;
    
    solution_text = `\\( 1 \\text{ g : } ${r} \\text{ ml} \\) <br />` +
                    `For percentage weight volume, you need g per 100 ml <br />`+
                    `\\( \\frac{1}{${r}} \\text{ g : } 1 \\text{ ml} \\) <br />` +
                    `\\( \\frac{1}{${r}} \\times 100 \\text{ g : 100 ml} \\) <br />`+
                    `\\( ${x} \\text{ g : 100 ml} \\) <br />` +
                    `${x} %w/v`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_1in_pc);


function generateConvert_1in_mgml(q_id) {
    
    const r = [2, 5, 8, 16, 20, 25, 40, 50, 80, 100, 125, 200, 250, 400, 500, 625, 2000, 5000, 10000][Math.floor(Math.random() * 18)];
    
    const x = roundToDecimalPlaces(1000 / r, 1);
    
    let question_text, solution_text;
    
    question_text = `Convert 1 in ${r} into mg/ml. Give your answer to 1 decimal place`;
    
    solution_text = `\\( 1 \\text{ g : } ${r} \\text{ ml} \\) <br />` +
                    `\\( 1000 \\text{ mg : } ${r} \\text{ ml} \\) <br />`+
                    `\\( \\frac{1000}{${r}} \\text{ mg : } 1 \\text{ ml} \\) <br />` +
                    `\\( ${x} \\text{ mg : 1 ml} \\) <br />` +
                    `${x} mg/ml`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_1in_mgml); 

                   
function generateConvert_ss_pc_a(q_id) {
    
    const pc = getRandomInt(1,200)/10;
    const mass = getRandomInt(1,25)*20;
    
    const x = roundToDecimalPlaces(pc*mass/100,2);
    
    let question_text, solution_text;
    
    question_text = `How many grams of active ingredient are there in a cream of ${mass} g that is ${pc} %w/w? Give answers up to 2 decimal places.`;
    
    solution_text = `\\( \\frac{${pc} \\text{ g}}{100 \\text{ g}} \\times ${mass} \\text{ g} = ${x} \\text{ g} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_ss_pc_a); 


function generateConvert_sl_pc_a(q_id) {
    
    let pc,vol,x,solution_text,question_text;
    
    while (true) {
        pc = getRandomInt(10,500)/100;
        vol = getRandomInt(10,150)*5;
        x = roundToDecimalPlaces(pc*vol*10,0);
        
        if (x<1200) break;
    }
    
    question_text = `A solution is ${pc} %w/v.  How many mg of active ingredient are in ${vol} ml of the solution?  Give answer to the nearest mg.`;
    
    solution_text = `\\( \\frac{${pc} \\text{ g}}{100 \\text{ ml}} \\times ${vol} \\text{ ml} \\) <br />` +
                    `\\( = \\frac{${pc*1000} \\text{ mg}}{100 \\text{ ml}} \\times ${vol} \\text{ ml} \\) <br />` +
                    `\\( = ${x} \\text{ mg} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_sl_pc_a);

 
function generateConvert_sl_mgml_a(q_id) { 
    
    let mgml, volml, voll, mg, g, solution_text,question_text;
    
    while (true) {
        mgml = getRandomInt(5, 100)*5;
        volml = getRandomInt(10, 100)*100;
        voll = volml/1000;
        mg = mgml*volml;
        g = roundToDecimalPlaces(mg/1000,1);
        
        if (mg > 990) break;
    }
    
    question_text = `A solution is ${mgml} mg/ml.  How many g of active ingredient are in ${voll} L of the solution?  Give answer to no more than 1 decimal place.`;
    
    solution_text = `\\( ${voll} \\text{ l} = ${volml} \\text{ ml} \\) <br />`+
                    `\\( \\frac{${mgml} \\text{ mg}}{1 \\text{ ml}} \\times ${volml} \\text{ ml} = ${mg} \\text{ mg} \\) <br />`+
                    `\\( ${mg} \\text{ mg} = ${mg/1000} \\text{ g} \\) <br />`+
                    `${g} g`;
                    
    return {
        id: q_id,
        question: question_text,
        answer: g,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_sl_mgml_a);
    
    
function generateConvert_sl_1in_a(q_id) {
    
    let x, vol, g1, gr, question_text, solution_text;
    
    while (true) {
        x = getRandomInt(3, 500);
        vol = getRandomInt(50, 200)*5;
        g1 = vol/x;
        gr = Math.round(g1);
        
        if (g1 === gr) break;
    }
    
    question_text = `How many grams of active ingredient are in ${vol} ml of a 1 in ${x} solution?  Give answer to the nearest gram`;
    
    solution_text = `\\( \\frac{1 \\text{ g}}{${x} \\text{ ml}} \\times ${vol} \\text{ ml} = ${gr} \\text{ g} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: gr,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_sl_1in_a);


function generateConvert_mgml_mgml(q_id) {
    
    let x, v, m, question_text, solution_text;
    
    while (true) {
        x = getRandomInt(5,200);
        v = getRandomInt(50, 600);
        m = v*x;
        
        if (m < 1000) break;
    }
    
    question_text = `If ${m} mg of drug is disolved in ${v} ml of water, what is it's strength in mg/ml?`;
    
    solution_text = `\\( \\frac{${m} \\text{ mg}}{${v} \\text{ ml}} = ${x} \\text{ mg/ml} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_mgml_mgml);
    
    
function generateConvert_mgml_pc(q_id) {
    
    let xm, x, v, m, question_text, solution_text;
    
    while (true) {
        xm = getRandomInt(5,150);
        v = getRandomInt(50, 800);
        m = v*xm;
        x = roundToDecimalPlaces(xm/10,1);
        
        if (m < 1000) break;
    }
    
    question_text = `If ${m} mg of drug is disolved in ${v} ml of water, what is it's strength in %w/v?  Give answers to 1 decimal place`;
    
    solution_text = `\\( \\frac{${m} \\text{ mg}}{${v} \\text{ ml}} = ${xm} \\text{ mg/ml} \\) <br />`+
                    `Make out of 100 ml: \\( ${xm *100} \\text{ mg/100ml} \\) <br />`+
                    `Convert to g: \\( \\frac{${x} \\text{ g}}{100 \\text{ ml}} = ${x} \\text{ %w/v} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.conversionQuestionGenerators.push(generateConvert_mgml_pc);
