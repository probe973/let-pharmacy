---
layout: default
title: Concentrations
---

<div class="explanation" markdown="1">

# Concentrations

<h3>Solid in Liquid</h3>
<table class="data-table" aria-describedby="solid-liquid-table-desc">
    <caption id="solid-liquid-table-desc" class="visually-hidden">This table describes various concentration expressions for a solid active ingredient dissolved in a liquid, indicating the quantity of active ingredient per unit of liquid.</caption>
    <thead>
        <tr>
            <th scope="col">Concentration</th>
            <th scope="col">Active Ingredient</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>x mg/ml</td>
            <td>There are x g per 1 ml</td>
        </tr>
        <tr>
            <td>x% w/v</td>
            <td>There are x g per 100 ml</td>
        </tr>
        <tr>
            <td>1 in x</td>
            <td>There is 1 g per x ml</td>
        </tr>
    </tbody>
</table>

<h3>Liquid in Liquid</h3>
<table class="data-table" aria-describedby="liquid-liquid-table-desc">
    <caption id="liquid-liquid-table-desc" class="visually-hidden">This table describes various concentration expressions for a liquid active ingredient dissolved in another liquid, indicating the quantity of active ingredient per unit of the total liquid volume.</caption>
    <thead>
        <tr>
            <th scope="col">Concentration</th>
            <th scope="col">Active Ingredient</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>x% v/v</td>
            <td>There are x ml in 100 ml</td>
        </tr>
        <tr>
            <td>1 in x</td>
            <td>There is 1 ml in x ml</td>
        </tr>
    </tbody>
</table>

<h3>Solid in Solid</h3>
<table class="data-table" aria-describedby="solid-solid-table-desc">
    <caption id="solid-solid-table-desc" class="visually-hidden">This table describes various concentration expressions for a solid active ingredient mixed into another solid, indicating the quantity of active ingredient per unit of the total solid weight.</caption>
    <thead>
        <tr>
            <th scope="col">Concentration</th>
            <th scope="col">Active Ingredient</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>x% w/w</td>
                <td>There are x g in 100 g</td>
            </tr>
            <tr>
                <td>1 in x</td>
                <td>There is 1 g in x g</td>
            </tr>
        </tbody>
    </table>


</div>

<div class="explanation" markdown="1">

## Examples

### Conversions

**Convert 45 mg/ml into %w/v**

45 mg in 1 ml

Multiply up to 100 ml: 4500 mg in 100 ml

Convert mg to g: 4.5 g in 100 ml

**4.5 %w/v**

---

**Convert 20% w/v into 1 in X**

20 g in 100 ml

Divide by 20 to get 1g: 1 g in 5 ml

**1 in 5**

---

**Convert 1 in 50 into mg/ml**

1 g in 50 ml

Convert to mg:  1000 mg in 50 ml

Divide by 50 to get 1 ml:  20 mg in 1 ml

**20 mg/ml**

---

### Finding Active Ingredient

**How many grams of active ingredient is in a 220 g cream that is 4% w/w?**

4 g in 100 g

$\frac{4 \text{ g}}{100 \text{ g}} \times 220 \text{ g} = 8.8 \text{ g}$

**8.8 g**

---

**How many grams of active ingredient is in a 450 ml solution that has a strength of 1 in 15?**

1 g in 15 ml

$\frac{1 \text{ g}}{15 \text{ ml}} \times 450 \text{ ml} = 30 \text{ g}$

**30 g**

</div>

---



<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Questions</h2>
        <p>Practice 15 random questions. Check your answer after each question.</p>
    </div>

    <div id="revision-questions-container">
        <!-- Questions will be injected here as fieldsets for accessibility -->
    </div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>


<!-- 1. Load the specific question generators for this page -->
<script src="{{ '/assets/js/4-concentrations.js' | relative_url }}"></script>

<!-- 2. Load the core revision logic -->
<script src="{{ '/assets/js/revision-core-logic.js' | relative_url }}"></script>

<!-- 3. Initialize the revision test with the appropriate generators -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Ensure initRevisionTest is available (from revision-core-logic.js)
        // and numeracyQuestionGenerators is available (from numeracy-questions.js)
        if (window.initRevisionTest && window.conversionQuestionGenerators) {
            const desiredQuestionCount = 15;
            window.initRevisionTest(window.conversionQuestionGenerators, desiredQuestionCount); 
        } else {
            console.error("Required revision scripts not loaded correctly.");
        }
    });
</script>



