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

function generate_pc_c2(q_id) {
    
    let c1, c2, v1, v2, n2, n3, n5, n7;
    
    while (true) {
        n2 = getRandomInt(0,4);
        n3 = getRandomInt(0,4);
        n5 = getRandomInt(0,4);
        n7 = getRandomInt(0,4);
        v2 = Math.pow(2,n2)*Math.pow(3,n3)*Math.pow(5, n5)*Math.pow(7, n7);
        v1 = Math.pow(2,getRandomInt(0,n2))*Math.pow(3, getRandomInt(0,n3))*Math.pow(5, getRandomInt(0,n5))*Math.pow(7, getRandomInt(0,n7));
        c1 = Math.pow(2,getRandomInt(0,n2))*Math.pow(5, getRandomInt(0,n5))/2;
        c2 = c1*v1/v2;
        
        if (v1 < 1200 && v1 < v2 && c1 < 40 && v2 < 1000 && c1 > 5) break;
    }
    
    const x = roundToDecimalPlaces(c2,1);
    
    let question_text = `You have ${v1} ml of a ${c1} %w/v solution.  ${v2 - v1} ml of water is added to the solution.  What is the new strength in %w/v?  Give your answer correct to 1 decimal place.`;
    
    let solution_text = `\\(C_{1} = ${c1} \\) <br />`+
                        `\\(V_{1} = ${v1} \\) <br />`+
                        `\\(C_{2} = \\text{?} \\) <br />`+
                        `\\(V_{2} = ${v1} + ${v2 - v1} = ${v2} \\) <br /><br />`+
                        `\\(C_{2} = \\frac{C_{1}V_{1}}{V_{2}} = \\frac{${c1} \\times ${v1}}{${v2}} = ${roundToDecimalPlaces(c2,3)} \\) <br />`+
                        `${x} %w/v`;
                        
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_pc_c2);

function generate_pc_v1(q_id) {
    
    let c1, c2, v1, v2, n2, n3, n5, n7;
    
    while (true) {
        n2 = getRandomInt(0,4);
        n3 = getRandomInt(0,4);
        n5 = getRandomInt(0,4);
        n7 = getRandomInt(0,4);
        v2 = Math.pow(2,n2)*Math.pow(3,n3)*Math.pow(5, n5)*Math.pow(7, n7);
        v1 = Math.pow(2,getRandomInt(0,n2))*Math.pow(3, getRandomInt(0,n3))*Math.pow(5, getRandomInt(0,n5))*Math.pow(7, getRandomInt(0,n7));
        c1 = Math.pow(2,getRandomInt(0,n2))*Math.pow(5, getRandomInt(0,n5))/2;
        c2 = c1*v1/v2;
        
        if (v1 < 1200 && v1 < v2 && c1 < 40 && v2 < 1000 && c1 > 5 && 10*c2 === roundToDecimalPlaces(10*c2,0)) break;
    }
    
    let question_text = `You want to create ${v2} ml of a ${c2} %w/v solution.  You have a ${c1} %w/v solution in stock.  How many millilitres of stock need to be taken and then diluted?`;
    
    let solution_text = `\\(C_{1} = ${c1} \\) <br />`+
                        `\\(V_{1} = \\text{?} \\) <br />`+
                        `\\(C_{2} = ${c2} \\) <br />`+
                        `\\(V_{2} = ${v2} \\) <br /><br />`+
                        `\\(V_{1} = \\frac{C_{2}V_{2}}{C_{1}} = \\frac{${c2} \\times ${v2}}{${c1}} = ${roundToDecimalPlaces(v1,0)} \\) <br />`+
                        `${v1} ml`;
                        
    return {
        id: q_id,
        question: question_text,
        answer: v1,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_pc_v1);


function generate_M_c2(q_id) {
    
    let c1, c2, v1, v2, n2, n3, n5, n11;
    
    while (true) {
        n2 = getRandomInt(0,6);
        n3 = getRandomInt(0,6);
        n5 = getRandomInt(0,6);
        n11 = getRandomInt(0,6);
        v2 = Math.pow(2,n2)*Math.pow(3,n3)*Math.pow(5, n5)*Math.pow(11, n11)/10;
        v1 = Math.pow(2,getRandomInt(0,n2))*Math.pow(3, getRandomInt(0,n3))*Math.pow(5, getRandomInt(0,n5))*Math.pow(11, getRandomInt(0,n11))/10;
        c1 = Math.pow(2,getRandomInt(0,n2))*Math.pow(5, getRandomInt(0,n5))/2;
        c2 = c1*v1/v2;
        
        if (c1 > 10  && c1 <= 30  && c2 >= 0.5 && v1 >= 1 && v1 <= 20 && v1 < v2) break;
    }
    
    const x = roundToDecimalPlaces(c2,1);
    
    let question_text = `You have ${v1} L of a ${c1} M solution.  ${roundToDecimalPlaces(v2 - v1,1)} L of water is added to the solution.  What is the new molarity of the solution?  Give your answer correct to 1 decimal place.`;
    
    let solution_text = `\\(C_{1} = ${c1} \\) <br />`+
                        `\\(V_{1} = ${v1} \\) <br />`+
                        `\\(C_{2} = \\text{?} \\) <br />`+
                        `\\(V_{2} = ${v1} + ${v2 - v1} = ${v2} \\) <br /><br />`+
                        `\\(C_{2} = \\frac{C_{1}V_{1}}{V_{2}} = \\frac{${c1} \\times ${v1}}{${v2}} = ${roundToDecimalPlaces(c2,3)} \\) <br />`+
                        `${x} M`;
                        
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
}
    
window.reviewQuestionGenerators.push(generate_M_c2);


function generate_1in_v1(q_id) {
    
    let c1, df, c2, v2, v1;
    
    while (true) {
        c1 = getRandomInt(1, 10)*100;
        df = getRandomInt(1,20)*5;
        c2 = c1*df;
        v2 = getRandomInt(1,95)*10;
        v1 = v2/df;
        
        const check = roundToDecimalPlaces(v1,2);
        
        if (v1 === check) {
            break;
        }
    }
    
    const x = roundToDecimalPlaces(v1,1);
    
    let question_text, solution_text;
    
    question_text = `How many millilitres of a 1 in ${c1} solution is required to produce ${v2} mL of a 1 in ${c2} solution? Please give your answer to 1 decimal places`;
    
    solution_text = `For 1 in X dilution questions, it's often easier to use a dilution factor, rather than the C1V1 = C2V2 approach <br />`+
                    `1 in ${c2} has been diluted by a factor of ${df} from a 1 in ${c1} solution ( ${c2} ÷ ${c1} ) <br />` +
                    `Volume required from stock is ${v2} ÷ ${df} = ${v1} mL <br />` +
                    `Round: ${x} mL`;
                    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.reviewQuestionGenerators.push(generate_1in_v1);
