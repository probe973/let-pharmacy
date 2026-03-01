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
START_ID = 1001

questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i
    print(q_id)
    

    x = random.randint(100,900)
    s = x/1000
    
    
    
    question_text = (
            f"Convert {s} litres into millilitres.")

        
    solution_text = (
            f"To convert {s}L into mL, multiply by 1000 <br />\n"
            f"\\({s} \\times 1000 = {x} \\) <br />\n"
            f"{x}"
            )
            
    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": x,
        "solution": LiteralString(solution_text)
    })

with open("01-convert.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated")
