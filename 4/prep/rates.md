---
layout: default
title: Drug Rates Questions
---

<div class="explanation" markdown="1">

# Drug Rate Calculations

Drugs may be given at a certain amount per period of time, for example a number of milligrams per minute.  They may also be given based on the mass of the patient, so for example the number of milligrams per kg.  They may also be combined and be based on both time and mass, for example milligrams per kilogram per minute.

**Example**

A drug is administered at 3 mg/min for 15 minutes.  What is the total drug administered?

So every minute, 3 mg is given (3 mg/min).  To get the total after 15 minutes you would multiply this by 15.

3 mg/min × 15 min = 45 mg.

---

**Example**

A drug is administered at 800 mcg/min for 40 minutes.  What is the total drug administered in milligrams?

800 mcg/min × 40 minutes = 32000 mcg.

Conver this into mg: 32000 mcg ÷ 1000 mcg/mg = 32 mg.

---

**Example**

A patient receives 20 mcg/min for 8 hours.  What is the total drug administered in milligrams?

8 hours will need to be turned into minutes, to match the mcg/min.  There are 60 minutes to 1 hour.

8 hr × 60 min/hr = 480 min.

Now, 20 mcg/min × 480 min = 9600 mcg = 9.6 mg.

---

**Example**

A 40 kg patient requires 12 mcg/kg/min for 1 hour.  What is the total drug administered in milligrams?

12 mcg/kg/min means that for every kg a patient requires 12 mcg/min.

So for 40 kg we need: 12 mcg/kg/min × 40 kg = 480 mcg/min.

1 hour is 60 minutes, so

480 mg/min × 60 min = 28800 mcg = 28.8 mg

---

**Example**  This example also involves performing dosage calculations.

A 75 kg patient requires 6 mg/kg/minute for 30 minutes, delivered by a 3 %w/v solution. How much solution will they need in ml?

6 mg/kg/min × 75 kg = 450 mg/min

450 mg/min × 30 min = 13500 mg

So, the patiend *needs* 13500 mg, you *have* 3 g *supplied in* 100 ml (3 %w/v).

Get the units of drug the same, so for example use 3 g = 3000 mg.

Then $\frac{13500 \text{ mg}}{3000 \text{ mg}} \times 100 \text{ ml} = 400 \text{ ml}$.

The patient would need 400 ml.

</div>

---

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Questions</h2>
        <p>Practice 10 random questions. Check your answer after each question.</p>
    </div>

    <div id="revision-questions-container">
        <!-- Questions will be injected here as fieldsets for accessibility -->
    </div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>


<!-- 1. Load the specific question generators for this page -->
<script src="{{ '/assets/js/4-rates.js' | relative_url }}"></script>

<!-- 2. Load the core revision logic -->
<script src="{{ '/assets/js/revision-core-logic.js' | relative_url }}"></script>

<!-- 3. Initialize the revision test with the appropriate generators -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Ensure initRevisionTest is available (from revision-core-logic.js)
        // and numeracyQuestionGenerators is available (from numeracy-questions.js)
        if (window.initRevisionTest && window.reviewQuestionGenerators) {
            const desiredQuestionCount = 10;
            window.initRevisionTest(window.reviewQuestionGenerators, desiredQuestionCount); 
        } else {
            console.error("Required revision scripts not loaded correctly.");
        }
    });
</script>
