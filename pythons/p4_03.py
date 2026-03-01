import random
import yaml
import math

class LiteralString(str):
    pass

def literal_str_representer(dumper, data):
    return dumper.represent_scalar(
        "tag:yaml.org,2002:str",
        data,
        style="|"
    )

yaml.add_representer(LiteralString, literal_str_representer)

NUM_QUESTIONS = 100
START_ID = 3001

questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i
    print(q_id)
    
    r = random.choice([5, 8, 16, 20, 25, 40, 50, 80, 100, 125, 200, 250, 400, 500, 625, 2000, 5000, 10000])
    ct = random.choice([1,2])
    
    if ct == 1:
        question_text = (
                f"Convert 1 in {r} into mg/ml.  Give your answer to 1 decimal place")
        
        x = 1000/r
        
        solution_text = (
                f"This means 1 g in {r} ml <br />\n"
                f"Convert to mg to get 1000 mg in {r} ml or \\( \\frac{{1000}}{{{r}}} \\text{{mg/ml}} \\) <br />\n"
                f"{x} mg/ml")
    
    else:
        question_text = (
                f"Convert 1 in {r} into % w/v. Give your answer to 2 decimal places")
        
        x = 100/r
        
        solution_text = (
                f"This means 1 g in {r} ml <br />\n"
                f"For percentage weight volume, you need g per 100 ml <br />\n"
                f"\\(\\frac{{1 \\text{{ g}}}}{{{r} \\text{{ ml}}}} \\times 100 \\text{{ ml}} = {x} \\) <br />\n"
                f"{x}")

            
    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": x,
        "solution": LiteralString(solution_text)
    })

with open("03-ratioconvert.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated")
