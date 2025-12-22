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

def generate_weight(age):
    if age <= 5:
        expected = 2 * (age + 4)
        variation = random.uniform(0.85, 1.15)
        weight = expected * variation
        return round(max(8, weight))

    elif age <= 12:
        expected = 3 * age + 7
        variation = random.uniform(0.85, 1.15)
        weight = expected * variation
        return round(max(15, weight))

    else:
        # Adolescents / adults
        weight = random.uniform(45, 90)
        return round(weight)


NUM_QUESTIONS = 50
START_ID = 1001

frequencies = {
    "OD": "once daily",
    "BD": "twice daily",
    "TDS": "three times daily",
    "QDS": "four times daily"
}

questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i

    age = random.randint(1, 18)
    weight = generate_weight(age)
    dose_mg_per_kg = random.choice([5, 10, 15, 20, 25, 30, 40, 50, 60, 80])
    frequency = random.choice(list(frequencies.keys()))

    vial_strength = random.choice([250, 500, 1000])
    reconstitution_volume = random.choice([5, 10, 15, 20])
    displacement_volume = round(random.uniform(0.2, 2.0), 1)

    # Calculations
    dose_needed_mg = weight * dose_mg_per_kg
    total_volume = reconstitution_volume + displacement_volume
    volume_required = (dose_needed_mg / vial_strength) * total_volume
    volume_required_rounded = round(volume_required, 1)

    question_text = (
        f"A {age}-year-old patient weighing {weight} kg has been prescribed "
        f"amoxicillin {dose_mg_per_kg} mg/kg {frequency} for a suspected severe infection. "
        f"The displacement volume for the {vial_strength} mg amoxicillin vial is "
        f"{displacement_volume} mL. Each vial must be reconstituted with "
        f"{reconstitution_volume} mL of water for injection. "
        f"How many millilitres of amoxicillin injection should be administered "
        f"for each prescribed dose? Give your answer to one decimal place."
    )

    solution_text = (
        f"**Step 1: Dose (Need)** <br /> "
        f"{weight} kg × {dose_mg_per_kg} mg/kg = {dose_needed_mg:,} mg <br />\n"
        f"**Step 2: Volume required** <br /> "
        f"Using \\( \\frac{{\\text{{Need}}}}{{\\text{{Have}}}} \\times \\text{{Volume}} \\): <br />\n"
        f"Total volume = {reconstitution_volume} mL + {displacement_volume} mL = "
        f"{total_volume} mL <br />\n"
        f"\\( \\frac{{{dose_needed_mg:,} \\text{{ mg}}}}{{{vial_strength:,} \\text{{ mg}}}} "
        f"\\times {total_volume} \\text{{ mL}} = {volume_required:.2f} \\text{{ mL}} \\) <br />\n"
        f"**Answer:** {volume_required_rounded} mL"
    )

    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": volume_required_rounded,
        "solution": LiteralString(solution_text)
    })

with open("amoxicillin_injection_questions.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated amoxicillin_injection_questions.yml")

