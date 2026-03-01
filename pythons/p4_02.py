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

NUM_QUESTIONS = 500
START_ID = 2001

questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i
    print(q_id)
    
    while True:
        s = random.randint(1,2)
        l = random.randint(2,3)
        if s<l:
            break
    
    u = ['mc','m','']
    sn = u[s-1]
    ln = u[l-1]
    
    d = pow(10,3*(l-s))
    q = random.randint(10,999)/d/random.choice([10,100])
    x1 = round(q*d,3)
    x = round(x1,2)
    if l-s == 1:
        qs = f"{q:.5f}"
    elif l-s == 2:
        qs = f"{q:.8f}"
    else:
        qs = f"{q:.11f}"
    
    
    question_text = (
            f"Convert {qs} {ln}g into {sn}g. Give your answer correct to 2 decimal places.")

        
    solution_text = (
            f"To convert {ln}g into {sn}g, multiply by {d} <br />\n"
            f"\\({qs} \\times {d} = {x1} \\) <br />\n"
            f"{x}"
            )
            
    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": x,
        "solution": LiteralString(solution_text)
    })

with open("02-convert.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated")
