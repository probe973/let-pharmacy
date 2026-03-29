---
layout: default
title: Imperial Metric Conversions
---

<div class="explanation" markdown="1">

# Metric and Imperial Conversions


The following information may be useful:

### Length

**1 foot = 12 inches**

**1 inch = 2.54 cm** but for the questions below you will use **1 inch = 2.5 cm**

### Mass

**1 stone = 14 pounds (lbs)**

**1 lb = 16 ounces (oz)**

**1 kg = 2.2 lb** but for the questions below you will use **1 kg = 2 lb**

### Temperature

**$$ ^{\circ}F = \frac{9}{5} ^{\circ}C + 32$$**

**$$ ^{\circ}C = \frac{5}{9}( ^{\circ}F - 32)$$**


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
<script src="{{ '/assets/js/4-imperial.js' | relative_url }}"></script>

<!-- 2. Load the core revision logic -->
<script src="{{ '/assets/js/revision-core-logic.js' | relative_url }}"></script>

<!-- 3. Initialize the revision test with the appropriate generators -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Ensure initRevisionTest is available (from revision-core-logic.js)
        // and numeracyQuestionGenerators is available (from numeracy-questions.js)
        if (window.initRevisionTest && window.conversionQuestionGenerators) {
            window.initRevisionTest(window.conversionQuestionGenerators);
        } else {
            console.error("Required revision scripts not loaded correctly.");
        }
    });
</script>
