---
layout: default
title: Formula Scaling
---

<div class="explanation" markdown="1">

# Formula Scaling

You may have a recipe for cup cakes that could be used to make 20 cakes.  If you wanted to make 40 cup cakes, you would need to double all of the ingredients, since 40 is twice 20.  If you wanted to make 5 cup cakes you would need to divide all of the ingredients by 4, since 5 is a quarter of 20.

This same principle can be used for making pharmacy *recipes*, where you multiply or divide each of the *ingredients* to make more or less of a solution.

## Examples

**Example 1**

40 mg of a drug is in a solution which is made up **to 100 ml** with water.  How much of this drug would be needed to make 250 ml?

**Method 1**

Note that 250 ml is 2.5 times 100 ml  $\frac{250}{100} = 2.5$.  Therefore scale up the drug by a factor of 2.5:

40 mg × 2.5 = 100 mg

**Method 2**

Divide the amount by *what it is out of* and multiply by *what you want it out of*:

$ \frac{40 \text{ mg}}{100 \text{ ml}} \times 250 \text{ ml} = \frac{4 \times 250}{10} = \frac{1000}{10} = 100 \text{ ml}$

<br>

**Example 2**

Substance A: 50 mg

Substance B: 100 mg

Substance C: 60 ml

Water to : 200 ml

How much of substance C is required to make 50 ml of this solution?

Look for the **Water to** part, this tells you what the original *recipe* is for.  Here it is for 200 ml.

We want to reduce this to 50 ml, and note that this is a quarter of the original, so all parts of the solution will need to be divided by 4.

Substance C: 60 ÷ 4 = 15 ml.

OR:

$\frac{60}{200} \times 50 = \frac{3 \times 50}{10} = 15 \text{ ml}$

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
<script src="{{ '/assets/js/4-scaling.js' | relative_url }}"></script>

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
