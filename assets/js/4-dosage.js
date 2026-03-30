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

function generateDose_mgml(q_id) {
    
    let need, n2, n3, n5, question_text, solution_text, have ;
    
    while (true) {
        n2 = getRandomInt(0,10);
        n3 = getRandomInt(0,5);
        n5 = getRandomInt(0,4);
        need = Math.pow(2,n2)*Math.pow(3,n3)*Math.pow(5,n5);
        have = Math.pow(2, getRandomInt(0,Math.max(0,n2-1)))* Math.pow(3, getRandomInt(0,n3)) * Math.pow(5, getRandomInt(0,n5)) ;
        
        if (need>1 && need <1000 && have>1 && have<need) break;
    }
    
    const sinref = getRandomInt(0,3);
    const sinnum = [1, 2, 5, 10];
    const sintxt = ["", "2", "5", "10"];
    
    const sin = sinnum[sinref];
    const sindsp = sintxt[sinref];
    const vr = need/have * sin ;
    const x = roundToDecimalPlaces(vr,0);
    
    question_text = `A prescription of ${need} mg is required for a patient <br />` +
                    `The drug comes in the form ${have} mg/${sindsp}ml <br />`+
                    `How many ml of the drug is needed?  Give answer to the nearest ml.`;
                    
    solution_text = `\\( \\frac{${need} \\text{ mg}}{${have} \\text{ mg}} \\times ${sin} \\text{ ml} = ${vr} \\text{ ml} \\) <br />` +
                    `${x} ml`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.reviewQuestionGenerators.push(generateDose_mgml); 


function generateDose_pc(q_id) {
    
    let need, n2, n3, n5, question_text, solution_text, havemgml ;
    
    while (true) {
        n2 = getRandomInt(0,10);
        n3 = getRandomInt(0,5);
        n5 = getRandomInt(0,4);
        need = Math.pow(2,n2)*Math.pow(3,n3)*Math.pow(5,n5);
        havemgml = Math.pow(2, getRandomInt(0,Math.max(0,n2-1)))* Math.pow(3, getRandomInt(0,n3)) * Math.pow(5, getRandomInt(0,n5)) ;
        
        if (need>1 && need <1000 && havemgml>1 && havemgml<need) break;
    }
    
       
    const have = havemgml/10;
    
    const vr = need/have/10 ;
    const x = roundToDecimalPlaces(vr,0);
    
    question_text = `A prescription of ${need} mg is required for a patient <br />` +
                    `The drug comes in the form ${have} %w/v <br />`+
                    `How many ml of the drug is needed?  Give answer to the nearest ml.`;
                    
    solution_text = `\\( \\frac{${need} \\text{ mg}}{${have} \\text{ g}} \\times 100 \\text{ ml} \\) <br />` +
                    `\\( = \\frac{${need} \\text{ mg}}{${have * 1000} \\text{ mg}} \\times 100 \\text{ ml} = ${vr} \\text{ ml} \\) <br />` +
                    `${x} ml`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.reviewQuestionGenerators.push(generateDose_pc);


function generateDose_1in(q_id) {
    
    let need, n2, n3, n5, question_text, solution_text, X, vr ;
    
    while (true) {
        n2 = getRandomInt(0,10);
        n3 = getRandomInt(0,5);
        n5 = getRandomInt(0,4);
        need = Math.pow(2,n2)*Math.pow(3,n3)*Math.pow(5,n5);
        X = Math.pow(2,getRandomInt(0,2))*Math.pow(5,getRandomInt(0,5));
        vr = need*X/1000
        if (need>1 && vr>1 && vr<1000) break;
    }
    
    const x = roundToDecimalPlaces(vr,0);
    
    question_text = `A prescription of ${need} mg is required for a patient <br />` +
                    `The drug comes in the form 1 in ${X} <br />`+
                    `How many ml of the drug is needed?  Give answer to the nearest ml.`;
    
    solution_text = `\\( \\frac{${need} \\text{ mg}}{1 \\text{ g}} \\times ${X} \\text{ ml} \\) <br />` +
                    `\\( \\frac{${need} \\text{ mg}}{1000 \\text{ mg}} \\times ${X} \\text{ ml} = ${vr} \\text{ ml} \\) <br />` +
                    `${x} ml`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}

window.reviewQuestionGenerators.push(generateDose_1in);
                
    
