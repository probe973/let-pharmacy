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
START_ID = 8001

sexes = {
    "man": "man",
    "woman": "woman"
}

questions = []

for i in range(NUM_QUESTIONS):
    q_id = START_ID + i
    print(q_id)
    while True:
        age = random.randint(50,85)
        sex = random.choice(list(sexes.keys()))
        weight = random.randint(50,75)
        g_kg = random.randint(1,15)/10
        drug_strength = random.randint(2,20)
        inf_rt_1 = random.randint(5,25)/10
        inf_rt_2 = random.randint(5,25)/10
        inf_rt_3 = random.randint(5,25)/10
        inf_t_1 = random.choice([15,30,45,60,90])
        inf_t_2 = random.choice([15,30,45,60,90])
        inf_t_3 = random.choice([15,30,45,60,90])
        inf_rt_r = random.randint(5,25)/10
        length = random.choice([4,6,8,10,12,24])
        vial_have = random.choice([400,500,750,800,1000, 1200, 1500])
        vial_supply = random.choice([10, 15, 20, 25, 40, 50, 75, 100])
        further_dilute = random.choice([1, 2, 3, 4, 5, 6, 8, 10])

    # Calculations
        need = round(weight*g_kg)
        inf_t_1h = inf_t_1/60
        inf_t_2h = inf_t_2/60
        inf_t_3h = inf_t_3/60
        vol = round(need/drug_strength*100,2)
        vol_p1 = round(inf_rt_1*weight*inf_t_1h,2)
        vol_p2 = round(inf_rt_2*weight*inf_t_2h,2)
        vol_p3 = round(inf_rt_3*weight*inf_t_3h,2)
        vol_p = round(vol_p1+vol_p2+vol_p3,3)
        vol_r = round(vol - vol_p,2)
        vol_hr_r = round(inf_rt_r * weight,3)
        inf_t_r_m = round(vol_r/vol_hr_r*60,3)
        inf_t_m=inf_t_1 + inf_t_2 + inf_t_3 + inf_t_r_m
        ans=math.floor(inf_t_m+0.5)
    
        if 10 <= inf_t_r_m <= 400:
            break 

    question_text = (
        f"The following hospital prescription was written for a patient, a "
        f"{age}-year-old {sex} weighing {weight} kg. Infusion of drug: "
        f"Strength {drug_strength} % w/v, {g_kg} g/kg. <br />\n "
        f"Infusion rate: <br />\n"
        f"{inf_rt_1} mL/kg/hr for {inf_t_1} mins, <br />\n"
        f"then {inf_rt_2} mL/kg/hr for {inf_t_2} mins, <br />\n"
        f"then {inf_rt_3} mL/kg/hr for {inf_t_3} mins, <br />\n"
        f"then {inf_rt_r} mL/kg/hr for the remainder of the infusion. <br />\n"
        f"What is the total infusion duration in minutes, if it is infused at the given rate? "
        f"Round your answer to the nearest whole minute."
        )
        
    solution_text = (
        f"**Step 1: Dose (Need)** <br />\n"
        f"\\( {weight} \\text{{ kg}} \\times {g_kg} \\text{{ g/kg}} =  {need} \\text{{ g}} \\)<br />\n"
        f"<br />\n"
        f"**Step 2: Total Volume** <br />\n"
        f"Using \\( \\frac{{\\text{{Need}}}}{{\\text{{Have}}}} \\times \\text{{Supplied In}} \\): <br />\n"
        f"\\( \\frac{{{need} \\text{{ g}}}}{{{drug_strength} \\text{{ g}}}} \\times 100 \\text{{ ml}} = {vol} \\text{{ ml}} \\) <br />\n"
        f"<br />\n"
        f"**Step 3: Volume delivered in timed phases** <br />\n"
        f"Phase 1 ({inf_t_1} mins): \\({inf_rt_1} \\text{{ mL/kg/hr}} \\times {weight} \\text{{ kg}} \\times {inf_t_1h} \\text{{ hr}} = {vol_p1} \\text{{ mL}} \\) <br />\n"
        f"Phase 1 ({inf_t_2} mins): \\({inf_rt_2} \\text{{ mL/kg/hr}} \\times {weight} \\text{{ kg}} \\times {inf_t_2h} \\text{{ hr}} = {vol_p2} \\text{{ mL}} \\) <br />\n"
        f"Phase 1 ({inf_t_3} mins): \\({inf_rt_3} \\text{{ mL/kg/hr}} \\times {weight} \\text{{ kg}} \\times {inf_t_3h} \\text{{ hr}} = {vol_p3} \\text{{ mL}} \\) <br />\n"
        f"Total volume delivered in phases = {vol_p} mL <br />\n"
        f"<br />\n"
        f"**Step 4: Remainder duration and total time** <br />\n"
        f"Remaining volume: \\( {vol}-{vol_p} = {vol_r} \\text{{ mL}}  \\) <br />\n"
        f"Final rate: \\( {inf_rt_r} \\text{{ mL/kg/hr}} \\times {weight} \\text{{ kg}} = {vol_hr_r} \\text{{ mL/hr}} \\) <br />\n"
        f"Remainder time: \\( \\frac{{{vol_r} \\text{{ mL}}}}{{{vol_hr_r} \\text{{ mL/hr}}}} \\times 60 \\text{{ mins}} = {inf_t_r_m} \\text{{ mins}} \\) <br />\n"
        f"Total duration: \\({inf_t_1} + {inf_t_2} + {inf_t_3} + {inf_t_r_m} = {inf_t_m} \\text{{ mins}} \\) <br />\n"
        f"<br />\n"
        f"**Answer: {ans} min (nearest whole minute)**"   
    )

    questions.append({
        "id": q_id,
        "question": question_text,
        "answer": ans,
        "solution": LiteralString(solution_text)
    })

with open("08-infusion-remain.yml", "w") as f:
    yaml.dump(questions, f, sort_keys=False, allow_unicode=True)

print("Generated 08-infusion-remain.yml")
