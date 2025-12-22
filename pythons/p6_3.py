import random
import yaml

class LiteralString(str):
    pass

def literal_str_representer(dumper, data):
    return dumper.represent_scalar(
        "tag:yaml.org,2002:str",
        data,
        style="|"
    )

yaml.add_representer(LiteralString, literal_str_representer)

NUM_QUESTIONS = 50
START_ID = 3001

sexes = {
    "male": "male",
    "female": "female"
}

questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i

    age = random.randint(60, 85)
    weight = random.randint(50, 70)
    dose_rt = random.randint(18,100)/10
    have = random.randint(3,20)
    length = random.randint(6,24)
    sex = random.choice(list(sexes.keys()))

    # Calculations
    dose_need_mcg = round(weight*dose_rt*60,1)
    dose_need_mg = dose_need_mcg/1000
    iv_rate = round(dose_need_mg/have,1)

    question_text = (
        f"A patient is a {age}-year-old {sex}, weighing {weight} kg. They are admitted to ITU "
        f"following a coronary artery bypass graft and is prescribed dopamine "
        f"{dose_rt} microg/kg/min IV for {length} hours. Calculate the rate in ml/hr at which "
        f"a solution of dopamine must be infused to provide this dose if "
        f"dopamine is administered as a {have} mg/ml solution. "
        f"Give you answer correct to 1 decimal place"
    )

    solution_text = (
        f"**Step 1: Dose (Need)** <br /> "
        f"\\( {weight} \\text{{ kg}} \\times {dose_rt} \\text{{ microg/kg/min}} \\times 60 \\text{{ min}} = {dose_need_mcg} \\text{{ microg/hr}} \\) <br />\n"
        f"\\( {dose_need_mcg} \\div 1000 = {dose_need_mg} \\text{{ mg}}\\) <br />\n"
        f"<br />\n"
        f"**Step 2: Using \\( \\frac{{\\text{{Need}}}}{{\\text{{Have}}}} \\times \\text{{Supplied In}} \\)** <br />\n"
        f"\\( \\frac{{{dose_need_mg} \\text{{ mg}}}}{{{have} \\text{{ mg}}}} \\times 1 \\text{{ ml}} = {iv_rate} \\text{{ ml/hr}} \\) <br />\n"
        f"**Answer:** {iv_rate}"
    )

    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": iv_rate,
        "solution": LiteralString(solution_text)
    })

with open("ivrate.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated ivrate.yml")
