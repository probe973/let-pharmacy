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
START_ID = 6001

questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i
    print(q_id)
    while True:
        age = random.randint(50,85)
        weight = random.randint(50,75)
        mg_kg = random.choice([4,5,10,12.5,15,20,25])
        length = random.choice([4,6,8,10,12,24])
        vial_have = random.choice([400,500,750,800,1000, 1200, 1500])
        vial_supply = random.choice([10, 15, 20, 25, 40, 50, 75, 100])
        further_dilute = random.choice([1, 2, 3, 4, 5, 6, 8, 10])

    # Calculations
        need = round(weight*mg_kg)
        vol_1 = round(need/vial_have*vial_supply,2)
        vol_2 = round(need/further_dilute,2)
        vol_sc = round(vol_2 - vol_1,2)
        vol_a = math.floor(vol_sc+0.5)
    
        if vol_a >= 15:
            break

    question_text = (
        f"A {age}-year-old man weighing {weight} kg is started on a drug at {mg_kg} mg/kg as an infusion every {length} hours. "
        f"You have {vial_have} mg vials of the drug available which are reconstituted with {vial_supply} mL of water for injection and then further diluted to a {further_dilute} mg/mL infusion "
        f"with 0.9% sodium chloride. "
        f"What is the total number of millilitres of 0.9% sodium chloride that should be added to the drug for each dose? Give your answer as a whole number."
    )

    solution_text = (
        f"**Step 1: Dose (Need)** <br />\n"
        f"\\( {weight} \\text{{ kg}} \\times {mg_kg} \\text{{ mg/kg}} = {need} \\text{{ mg}} \\)<br />\n"
        f"<br />\n"
        f"**Step 2: Calculate volume of reconstituted drug** <br />\n"
        f"Using \\( \\frac{{\\text{{Need}}}}{{\\text{{Have}}}} \\times \\text{{Supplied In}} \\): <br />\n"
        f"\\( \\frac{{{need} \\text{{ mg}}}}{{{vial_have} \\text{{ mg}}}} \\times {vial_supply} \\text{{ ml}} = {vol_1} \\text{{ ml}} \\) <br />\n"
        f"<br />\n"
        f"**Step 3: Calculate total final volume of infusion** <br />\n"
        f"\\( \\frac{{{need} \\text{{ mg}}}}{{{further_dilute} \\text{{ mg}}}} \\times 1 \\text{{ ml}} = {vol_2} \\text{{ ml}} \\) <br />\n"
        f"<br />\n"
        f"**Step 4: Calculate volume of 0.9% sodium chloride to add** <br />\n"
        f"\\( {vol_2} \\text{{ ml (Total)}} - {vol_1} \\text{{ ml (Drug)}} = {vol_sc} \\text{{ ml}} \\) <br />\n"
        f"<br />\n"
        f"**Answer: {vol_a} ml (nearest whole number)**"   
    )

    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": vol_a,
        "solution": LiteralString(solution_text)
    })

with open("06-infusion-dilutions.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated 06-infusion-dilutions.yml")
