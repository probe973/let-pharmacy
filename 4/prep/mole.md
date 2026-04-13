---
layout: default
title: Moles and Molarity
---

<div class="explanation" markdown="1">

# Moles and Molarity

These questions make use of the following formulae:

$M_{r} = \text{molecular weight (or atomic weight)}$

$M = \text{molarity}$

$n = \text{number of moles}$

$$M_{r} = \frac{\text{Mass (g)}}{\text{n}}$$

$$M = \frac{\text{n}}{\text{Volume (L)}}$$

To find the molecular weights of compounds, you add the molecular weights of the elements.

H2O, has two hydrogen and one oxygen.

The moelecular weight of hydrogen is 1, the molecular weight of oxygen is 16.

So the molecular weight of H2O is 2*1 + 16 = 18.

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
<script src="{{ '/assets/js/4-mole.js' | relative_url }}"></script>

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
