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
    
function generate_pcwv_g(q_id) {
    let ml, pc, g;
    while (true) {
        ml = getRandomInt(2,80)*10;
        pc = getRandomInt(1,100)/10;
        g = ml*pc/100;
        
        if (g>0.8) break;
    }
    
    const x = roundToDecimalPlaces(g,0);
    
    let question_text = `How many grams of a drug is in a ${ml} ml bottle of a ${pc} % w/v solution?  Give your answer to the nearest gram.`;
    let solution_text = `\\( \\frac{${pc} \\text{ g}}{100 \\text{ ml}} \\times ${ml} \\text{ ml} = ${g} \\text{ g} \\) <br /> Rounds to ${x} g `;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(generate_pcwv_g);

function generate_pcwv_mg(q_id) {
    let ml, pc, g, mg;
    while (true) {
        ml = getRandomInt(2,80)*10;
        pc = getRandomInt(1,100)/10;
        g = ml*pc/100;
        mg = g*1000
        if (g < 1.5) break;
    }
    
    let question_text = `How many milligrams of a drug is in a ${ml} ml bottle of a ${pc} % w/v solution?`;
    let solution_text = `\\( \\frac{${pc} \\text{ g}}{100 \\text{ ml}} \\times ${ml} \\text{ ml} = ${g} \\text{ g} = ${mg} \\text{ mg} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: mg,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_pcwv_mg);

function generate_pcvv(q_id) {
    let ml, pc, mla;
    
    ml = getRandomInt(2,80)*10;
    pc = getRandomInt(1,30)/2;
    mla = ml*pc/100;
        
    
    let question_text = `How many ml of a drug is in a ${ml} ml bottle of a ${pc} % v/v solution? `;
    let solution_text = `\\( \\frac{${pc} \\text{ ml}}{100 \\text{ ml}} \\times ${ml} \\text{ ml} = ${mla} \\text{ ml} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: mla,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_pcvv);


function generate_bmi_m(q_id) {
    const bmix = getRandomInt(150000, 350000)/10000;
    const hcm = getRandomInt(110,199);
    const hm = hcm/100;
    const mass = roundToDecimalPlaces(bmix*hm*hm,0);
    const bmi = roundToDecimalPlaces(mass/hm/hm,4);
    const x = roundToDecimalPlaces(bmi,2);
    
    let question_text = `What is the BMI of a patient who weighs ${mass} kg and is ${hm} m tall?  Give your answer correct to 2 d.p.`;
    let solution_text = `\\( \\frac{${mass}}{${hm}^2} = \\frac{${mass}}{${roundToDecimalPlaces(hm*hm,4)}} = ${bmi} = ${x} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_bmi_m);


function generate_bmi_cm(q_id) {
    const bmix = getRandomInt(150000, 350000)/10000;
    const hcm = getRandomInt(110,199);
    const hm = hcm/100;
    const mass = roundToDecimalPlaces(bmix*hm*hm,0);
    const bmi = roundToDecimalPlaces(mass/hm/hm,4);
    const x = roundToDecimalPlaces(bmi,2);
    
    let question_text = `What is the BMI of a patient who weighs ${mass} kg and is ${hcm} cm tall?  Give your answer correct to 2 d.p.`;
    let solution_text = `${hcm} cm is ${hm} m <br />` +
    `\\( \\frac{${mass}}{${hm}^2} = \\frac{${mass}}{${roundToDecimalPlaces(hm*hm,4)}} = ${bmi} = ${x} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_bmi_cm);


function generate_inhaler_doses(q_id) {
    
    let doses, mcg, question_text, solution_text, x, qsize
    
    while (true) {
        qsize = getRandomInt(1,3)
        doses = getRandomInt(2, 25)*Math.pow(10,qsize);
        mcg = getRandomInt(2,90)*10;
        if (doses*mcg>=1000) break;
    }
    
    const mg = doses*mcg/1000;
    const g = mg/1000;
    
    if (g<1) {
        question_text = `How many milligrams of a drug are in an inhaler containing ${doses} doses of ${mcg} micrograms?`;
        solution_text = `${doses} × ${mcg} = ${doses*mcg} mcg = ${mg} mg`;
        x = mg;
    } else {
        question_text = `How many grams of a drug are in an inhaler containing ${doses} doses of ${mcg} micrograms?`;
        solution_text = `${doses} × ${mcg} = ${doses*mcg} mcg = ${mg} mg = ${g} g`;
        x = g;
    }
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_inhaler_doses);
    

function generate_rate_kg_mg(q_id) {
    const mass = getRandomInt(10, 50);
    const rate = getRandomInt(2, 30);
    const x = mass*rate;
    
    let question_text = `A child weighing ${mass} kg requires a drug at a dose of ${rate} mg/kg.  How much of the drug in milligrams is required for each dose?`;
    let solution_text = `${rate} mg/kg × ${mass} kg = ${x} mg`
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_rate_kg_mg);


function generate_prescribe_time(q_id) {
    
    let dose, perday, dayterm, days, have, sin, need, x;
    
    while (true) {
        dose = getRandomInt(2,50)*5;
        perday = getRandomInt(1,4);
        dayterm = ["OD", "BD", "TDS", "QID"][perday-1];
        days = getRandomInt(5,28);
        have = getRandomInt(2,50)*5;
        sin = [2,5][getRandomInt(0,1)];
        need = dose*perday*days;
        x = need*sin/have;
        
        if (roundToDecimalPlaces(x,1) === x && x < 4000) break;
    }
    
    let question_text = `A patient is prescribed a ${have}mg/${sin}ml drug at ${dose} mg ${dayterm} for ${days} days.  How much, in ml, should be dispensed?`;
    let solution_text = `Need: ${dose} mg × ${perday} × ${days} = ${need} mg<br />Have: ${have} mg Supplied in: ${sin} ml <br /><br />` +
                        `\\( \\frac{${need} \\text { mg}}{${have} \\text{ mg}} \\times ${sin} \\text{ ml} = ${x} \\text{ ml} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_prescribe_time);


function generate_parts(q_id) {
    let a, b, total, drug;
    
    while (true) {
        total = getRandomInt(2,40)*10;
        a = getRandomInt(1,5);
        b = getRandomInt(2, 20)*5;
        drug = a*total/b;
        
        if (drug === roundToDecimalPlaces(drug,1)) break;
    }
    
    const x = roundToDecimalPlaces(drug,1);
    
    let question_text = `How much drug, in grams, is in ${total} g of a ${a} per ${b} parts mixture?`;
    let solution_text = `${b} parts makes total of ${total} g <br />So 1 part is ${total} g ÷ ${b} = ${total/b} g`;
    
    if (a !=1) {
        solution_text = solution_text + `<br />${a} parts is ${a} × ${total/b} g = ${x} g`
    };
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_parts);



function generate_nhs_massrate(q_id) {
    
    let p2, p5, have, sinchoose, sin, sinml, mass, rate, need, nhs;
    while (true) {
        p2 = getRandomInt(1,8);
        p5 = getRandomInt(0,3);
        have = Math.pow(2,p2)*Math.pow(5,p5);
        sinchoose = getRandomInt(0,4)
        sin = [1, 2, 5, 10, 20][sinchoose];
        sinml = ["ml","2ml","5ml","10ml","20ml"][sinchoose];
        mass = getRandomInt(50,80);
        rate = getRandomInt(1,40)/4;
        
        need = mass*rate;
        nhs = need*sin/have;
        
        if (nhs === roundToDecimalPlaces(nhs,1) && have > sin && have < 500 & nhs<2000) break;
    }
    
    const x = roundToDecimalPlaces(nhs,1);
    
    let question_text = `A patient weighing ${mass} kg requires a drug at a dose of ${rate} mg/kg.  The drug is available in a ${have}mg/${sinml} solution.  What volume, in ml, of solution do they require?`;
    let solution_text = `Need: ${mass} × ${rate} mg/kg = ${need} mg <br />Have: ${have} mg; Supplied in: ${sin} ml <br /><br />` +
                        `\\( \\frac{${need} \\text{ mg}}{${have} \\text{ mg}} \\times ${sin} \\text{ ml} = ${x} \\text{ ml} \\)`;
                        
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_nhs_massrate);


function generate_nhs_massrate_time(q_id) {
    
    let p2, p5, have, sinchoose, sin, sinml, mass, rate, need, nhs, perday, days;
    while (true) {
        p2 = getRandomInt(1,8);
        p5 = getRandomInt(0,3);
        have = Math.pow(2,p2)*Math.pow(5,p5);
        sinchoose = getRandomInt(0,4)
        sin = [1, 2, 5, 10, 20][sinchoose];
        sinml = ["ml","2ml","5ml","10ml","20ml"][sinchoose];
        mass = getRandomInt(50,80);
        rate = getRandomInt(3,80)/2;
        perday = getRandomInt(1,4);
        days = getRandomInt(5,28);
        
        need = mass*rate;
        nhs = need*perday*days*sin/have;
        
        if (nhs === roundToDecimalPlaces(nhs,1) && have > sin && have < 500 && nhs<4000) break;
    }
    
    const dayterm = ["OD", "BD", "TDS", "QID"][perday-1];
    
    const x = roundToDecimalPlaces(nhs,1);
    
    let question_text = `A patient requires a drug at a dose of ${rate} mg/kg ${dayterm} for ${days} days.  The drug comes in a ${have}mg/${sinml} solution.  How much does the patient need, in ml, for the full course if they weigh ${mass} kg?`;
    let solution_text = `Need: ${mass} × ${rate} mg/kg = ${need} mg per dose<br />${need} × ${perday} × ${days} = ${need*perday*days} mg<br />Have: ${have} mg; Supplied in: ${sin} ml <br /><br />` +
                        `\\( \\frac{${need*perday*days} \\text{ mg}}{${have} \\text{ mg}} \\times ${sin} \\text{ ml} = ${x} \\text{ ml} \\)`;
                        
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_nhs_massrate_time);


function generate_insulin(q_id) {
    
    let units, have, perday, days;
    
    while (true) {
        units = getRandomInt(3,20)*5;
        have = [50, 100, 200][getRandomInt(0,2)];
        perday = getRandomInt(1,4);
        days = getRandomInt(1,4)*7;
        
        if (units*perday*days > 8*have) break;
    }
    
    const x = units*perday*days/have
    
    let question_text = `A patient is prescribed insulin at ${units} units ${perday} times per day.  They are collecting a prescription of a ${have}unit/ml injection for ${days} days. `+
                        `What volume of insulin, in ml, will they use in ${days} days?`;
    let solution_text = `Need ${units} units × ${perday} × ${days} = ${units*perday*days} units <br />`+
                        `${units*perday*days} units ÷ ${have} units × 1 ml = ${x} ml`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_insulin);
                        

function generate_tablet_production(q_id) {
    
    let tablets, mcg, x;
    
    while (true) {
        tablets = getRandomInt(1,8)*25*1000;
        mcg = getRandomInt(1,100)*5;
        x = tablets*mcg/1000/1000;
        
        if (x>1 && x === roundToDecimalPlaces(x,1)) break;
    }
    
    let question_text = `How many grams of drug are required to make ${tablets} of ${mcg} microgram tablets?`;
    let solution_text = `${tablets} mcg × ${mcg} = ${tablets*mcg} mcg = ${tablets*mcg/1000} mg = ${x} g`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_tablet_production);


function generate_dose_nearest_tab(q_id) {
    
    let rate, mass, nearest;
    
    while (true) {
    
        rate = getRandomInt(5,50)/10;
        mass = getRandomInt(50,80);
        nearest = [10, 20, 25, 50, 75, 100, 125, 150, 200][getRandomInt(0,8)];
        
        if (rate*mass/nearest > 0.5 && roundToDecimalPlaces(rate*mass/nearest,0)*nearest < 10000) break;
    }
    
    const nrx = roundToDecimalPlaces(rate*mass/nearest,2);
    const x = roundToDecimalPlaces(rate*mass/nearest,0)*nearest;
    
    let question_text = `The initial dose of a drug is recommended as ${rate} mcg/kg, rounded to the nearest ${nearest} micrograms. `+
                        `What is the recommended dose for a patient weighing ${mass} kg?`;
    let solution_text = `Need:  ${rate} mcg/kg × ${mass} kg = ${rate*mass} mcg <br />` +
                        `This is ${x} mcg to the nearest ${nearest} mcg`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_dose_nearest_tab);


function generate_titrating(q_id) {
    
    let t1amountC, t1amount, t1amountW, t1freqC, t1freq, t1freqW, t1length, t1lengthW, t2amountC, t2amount, t2amountW, t2freqC, t2freq, t2freqW, t2length, t2lengthW;
    
    while (true) {
    
        t1amountC = getRandomInt(0,2);
        t1amount = [0.5, 1, 2][t1amountC];
        t1amountW = ["Half tablet,", "One tablet,", "Two tablets,"][t1amountC];
        t1freqC = getRandomInt(0,1);
        t1freq = t1freqC+1;
        t1freqW = ["once", "twice"][t1freqC];
        t1length = getRandomInt(1,2);
        t1lengthW = ["one week", "two weeks"][t1length-1];
    
        t2amountC = getRandomInt(0,2);
        t2amount = [0.5, 1, 2][t2amountC];
        t2amountW = ["Half tablet, ", "One tablet,", "Two tablets,"][t2amountC];
        t2freqC = getRandomInt(0,1);
        t2freq = t2freqC+1;
        t2freqW = ["once", "twice"][t2freqC];
        t2length = getRandomInt(1,2);
        t2lengthW = ["one week", "two weeks"][t2length-1];
        
        if (t1amountC != t2amountC || t1freqC != t2freqC ) break ;
    }
    
    const drug = getRandomInt(1,20)*2.5;
    const c1 = t1amount*t1freq*t1length*7;
    const c2 = t2amount*t2freq*t2length*7;
    const ct = c1+c2;
    const x = roundToDecimalPlaces(ct,0);
    
    let question_text = `A patient is prescribed a titrating dose of a drug as follows: <br /><br />` +
                        `Drug ${drug} mg tablets; <br /> ${t1amountW} ${t1freqW} daily for ${t1lengthW}; <br /> ${t2amountW} ${t2freqW} daily for ${t2lengthW}. <br />`+
                        `How many complete ${drug} mg tablets are required to fulfil the the prescription?`;
    
    let solution_text = `First course: ${t1amount} × ${t1freq} × 7 × ${t1length} = ${c1} <br /> ` +
                        `Second course: ${t2amount} × ${t2freq} × 7 × ${t2length} = ${c2} <br /> ` +
                        `Total: ${c1} + ${c2} = ${ct} (${x} complete tablets)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_titrating);


function generate_unit_last(q_id) {
    
    let n, pml, conc, ppdose, ppd, ppdtext, upp, nupp, dunit, days, x;
    
    while (true) {
        n = getRandomInt(5,20);
        pml = getRandomInt(1,10)/2;
        conc = [50, 75, 100, 125, 150][getRandomInt(0,4)];
        ppdose = getRandomInt(2,10)*5;
        ppd = getRandomInt(1,3);
        ppdtext = ["once daily", "twice daily", "three times per day"][ppd-1];
        
        upp = pml * conc;
        nupp = n * upp;
        dunit = ppdose * ppd;
        days = roundToDecimalPlaces(nupp/dunit,2);
        x = Math.floor(nupp/dunit);
        
        if (x > 9 && x < 60 && upp === roundToDecimalPlaces(upp,0)) break;
    }
        
        
        let question_text = `How many days will a pack of ${n} × ${pml} ml pens at a strength of ${conc} units/ml last a patient using ${ppdose} units ${ppdtext}?`;
        
        let solution_text = `Units per pen: ${pml} ml × ${conc} units/ml = ${upp} units <br />` +
                            `Units available to patient: ${upp} units × ${n} = ${nupp} units <br />` +
                            `Units taken per day: ${ppdose} × ${ppd} = ${dunit} units/day <br />` +
                            `Days last: ${nupp} units ÷ ${dunit} units/day = ${days} days<br />` +
                            `Will last: ${x} days`;
        
        return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};

window.reviewQuestionGenerators.push(generate_unit_last);
