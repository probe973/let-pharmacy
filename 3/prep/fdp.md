---
layout: default
title: Fractions, Decimals, Percentages Revision
---

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Fractions, Decimals, and Percentages</h2>
        <p>Practice 10 random questions. Check your answer after each question. Give answers to 2 decimal places if necessary, unless otherwise stated.</p>
    </div>

    <div id="revision-questions-container">
        <!-- Questions will be injected here as fieldsets for accessibility -->
    </div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>

<!-- 1. Load the specific question generators for this page -->
<script src="{{ '/assets/js/3-fdp-questions.js' | relative_url }}"></script>

<!-- 2. Load the core revision logic -->
<script src="{{ '/assets/js/revision-core-logic.js' | relative_url }}"></script>

<!-- 3. Initialize the revision test with the appropriate generators -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Ensure initRevisionTest is available (from revision-core-logic.js)
        // and numeracyQuestionGenerators is available (from numeracy-questions.js)
        if (window.initRevisionTest && window.numeracyQuestionGenerators) {
            window.initRevisionTest(window.numeracyQuestionGenerators);
        } else {
            console.error("Required revision scripts not loaded correctly.");
        }
    });
</script>
