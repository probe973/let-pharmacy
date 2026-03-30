---
layout: default
title: Body Calculations
---

<div class="explanation" markdown="1">
# Patient Formula Questions

Practice using formula for body indices and renal function.

### Body Mass Index (BMI)

$$ \text{BMI} = \frac{\text{Mass (kg)}}{\text{(Height (m))}^2} $$

### Body Surface Area (BSA)

$$ \text{BSA} = \sqrt{\frac{\text{Mass (kg) × Height (cm)}}{3600}} $$

### Renal Function

Assume the following formula:

$$ \text{CrCl (ml/min)} = \frac{(140 - \text{age}) \times \text{Weight (kg)}}{\text{Serum Creatine (micromol/L)}} $$

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
<script src="{{ '/assets/js/4-body.js' | relative_url }}"></script>

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
