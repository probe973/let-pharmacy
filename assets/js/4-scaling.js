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

function generate_up_L(q_id) {
    
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

window.reviewQuestionGenerators.push(generate_up_L);


function generate_up_mL(q_id) {
    
    const chosen = ["A", "B", "C"][Math.floor(Math.random() * 3)];
    
    const wt = getRandomInt(2,15)*10;
    
    let A, B, C, mp, wk, wku, question_text, solution_text;
    
    while (true) {
        mp = getRandomInt(4, 20)/2;
        A = getRandomInt(1, 20);
        B = getRandomInt(1,10)*5;
        C = getRandomInt(1, Math.round(wt/3));
        if (mp*wt/1000 <= 10 && A*mp <= 1000 && B*mp <= 1000 && C*mp <= 1000) {
            break;
        }
    }
    
    const rwt = mp*wt;
    
    
    
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
    
    question_text = `A formula for a solution is: <br />` +
                    `Compound A:  ${A} g <br />` +
                    `Compound B:  ${B} mg <br />` +
                    `Solution C:  ${C} ml <br />` +
                    `Water to ${wt} ml <br /><br />` +
                    `How much of ${chosen} is required, in ${wku}, to make ${rwt} mL of the solution?  Give answers to 1 decimal place where necessary.`;
                    
    solution_text = `Want ${rwt} mL from a formula for ${wt} mL <br />` +
                    `This is ${mp} times more than the original solution formula amount.<br />` +
                    `Multiply ${wk} ${wku} by ${mp} gives ${answer} ${wku}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: answer,
        solution: solution_text
    };
}

window.reviewQuestionGenerators.push(generate_up_mL);



function generate_down_mL(q_id) {
    
    const chosen = ["A", "B", "C"][Math.floor(Math.random() * 3)];
    
    const wt = getRandomInt(2,15)*10;
    
    let A, B, C, mp, wk, wku, question_text, solution_text;
    
    while (true) {
        mp = getRandomInt(2, 12);
        A = getRandomInt(1, 20);
        B = getRandomInt(1,10)*5;
        C = getRandomInt(1, Math.round(wt/3));
        if (mp*wt/1000 <= 10 && A*mp <= 1000 && B*mp <= 1000 && C*mp <= 1000) {
            break;
        }
    }
    
    const rwt = mp*wt;
    
    
    
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
    
    const answer = wk;
    
    question_text = `A formula for a solution is: <br />` +
                    `Compound A:  ${A*mp} g <br />` +
                    `Compound B:  ${B*mp} mg <br />` +
                    `Solution C:  ${C*mp} ml <br />` +
                    `Water to ${rwt} ml <br /><br />` +
                    `How much of ${chosen} is required, in ${wku}, to make ${wt} mL of the solution?`;
                    
    solution_text = `Want ${wt} mL from a formula for ${rwt} mL <br />` +
                    `This is \\( \\frac{1}{${mp}} \\) of the original solution formula amount.<br />` +
                    `Divide ${wk*mp} ${wku} by ${mp} gives ${answer} ${wku}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: answer,
        solution: solution_text
    };
}

window.reviewQuestionGenerators.push(generate_down_mL);
