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

NUM_QUESTIONS = 50
START_ID = 4001

sexes = {
    "male": "male",
    "female": "female"
}


questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i

    prescribed = random.randint(5,15)
    sex = random.choice(list(sexes.keys()))
    every = random.choice([3, 4, 6, 8, 12])
    days = random.randint(4,14)
    hold = random.randint(4,10)/10

    # Calculations
    dose_per_day = round(24/every)
    total_doses = round(dose_per_day*days)
    total_mg = round(total_doses*prescribed)
    h = round(hold*1000)
    sa = round(total_mg/h*100,2)
    fa = math.floor(sa + 0.5)

    question_text = (
        f"A patient is prescribed {prescribed} mg of morphine every {every} hours for {days} days following an unfortunate accident. You hold a {hold} % w/v mixture in your hospital dispensary stock. How many millilitres should you supply in total? Give your answer as a whole number."
    )

    solution_text = (
        f"Doses per day: {dose_per_day} <br />\n"
        f"Total doses: \\( {dose_per_day} \\times {days} \\text{{ days}} = {total_doses} \\) <br />\n"
        f"Total mg needed: \\( {total_doses} \\times {prescribed} = {total_mg} \\text{{ mg}} \\) <br />\n"
        f"<br />\n"
        f"Using \\( \\frac{{\\text{{Need}}}}{{\\text{{Have}}}} \\times \\text{{Supplied In}} \\) <br />\n"
        f"{hold} %w/v means {h} mg per 100 ml <br />\n"
        f"\\( \\frac{{{total_mg} \\text{{ mg}} }}{{{h} \\text{{ mg}} }} \\times 100 \\text{{ ml}} = {sa} \\text{{ ml}} \\) <br />\n"
        f"<br />\n"
        f"**Answer** {fa}"
    )

    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": fa,
        "solution": LiteralString(solution_text)
    })

with open("liquid-concentrations.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated liquid-concentrations.yml")
    
    
    
