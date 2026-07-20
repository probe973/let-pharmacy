function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.CurrentTestGenerators = [];

function generateT178Q1(q_id, roundToDecimalPlaces) {
    
    const pmpd = getRandomInt(2,3);
    const freq = getRandomInt(1,3);
    const freqT = ["once","twice","three times"][freq-1];
    const freqAT = ["Once","Twice","Three times"][freq-1];
    const answer = getRandomInt(10,40)*freq;
    const oral = answer*pmpd/freq;
    
    let type, solution_text;
    
    if (pmpd === 2) {
        type="morphine";
    } else {
        type="diamorphine";
    };
    
    const question_text = `A patient is currently taking ${oral}mg of morphine mr capsules ${freqT} daily and needs to be switched to parenteral ${type} while undergoing surgery. Using the above table, calculate how much parenteral ${type} IN MILLIGRAMS they will require over 24 hours. `;
    
    if (pmpd === 2) {
        solution_text = `From the table 30 mg of oral morphine is equivalent to 15 mg of parenteral morphine <br />`+
                        `${freqAT} daily means total oral morphine of ${oral} × ${freq} = ${oral*freq} mg daily <br />`+
                        `\\( \\frac{${oral*freq} \\text{ mg}}{30 \\text{ mg}} \\times 15 \\text{ mg} = ${answer} \\text { mg} \\)`;
                    } else {
                        solution_text = `From the table 30 mg of oral morphine is equivalent to 10 mg of parenteral morphine <br />`+
                        `${freqAT} daily means total oral morphine of ${oral} × ${freq} = ${oral*freq} mg daily <br />`+
                        `\\( \\frac{${oral*freq} \\text{ mg}}{30 \\text{ mg}} \\times 10 \\text{ mg} = ${answer} \\text { mg} \\)`;
                    };
                        

    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q1);

function generateT178Q2(q_id, roundToDecimalPlaces) {
    
    const pmpd = getRandomInt(2,3);
    const type = ["morphine","diamorphine"][pmpd-2];
    const freq = getRandomInt(1,3);
    const freqT = ["once","twice","three times"][freq-1];
    const freqAT = ["Once","Twice","Three times"][freq-1];
    const oralC = getRandomInt(5,20)*6;
    const oralS = getRandomInt(2,freq*oralC/6)*6;
    const answer = (oralC*freq + oralS)/pmpd;
    
    const question_text = `A patient currently takes ${oralC} mg modified release morphine capsules ${freqT} daily and tops up with ${oralS} mg oral suspension daily. They are admitted to hospital and are being switched to parenteral ${type}. How much patenteral ${type}, in mg, will they require over 24 hours?`;
    
    let solution_text;
    
    if (pmpd === 2) {
        solution_text = `From the table 30 mg of oral morphine is equivalent to 15 mg of parenteral morphine <br />`+
                        `${freqAT} daily means total oral morphine of ${oralC} × ${freq} + ${oralS} = ${oralC*freq + oralS} mg daily <br />`+
                        `\\( \\frac{${oralC*freq + oralS} \\text{ mg}}{30 \\text{ mg}} \\times 15 \\text{ mg} = ${answer} \\text { mg} \\)`;
                    } else {
                        solution_text = `From the table 30 mg of oral morphine is equivalent to 10 mg of parenteral morphine <br />`+
                        `${freqAT} daily means total oral morphine of ${oralC} × ${freq} + ${oralS} = ${oralC*freq + oralS} mg daily <br />`+
                        `\\( \\frac{${oralC*freq + oralS} \\text{ mg}}{30 \\text{ mg}} \\times 10 \\text{ mg} = ${answer} \\text { mg} \\)`;
                    };
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q2);

function generateT178Q3(q_id, roundToDecimalPlaces) {
    
    const pm = getRandomInt(2,10)*5;
    const answer = pm*3;
    
    const question_text = `A patient has been administered with ${pm} mg parenteral diamorphine every 24 hours while in hospital and requires switching to oral morphine on discharge. What is the total amount, in mg, of oral morphine that they will require per day? `;
    const solution_text = `From the table 10 mg of parenteral diamorphine is equivalent to 30 mg of oral morphine <br/>`+
                            `\\( \\frac{${pm} \\text{ mg}}{10 \\text{ mg}} \\times 30 \\text{ mg} = ${answer} \\text{ mg} \\)`;
                            
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q3);

function generateT178Q4(q_id, roundToDecimalPlaces) {
    
    const pm = getRandomInt(2,15)*5;
    const answer = pm*2;
    
    const question_text = `A patient has been nil by mouth and given morphine parenterally totalling ${pm} mg over 24 hours. They are now able to take medication orally and are being switched to tablets. What is the total dose, in mg, required per day?  `;
    const solution_text = `From the table 15 mg of parenteral morphine is equivalent to 30 mg of oral morphine <br/>`+
                            `\\( \\frac{${pm} \\text{ mg}}{15 \\text{ mg}} \\times 30 \\text{ mg} = ${answer} \\text{ mg} \\)`;
                            
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q4);


function generateT178Q5(q_id, roundToDecimalPlaces) {
    
    const cream = getRandomInt(6,40)*5;
    const pc = getRandomInt(1,8)*2.5;
    const answer = roundToDecimalPlaces(pc*cream/100,2);
    
    const question_text = `How many grams of active drug are there in a ${cream} g tube of ${pc}% gel? Give your answer to no more than 2 decimal places.`;
    const solution_text = `${pc} ÷ 100 × ${cream} g = ${answer} g`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q5);


function generateT178Q6(q_id, roundToDecimalPlaces) {
    
    const cream = getRandomInt(6,40)*5;
    const pc = getRandomInt(1,10)*2;
    const answer = roundToDecimalPlaces(pc*cream/100,2);
    
    const question_text = `A patient requires ${cream} g of glucose ${pc} % gel. How much glucose IN GRAMS will they have? Give your answer to no more than 2 decimal places.`;
    const solution_text = `${pc} ÷ 100 × ${cream} g = ${answer} g`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q6);


function generateT178Q7(q_id, roundToDecimalPlaces) {
    
    const have = getRandomInt(1,10)*10;
    const si = getRandomInt(1,3)*2.5;
    const days = getRandomInt(1,4)*7;
    
    let morn, lunch, even, bed;
    
    while (true) {
        morn = getRandomInt(1,3);
        lunch = getRandomInt(1,3);
        even = getRandomInt(1,3);
        bed = getRandomInt(1,3);
        
        if (!(morn === lunch === even === bed)) break;
    }
    
    const tpd = morn+lunch+even+bed;
    const answer = tpd*days;
    
    const question_text = `A patient requires ${have} mg/${si} mg capsules at a dose of: <br />`+
                            `${morn} capsules in the morning <br />` +
                            `${lunch} capsules at lunch <br />` +
                            `${even} capsules in the evening <br />` +
                            `${bed} capsules at bedtime <br />` +
                            `How many capsules do they need for a ${days} day course?`;
    
    const solution_text = `Total per day is ${morn} + ${lunch} + ${even} + ${bed} = ${tpd} capsules <br />` +
                            `For ${days} days: ${tpd} × ${days} = ${answer} capsules`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q7);


function generateT178Q8(q_id, roundToDecimalPlaces) {
    
    let mass, heigth, bmi
    
    while (true) {
        mass = getRandomInt(40,90);
        height = getRandomInt(120,195)/100;
        bmi = roundToDecimalPlaces(mass/height/height,4);
        
        if (bmi <= 32 && bmi >= 18) break;
    }
    
    const answer = roundToDecimalPlaces(mass/height/height,2);
    
    const question_text = `A patient is ${height} m tall and weighs ${mass} Kg. What is their BMI (to 2dp)?`;
    const solution_text = `\\( ${height}^2 = ${roundToDecimalPlaces(height*height,4)} \\) <br />`+
                            `\\( \\frac{${mass}}{${roundToDecimalPlaces(height*height,4)}} = ${bmi} \\) <br /><br />`+
                            `\\( \\text{Rounded to 2 d.p. BMI} = ${answer} \\)`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q8);

function generateT178Q9(q_id, roundToDecimalPlaces) {
    
    let mass, heigth, bmi
    
    while (true) {
        mass = getRandomInt(40,90);
        height = getRandomInt(120,195)/100;
        bmi = roundToDecimalPlaces(mass/height/height,4);
        
        if (bmi <= 32 && bmi >= 18) break;
    }
    
    const answer = roundToDecimalPlaces(mass/height/height,2);
    
    const question_text = `A patient is ${height} m tall and weighs ${mass} Kg. What is their BMI (to 2dp)?`;
    const solution_text = `\\( ${height}^2 = ${roundToDecimalPlaces(height*height,4)} \\) <br />`+
                            `\\( \\frac{${mass}}{${roundToDecimalPlaces(height*height,4)}} = ${bmi} \\) <br /><br />`+
                            `\\( \\text{Rounded to 2 d.p. BMI} = ${answer} \\)`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q9);


function generateT178Q10(q_id, roundToDecimalPlaces) {
    
    const days = getRandomInt(2,3);
    const daysT = ["Tuesday and Thursday", "Monday, Wednesday, and Friday"][days-2];
    
    const avail = getRandomInt(1,2);
    const big = getRandomInt(2,4)*avail;
    const small = getRandomInt(1,big/avail-1)*avail;
    const weeks = getRandomInt(2,4);
    
    const answer = (big*days + small*(7-days))*weeks;
    
    const question_text = `A patient is on a warfarin dose of ${big} mg ${daysT} and ${small} mg the rest of the week. ` +
                            `Assuming they only take ${avail} mg tablets to make up the doses, how many ${avail} mg tablets will they need for a ${weeks} weeks supply?`;
    
    const solution_text = `For the ${days} days of ${daysT}, they require ${big/avail} of the ${avail} mg tablets <br />`+
                            `This is ${big/avail} × ${days} = ${big*days/avail} tablets <br />`+
                            `For the ${7-days} other days, they require ${small/avail} of the ${avail} mg tablets <br />`+
                            `This is ${small/avail} × ${7-days} = ${small/avail*(7-days)} tablets <br /> ` +
                            `Total tablets for the week is ${big*days/avail} + ${small/avail*(7-days)} = ${big*days/avail + small/avail*(7-days)} <br />`+
                            `For ${weeks} weeks: ${weeks} × ${big*days/avail + small/avail*(7-days)} = ${answer} tablets`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q10);


function generateT178Q11(q_id, roundToDecimalPlaces) {
    
    let need, have, supply, freq, days, answer;
    
    while (true) {
        need = getRandomInt(2,20)*25;
        have = getRandomInt(4,need/5)*5;
        supply = Math.pow(2,getRandomInt(1,4))*Math.pow(5,getRandomInt(0,2));
        freq = getRandomInt(2,4);
        days = getRandomInt(3,10);
        answer = freq*need*supply*days/have;
        
        if (answer <= 1200 && answer === roundToDecimalPlaces(answer,0)) break;
    }
    
    const question_text = `A patient requires ${need} mg, ${freq} times a day, for ${days} days. What volume, in ml, of a ${have} mg/${supply} ml suspension is required for the course?`;
    const solution_text = `Patient needs daily ${need} mg × ${freq} = ${need*freq} mg <br />`+
                            `For ${days} days, patient needs ${need*freq} mg × ${days} = ${need*freq*days} mg <br /><br />`+
                            `\\( \\frac{\\text{need}}{\\text{have}} \\times \\text{supplied in} \\) <br /><br />`+
                            `\\( \\frac{${need*freq*days} \\text{ mg}}{${have} \\text{ mg}} \\times ${supply} \\text{ ml} = ${answer} \\text{ ml} \\)`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q11);


function generateT178Q12(q_id, roundToDecimalPlaces) {
    
    let cream, pc, answer;
    
    while (true) {
    
        cream = getRandomInt(4,20)*5;
        pc = getRandomInt(1,16)/4;
        answer = 10*pc*cream;
        
        if (answer < 1000 && answer === roundToDecimalPlaces(answer,0)) break;
    }
    
    const question_text = `How much drug (IN MILLIGRAMS) is needed to make a ${cream} g cream of ${pc} %w/w strength? `;
    const solution_text = `${pc} ÷ 100 × ${cream} g = ${answer/1000} g <br />`+
                            `Convert to mg:  ${answer/1000} g × 1000 mg/g = ${answer} mg`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q12);
    
    
function generateT178Q13(q_id, roundToDecimalPlaces) {
    
    const part = getRandomInt(5,25);
    const a = getRandomInt(1,4);
    const b = getRandomInt(a+1,20);
    const t = a+b;
    const cream = part*t;
    const partT = ["part","parts","parts","parts"][a-1];
    
    const answer = a*part;
    
    const question_text = `You are required to make a cream containing ${a} ${partT} menthol to ${b} parts aqueous cream. If you require ${cream} g cream, how many grams of menthol are required? `;
    const solution_text = `The cream is made up of ${a} + ${b} = ${t} parts <br />`+
                            `Each part is ${cream} g ÷ ${t} = ${part} g <br />`+
                            `For menthol of ${a} ${partT}: ${a} × ${part} g = ${answer} g`;
                            
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q13);


function generateT178Q14(q_id, roundToDecimalPlaces) {
    
    let need, have, supply, mgkg, kg, answer;
    
    while (true) {
        have = getRandomInt(4,need/5)*5;
        supply = Math.pow(2,getRandomInt(1,4))*Math.pow(5,getRandomInt(0,2));
        mgkg = getRandomInt(2,10);
        kg = getRandomInt(40,60);
        need = mgkg*kg
        answer = need*supply/have;
        
        if (answer <= 1000 && answer === roundToDecimalPlaces(answer,0)) break;
    }
    
    const question_text = `What volume (IN MILLILITRES) of a ${have} mg/${supply} mL solution is required for a ${mgkg} mg/kg dose in a patient weighing ${kg} kg? `;
    const solution_text = `Patient requires ${mgkg} mg/kg × ${kg} kg = ${need} mg <br /><br />`+
                            `\\( \\frac{${need} \\text{ mg}}{${have} \\text{ mg}} \\times ${supply} \\text{ ml} = ${answer} \\text{ ml} \\)`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q14);


function generateT178Q15(q_id, roundToDecimalPlaces) {
    
    let usualcost, pcdiscount, packsreq, packs, answer;
    
    while (true) {
        usualcost = getRandomInt(1,10)*10;
        pcdiscount = getRandomInt(4,10)*2;
        packsreq = getRandomInt(2,5)*5;
        packs = getRandomInt(2,5)*10;
        answer = (100-pcdiscount)*usualcost*packs/100;
        
        if (packs >= packsreq && answer === roundToDecimalPlaces(answer,2)) break;
    }
    
    const question_text = `The cost of one box of tablets is usually £${usualcost}. You have organised a discount of ${pcdiscount}% on orders of ${packsreq} or more packs. How much would ${packs} packs cost after discount?`;
    const solution_text = `Usual cost = ${packs} × £${usualcost} = £${packs*usualcost} <br />`+
                            `Ordering more than the minimum packs, so ${pcdiscount}% discount to be applied <br />`+
                            `${pcdiscount} ÷ 100 × £${packs*usualcost} = £${pcdiscount*packs*usualcost/100} discount <br />`+
                            `£${packs*usualcost} - £${pcdiscount*packs*usualcost/100} = £${answer}`;
                            
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q15);


function generateT178Q16(q_id, roundToDecimalPlaces) {
    
    let requires, freq, freqT, amp, ampdose, days, answer;
    
    while (true) {
        
        requires = getRandomInt(2,8)*5;
        freq = getRandomInt(2,3);
        freqT = ["two","three"][freq-2];
        amp = getRandomInt(1,3)*5;
        ampdose = Math.ceil(requires/amp);
        days = getRandomInt(3,10);
        answer = ampdose*freq*days;
        
        if (ampdose <= 5) break;
    }
    
    
    const question_text = `A patient requires ${requires} mg of a drug ${freqT} times a day. The drug comes in ${amp} mg single use ampoules. How many will they require for ${days} days supply? `;
    const solution_text = `Each dose of ${requires} mg requires the use of ${ampdose} single use ampoules <br />`+
                            `${ampdose} × ${freq} × ${days} = ${answer} ampoules`;
                        
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q16);


function generateT178Q17(q_id, roundToDecimalPlaces) {
    
    let need, have, supply, mgkg, kg, answer;
    
    while (true) {
        have = getRandomInt(16,40)*5;
        mgkg = getRandomInt(2,10);
        kg = getRandomInt(40,80);
        need = mgkg*kg
        answer = need/have;
        
        if (answer <= 100 && answer >= 4 && answer === roundToDecimalPlaces(answer,0)) break;
    }
    
    const question_text = `How much of a ${have} mg/mL injection is required for a ${kg} kg patient requiring a dose of ${mgkg} mg/kg (IN MILLILITRES)? `;
    const solution_text = `Patient requires ${mgkg} mg/kg × ${kg} kg = ${need} mg <br /><br />`+
                            `\\( \\frac{${need} \\text{ mg}}{${have} \\text{ mg}} \\times 1 \\text{ ml} = ${answer} \\text{ ml} \\)`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q17);


function generateT178Q18(q_id, roundToDecimalPlaces) {
    
    let vol, pc, answer;
    
    while (true) {
        vol = getRandomInt(1,20)*5;
        pc = getRandomInt(1,12)/4;
        answer = 10*pc*vol;
        
        if (answer <= 1000 && answer === roundToDecimalPlaces(answer,0)) break;
    }
    
    const question_text = `How much lidocaine, IN MILLIGRAMS, is contained in ${vol} ml of lidocaine ${pc}% injection?`;
    const solution_text = `${pc} g ÷ 100 ml × ${vol} ml = ${answer/1000} g <br />`+
                        `Convert to mg: ${answer} mg`;
                        
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q18);


function generateT178Q19(q_id, roundToDecimalPlaces) {
    
    let ml, mg, answer;
    
    while (true) {
    
        ml = [2,4,5,10,20,25,50][getRandomInt(0,6)];
        mg = getRandomInt(10, 50)*10;
        answer = mg/ml*100/1000;
        
        if (answer <= 50 && answer === roundToDecimalPlaces(answer,1)) break;
    }
    
    const question_text = `What is the %w/v strength of a ${mg} mg/${ml} ml solution?`;
    const solution_text = `Find mg per 100 ml: <br />`+
                            `${mg} mg ÷ ${ml} ml × 100 ml = ${100*mg/ml} mg/100 ml <br />`+
                            `Make g per 100 ml: ${answer} g/100 ml <br />`+
                            `${answer} %w/v`;
                            
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q19);


function generateT178Q20(q_id, roundToDecimalPlaces) {
    
    let ml, dose, answer;
    
    while (true) {
        ml = getRandomInt(1,5)*1000;
        dose = getRandomInt(4,19)*50;
        answer = ml*dose/1000000;
        
        if (answer >=0.5 && answer === roundToDecimalPlaces(answer,1)) break;
    }
    
    const question_text = `What volume of a 1 in ${ml} strength injection is required to give a dose of ${dose} mcg (IN MILLILITRES)?`;
    const solution_text = `There is 1 g of drug in ${ml} ml of injection <br />`+
                            `Here ${dose} mcg = ${roundToDecimalPlaces(dose/1000000,6)} g <br />`+
                            `${roundToDecimalPlaces(dose/1000000,6)} g × ${ml} ml/g = ${answer} ml`;
    
    return { id: q_id, question: question_text, answer: answer, solution: solution_text };
}
window.CurrentTestGenerators.push(generateT178Q20);
