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

function generate_mcgmin_hrs_mg(q_id) {
    
    let mcgmin, hr, vol;
    
    while (true) {
        mcgmin = getRandomInt(2,20)*5;
        hr = getRandomInt(1,24);
        vol = mcgmin*hr*60;
        
        if (vol > 1000) break;
    }
    
    const x = roundToDecimalPlaces(vol/1000,1);
    
    let question_text = `If a paitent requires ${mcgmin} mcg/min for ${hr} hours, what is the total amount of drug they will require in milligrams?  Give your answer correct to 1 decimal place.`;
    
    let solution_text = `Convert the hours into minutes: ${hr} hours × 60 mins/hour = ${hr*60} mins <br /> ` +
                        `Find total micrograms: ${mcgmin} mcg/min × ${hr*60} mins = ${vol} mcg <br />` +
                        `Convert to milligrams: ${vol} ÷ 1000 = ${roundToDecimalPlaces(vol/1000,3)} mg <br />` +
                        `Round if needed: ${x} mg`;
                        
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_mcgmin_hrs_mg);


function generate_mgkgmin_min_mg(q_id) {
    
    let mgkgmin, min, kg, vol;
    
    while (true) {
        mgkgmin = getRandomInt(2, 100)/10;
        min = getRandomInt(1, 9)*5;
        kg = getRandomInt(30, 85);
        vol = mgkgmin * min * kg;
        
        if (vol < 3001 && vol === roundToDecimalPlaces(vol,0)) break;
    }
    
    let question_text = `If a ${kg} kg patient requires ${mgkgmin} mg/kg/min for ${min} minutes, how many mg of the drug will they require?`;
    
    let solution_text = `Find the rate per minute for the given mass: ${mgkgmin} mg/kg/min × ${kg} kg = ${roundToDecimalPlaces(mgkgmin * kg,1)} mg/min <br />` +
                        `Find the volume required: ${roundToDecimalPlaces(mgkgmin * kg,1)} mg/min × ${min} min = ${vol} mg`;
    
    return {
        id: q_id,
        question: question_text,
        answer: vol,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_mgkgmin_min_mg);

function generate_hrs_mg_mcgmin(q_id) {
    
    let mcgmin, hr, vol;
    
    while (true) {
        mcgmin = getRandomInt(2,20)*5;
        hr = getRandomInt(1,24);
        vol = mcgmin*hr*60;
        
        if (vol > 1000) break;
    }
    
    const x = roundToDecimalPlaces(vol/1000,1);
    
    let question_text = `If you want a patient to recieve ${x} mg over ${hr} hours, what should you set the rate at in micrograms/minute?`;
    
    let solution_text = `Convert the hours into minutes: ${hr} hours × 60 mins/hour = ${hr*60} mins <br /> ` +
                        `Convert the mg into micrograms: ${x} × 1000 = ${vol} mcg <br />` +
                        `You have ${vol} mcg per ${hr * 60} minutes <br />` +
                        `Convert to 1 minute: ${vol} mcg ÷ ${hr * 60} min = ${mcgmin} mcg/min`
                        
    return {
        id: q_id,
        question: question_text,
        answer: mcgmin,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_hrs_mg_mcgmin);

function generate_mgkgmin_mgml_ml(q_id) {
    
    let rate, kg, min, mgml, drug, vol, kgp2, kgp3, kgp5;
    
    while (true) {
        kgp2 = getRandomInt(1,5);
        kgp3 = getRandomInt(1,3);
        kgp5 = getRandomInt(1,2);
        kg = Math.pow(2, kgp2)*Math.pow(3,kgp3)*Math.pow(5,kgp5);
        mgml = Math.pow(2, getRandomInt(0,kgp2))*Math.pow(3, getRandomInt(0,kgp3))*Math.pow(5,getRandomInt(0,kgp5));
        
        if (kg <= 100 && mgml > 1) break;
    }
    
    min = getRandomInt(1,9)*5;
    rate = getRandomInt(2,10);
    drug = rate * kg * min;
    vol = drug/mgml;
    
    let question_text = `A ${kg} kg patient requires ${rate} mg/kg/minute for ${min} minutes, delivered by a ${mgml} mg/ml solution. How much solution will they need in ml?`;
    
    let solution_text = `Use the patient mass: ${rate} mg/kg/min × ${kg} = ${roundToDecimalPlaces(rate*kg,0)} mg/min <br />` +
                        `Use the time: ${roundToDecimalPlaces(rate*kg,0)} mg/min × ${min} min = ${drug} mg <br /><br />` +
                        `Use \\( \\frac{\\text{Need}}{\\text{Have}} \\times \\text{Supplied in} = \\frac{${drug} \\text{ mg}}{${mgml} \\text{ mg}} \\times 1 \\text{ ml} = ${vol} \\text{ ml} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: vol,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_mgkgmin_mgml_ml);


function generate_mgkgmin_pc_ml(q_id) {
    
    let rate, kg, min, mgml, drug, vol, kgp2, kgp3, kgp5;
    
    while (true) {
        kgp2 = getRandomInt(1,5);
        kgp3 = getRandomInt(1,3);
        kgp5 = getRandomInt(1,2);
        kg = Math.pow(2, kgp2)*Math.pow(3,kgp3)*Math.pow(5,kgp5);
        mgml = Math.pow(2, getRandomInt(0,kgp2))*Math.pow(3, getRandomInt(0,kgp3))*Math.pow(5,getRandomInt(0,kgp5));
        
        if (kg <= 100 && mgml > 1) break;
    }
    
    min = getRandomInt(1,9)*5;
    rate = getRandomInt(2,10);
    drug = rate * kg * min;
    vol = drug/mgml;
    const pc = mgml/10;
    
    let question_text = `A ${kg} kg patient requires ${rate} mg/kg/minute for ${min} minutes, delivered by a ${pc} %w/v solution. How much solution will they need in ml?`;
    
    let solution_text = `Use the patient mass: ${rate} mg/kg/min × ${kg} = ${roundToDecimalPlaces(rate*kg,0)} mg/min <br />` +
                        `Use the time: ${roundToDecimalPlaces(rate*kg,0)} mg/min × ${min} min = ${drug} mg <br /><br />` +
                        `Using %w/v will require a conversion between grams and milligrams <br /><br />`+
                        `Use \\( \\frac{\\text{Need}}{\\text{Have}} \\times \\text{Supplied in} = \\frac{${drug} \\text{ mg}}{${pc} \\text{ g}} \\times 100 \\text{ ml} \\) <br /><br />`+
                        `\\(\\frac{${drug} \\text{ mg}}{${pc*1000} \\text{ mg}} \\times 100 \\text{ ml} = ${vol} \\text{ ml} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: vol,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_mgkgmin_pc_ml);
