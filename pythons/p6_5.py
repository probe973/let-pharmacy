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

def rounding(x,base):
	return int(base*math.floor(0.5+float(x)/base))

yaml.add_representer(LiteralString, literal_str_representer)

NUM_QUESTIONS = 50
START_ID = 5001


questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i

    current_dose = random.choice([5, 10, 15, 20, 25, 40, 50, 80, 100, 125])
    current_strength = random.choice([5, 7.5, 10, 12.5, 15, 20, 25])
    current_F = random.randint(8, 18)/20
    new_F = random.randint(8,19)/20
    if new_F == current_F:
        new_F = current_F + 0.05

		
    new_round = random.choice([50, 100, 125, 200, 250])
    hold = random.randint(4,10)/10

    # Calculations
    current_dose_mg = round(current_dose*current_strength)
    target_abs = round(current_dose_mg*current_F,2)
    new_dose = round(target_abs/new_F,1)
    
    if new_dose/2 <= new_round:
        new_round = 25
    
    mg_amount = rounding(new_dose, new_round)
    

    question_text = (
        f"A patient is transitioning from a liquid medication to a tablet to assist with medication compliance. "
        f"The current dose is {current_dose} mL of a {current_strength} mg/mL liquid daily ( \\( F = {current_F}) \\). "
        f"What is the equivalent dose of the tablet ( \\( F = {new_F}) \\), in milligrams, to providing the equivalent dose? Round your answer to the nearest {new_round} mg."
    )

    solution_text = (
        f"**Step 1: Calculate amount currently absorbed (Target)** <br />\n"
        f"Current dose: \\({current_dose} \\text{{ mL}} \\times {current_strength} \\text{{ mg/mL}} = {current_dose_mg} \\text{{ mg}} \\) <br />\n"
        f"\\( \\text{{Target Absorbed}} = {target_abs} \\text{{ mg}} \\times {current_F} = {target_abs} \\text{{ mg}} \\) <br />\n"
        f"<br />\n"
        f"**Step 2: Calculate equivalent new dose** <br />\n"
        f"\\( \\text{{New Dose}} = {target_abs} \\text{{ mg}} \\div {new_F} = {new_dose} \\text{{ mg}} \\) <br />\n"
        f"<br />\n"
        f"**Answer** {mg_amount} (Rounded to the nearest {new_round} mg)"
    )

    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": mg_amount,
        "solution": LiteralString(solution_text)
    })

with open("05-pharmacokinetics.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated pharmacokinetics.yml")
