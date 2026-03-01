import random
import yaml
from decimal import Decimal, ROUND_HALF_UP

# --- YAML literal block support ---
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
START_ID = 9001

# --- Compound bank (name : molecular weight) ---
compounds = {
    "Sodium Chloride": 58.5,
    "Potassium Chloride": 74,
    "Calcium Carbonate": 100,
    "Magnesium Sulfate": 120,
    "Glucose": 180,
    "Sodium Carbonate": 106,
    "Hydrochloric Acid": 36.5,
    "Sulfuric Acid": 98,
    "Nitric Acid": 63,
    "Potassium Nitrate": 101,
    "Sodium Hydroxide": 40,
    "Potassium Hydroxide": 56,
    "Calcium Chloride": 111,
    "Copper Sulfate": 160,
    "Zinc Chloride": 136,
    "Iron(III) Chloride": 162.5,
    "Aluminium Oxide": 102,
    "Calcium Oxide": 56,
    "Magnesium Oxide": 40,
    "Ammonia": 17
}

# --- Helper functions ---
def round1(x):
    """Round Decimal to 1 decimal place for student answer."""
    return float(x.quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))

def format_decimal(d):
    """Return string of Decimal in plain fixed-point format (no scientific notation) with ≤2 dp."""
    d = d.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
    if d == d.to_integral():
        return str(d.quantize(Decimal("1")))
    elif (d * 10) == (d * 10).to_integral():
        return str(d.quantize(Decimal("0.1")))
    else:
        return str(d)

# --- Pre-selected clean molarity and mole options to guarantee ≤2 dp answers ---
molarities = [Decimal(x) for x in ["0.5","1","1.25","1.5","2","2.5","4","5"]]
mole_values = [Decimal(x) for x in ["0.1","0.2","0.25","0.4","0.5","0.8","1","1.2","1.25","1.5","2","2.4","2.5","4","5","8","10","12.5"]]

questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i
    print(q_id)

    # --- Generate guaranteed clean question ---
    compound_name, mw = random.choice(list(compounds.items()))
    mw = Decimal(str(mw))

    molarity = random.choice(molarities)
    moles = random.choice(mole_values)

    volume_L = moles / molarity
    volume_ml = int(volume_L * 1000)

    grams = moles * mw
    grams_str = format_decimal(grams)
    answer = round1(grams)

    # --- Question text ---
    question_text = (
        f"How many grams of {compound_name} "
        f"(molecular weight = {mw}) are required to produce "
        f"{volume_ml} millilitres of a {molarity} molar solution? "
        f"Please give your answer to 1 decimal place."
    )

    # --- Solution text ---
    solution_text = (
        f"Convert volume to litres:<br />\n"
        f"{volume_ml} ml = {format_decimal(volume_L)} L<br /><br />\n"
        f"Moles = molarity × volume<br />\n"
        f"= {molarity} × {format_decimal(volume_L)}<br />\n"
        f"= {format_decimal(moles)} mol<br /><br />\n"
        f"Mass = moles × molecular weight<br />\n"
        f"= {format_decimal(moles)} × {mw}<br />\n"
        f"= {grams_str} g<br /><br />\n"
        f"Answer to 1 decimal place = {answer} g"
    )

    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": answer,
        "solution": LiteralString(solution_text)
    })

# --- Write YAML ---
with open("09-molarity-to-grams.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated.")
