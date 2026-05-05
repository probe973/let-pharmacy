---
layout: default
title: T1 456 Practice
---

<div class="explanation" markdown="1">

# Year 1 Blocks 4, 5, 6 practice

$$ \text{BMI} = \frac{\text{Mass (kg)}}{(Height (m))^2} $$

</div>

---

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Questions</h2>
        <p>Practice 30 random questions. Check your answer after each question.</p>
    </div>

    <div id="revision-questions-container">
        <!-- Questions will be injected here as fieldsets for accessibility -->
    </div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>


<!-- 1. Load the specific question generators for this page -->
<script src="{{ '/assets/js/t1-456.js' | relative_url }}"></script>

<!-- 2. Load the core revision logic -->
<script src="{{ '/assets/js/revision-core-logic.js' | relative_url }}"></script>

<!-- 3. Initialize the revision test with the appropriate generators -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Ensure initRevisionTest is available (from revision-core-logic.js)
        // and numeracyQuestionGenerators is available (from numeracy-questions.js)
        if (window.initRevisionTest && window.reviewQuestionGenerators) {
            const desiredQuestionCount = 30;
            window.initRevisionTest(window.reviewQuestionGenerators, desiredQuestionCount); 
        } else {
            console.error("Required revision scripts not loaded correctly.");
        }
    });
</script>
