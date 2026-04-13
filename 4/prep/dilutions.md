---
layout: default
title: Dilutions
---

<div class="explanation" markdown="1">

# Dilutions

Stock can be diluted to a lower strength by adding another substance, a solvent, such as water.

---

## Dilution Factors

**Example**

You have 300 ml of a 20% w/v solution.  300 ml of water is added, so you now have 600 ml of solution, but since water was added it will now have a lower strength.

Since you have twice as much solution than you began with, the strength of the solution will be halved.

Therfore the new strength will be 20 ÷ 2 = 10% w/v

**Example**

How much from a stock of 12% w/v solution should you take to make 400 ml of a 3% w/v solution?

The dilution factor is $\frac{12}{3}=4$, so it will be a quarter of the strength.

You will therefore need to take a quarter of the final amount from stock, and then make us to 400 ml.

$\frac{400}{4}=100$

So, you need to take **100 ml** from the stock.  (You would then add 300 ml of solvent to make the 400 ml)

### 1 in X dilutions

For questions where the strength is given as 1 in X, dilution factors are often easier to use than formulae (see formulae examples below).

**Example**

How much from a stock solution of 1 in 40 should you take to make 800 ml of a 1 in 200 strength solution?

Use the *X* part from the *1 in X* language.  Using the 200 and the 40, the dilution factor is $\frac{200}{40}=5$, so the new solution will be a fifth of the strength.

Divide the total amount by this dilution factor:

$\frac{800}{5} = 160$

So, take **160 ml** from stock (and make up to 800 ml with solvent).

---

## Formula

The following formula can also be used for dilution questions:

$$C_{1}V_{1} = C_{2}V_{2}$$

Where $C_{1}$ is the stock concentration, $V_{1}$ is the amount of stock, $C_{2}$ is the final concentration, and $V_{2}$ is the final amount.

**Example**

How much from a stock solution of 24% w/v should be taken in order to make 150 ml of a 4% w/v?

Here:

$C_1 = 24$

$V_1 = ?$

$C_2 = 4$

$V_2 = 150$

$24V_1 = 4 \times 150$

$V_1 = \frac{4 \times 150}{24} = \frac{600}{24} = 25$

Take **25 ml** from stock.

**Example**

250 ml of 15% w/v stock is diluted by adding 500 ml of solvent.  What is the new strength?

Here:

$C_1 = 15$

$V_1 = 250$

$C_2 = ?$

$V_2 = 250 + 500 = 750$

$15 \times 250 = C_2 \times 750$

$C_2 = \frac{15 \times 250}{750} = \frac{15}{3} = 5$ (§)

The new strength is **5 %w/v**.

§ - In this calculation it was noted that the $\frac{250}{750}$ part of the formula could be simplified to $\frac{1}{3}$.


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
<script src="{{ '/assets/js/4-dilutions.js' | relative_url }}"></script>

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
