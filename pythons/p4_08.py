import random
import yaml

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
START_ID = 8001


# --- ELEMENT DATA (name, atomic weight) ---
elements = {
    "H": ("hydrogen", 1),
    "C": ("carbon", 12),
    "O": ("oxygen", 16),
    "Na": ("sodium", 23),
    "Cl": ("chlorine", 35.5),
    "Ca": ("calcium", 40),
    "K": ("potassium", 39),
    "N": ("nitrogen", 14),
    "S": ("sulfur", 32),
    "Mg": ("magnesium", 24),
    "P": ("phosphorus", 31),
    "Fe": ("iron", 56),
    "Cu": ("copper", 63.5),
    "Zn": ("zinc", 65),
    "Al": ("aluminium", 27),
    "Ag": ("silver", 108),
    "Ba": ("barium", 137),
    "Pb": ("lead", 207),
    "Br": ("bromine", 80),
    "I": ("iodine", 127)
}


# --- LARGE COMPOUND BANK ---
compounds = {

    "H2O": {"H": 2, "O": 1},
    "CO2": {"C": 1, "O": 2},
    "NaCl": {"Na": 1, "Cl": 1},
    "KCl": {"K": 1, "Cl": 1},
    "CaCO3": {"Ca": 1, "C": 1, "O": 3},
    "MgSO4": {"Mg": 1, "S": 1, "O": 4},
    "Na2CO3": {"Na": 2, "C": 1, "O": 3},
    "CaCl2": {"Ca": 1, "Cl": 2},
    "NH3": {"N": 1, "H": 3},
    "HCl": {"H": 1, "Cl": 1},

    "KNO3": {"K": 1, "N": 1, "O": 3},
    "NaNO3": {"Na": 1, "N": 1, "O": 3},
    "Ca(NO3)2": {"Ca": 1, "N": 2, "O": 6},
    "NaOH": {"Na": 1, "O": 1, "H": 1},
    "KOH": {"K": 1, "O": 1, "H": 1},
    "Ca(OH)2": {"Ca": 1, "O": 2, "H": 2},

    "H2SO4": {"H": 2, "S": 1, "O": 4},
    "HNO3": {"H": 1, "N": 1, "O": 3},
    "H3PO4": {"H": 3, "P": 1, "O": 4},

    "Na2SO4": {"Na": 2, "S": 1, "O": 4},
    "K2SO4": {"K": 2, "S": 1, "O": 4},
    "CaSO4": {"Ca": 1, "S": 1, "O": 4},

    "CuSO4": {"Cu": 1, "S": 1, "O": 4},
    "ZnSO4": {"Zn": 1, "S": 1, "O": 4},
    "FeSO4": {"Fe": 1, "S": 1, "O": 4},

    "AlCl3": {"Al": 1, "Cl": 3},
    "FeCl2": {"Fe": 1, "Cl": 2},
    "FeCl3": {"Fe": 1, "Cl": 3},

    "CuCl2": {"Cu": 1, "Cl": 2},
    "ZnCl2": {"Zn": 1, "Cl": 2},

    "NaHCO3": {"Na": 1, "H": 1, "C": 1, "O": 3},
    "KHCO3": {"K": 1, "H": 1, "C": 1, "O": 3},

    "CaO": {"Ca": 1, "O": 1},
    "MgO": {"Mg": 1, "O": 1},
    "Al2O3": {"Al": 2, "O": 3},
    "Fe2O3": {"Fe": 2, "O": 3},

    "Na2O": {"Na": 2, "O": 1},
    "K2O": {"K": 2, "O": 1},

    "C6H12O6": {"C": 6, "H": 12, "O": 6},
    "C12H22O11": {"C": 12, "H": 22, "O": 11},

    "AgNO3": {"Ag": 1, "N": 1, "O": 3},
    "BaCl2": {"Ba": 1, "Cl": 2},
    "Pb(NO3)2": {"Pb": 1, "N": 2, "O": 6},

    "NaBr": {"Na": 1, "Br": 1},
    "KBr": {"K": 1, "Br": 1},

    "KI": {"K": 1, "I": 1},
    "NaI": {"Na": 1, "I": 1}
}


def calculate_formula_mass(formula):

    total = 0
    breakdown = []

    for symbol, count in formula.items():

        name, atomic_weight = elements[symbol]

        subtotal = atomic_weight * count
        total += subtotal

        if count == 1:
            breakdown.append(f"{name} = {atomic_weight}")
        else:
            breakdown.append(f"{name} = {count} × {atomic_weight} = {subtotal}")

    return total, breakdown


questions = []

for i in range(NUM_QUESTIONS):

    q_id = START_ID + i
    print(q_id)

    while True:

        compound = random.choice(list(compounds.keys()))

        formula_mass, breakdown = calculate_formula_mass(
            compounds[compound]
        )

        millimoles = random.choice([
            10, 20, 25, 40, 50, 60, 75, 80,
            100, 120, 125, 150, 200, 250, 500
        ])

        grams = formula_mass * millimoles / 1000

        if abs(grams - round(grams)) < 1e-9:
            grams = int(round(grams))
            break


    atomic_text = ", ".join(
        f"{elements[s][0]} = {elements[s][1]}"
        for s in compounds[compound]
    )


    question_text = (
        f"How much {compound} in grams is required to make "
        f"{millimoles} millimoles, given that the atomic weights are: "
        f"{atomic_text}?"
    )


    solution_text = (
        f"Formula mass of {compound}: <br />\n"
        + "<br />\n".join(breakdown)
        + f"<br />\nTotal = {formula_mass} g/mol<br /><br />\n"
        + f"{millimoles} millimoles = {millimoles/1000} mol<br /><br />\n"
        + f"Mass = {millimoles/1000} × {formula_mass}<br />\n"
        + f"= {grams} g"
    )


    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": grams,
        "solution": LiteralString(solution_text)
    })


with open("08-millimoles-to-grams.yml", "w") as f:
    yaml.dump(
        questions,
        f,
        sort_keys=False,
        allow_unicode=True
    )


print("Generated.")
