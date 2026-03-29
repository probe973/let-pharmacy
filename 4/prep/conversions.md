---
layout: default
title: Metric Conversions
---

<section class="explanation" aria-label="Intro to Conversions">


<h1> Metric Conversions </h1>

<center>

<svg width="100%" height="auto" viewBox="0 0 600 500" role="img" aria-labelledby="staircaseTitle staircaseDesc" xmlns="http://www.w3.org/2000/svg">
  <title id="staircaseTitle">Metric System Conversion Staircase</title>
  <desc id="staircaseDesc">A visual diagram showing metric conversions. It features a green staircase descending from KILO (k) at the top, to BASE UNIT, CENTI (c), MILLI (m), and MICRO (mc) at the bottom. Green arrows show multiplication when moving down (factors of 1000, 100, 10, and 1000) and division when moving up. Red dashed shortcut arrows connect the Base Unit directly to Milli with a factor of 1000.</desc>

  <rect width="600" height="500" fill="white"/>
  <style>
    .step { stroke: #2e7d32; stroke-width: 4; fill: none; }
    .unit-box { fill: #2e7d32; stroke: #1b5e20; stroke-width: 2; }
    .unit-text { font: bold 14px Arial; fill: white; text-anchor: middle; }
    .symbol-text { font: bold 12px Arial; fill: white; text-anchor: middle; }
    .math-text { font: bold 14px Arial; fill: #1b5e20; }
    .arrow { stroke: #1b5e20; stroke-width: 2; fill: none; }
    .shortcut { stroke: #d32f2f; stroke-width: 2; stroke-dasharray: 4; fill: none; }
    .shortcut-text { font: bold 14px Arial; fill: #d32f2f; text-anchor: middle; }
  </style>

  <defs>
    <marker id="head" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#1b5e20" />
    </marker>
    <marker id="s-head" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#d32f2f" />
    </marker>
  </defs>

  <path class="step" d="M50,80 H150 V160 H250 V240 H350 V320 H450 V400 H550" />

  <ellipse cx="100" cy="80" rx="55" ry="30" class="unit-box" />
  <text x="100" y="75" class="unit-text">KILO</text>
  <text x="100" y="95" class="symbol-text">(k)</text>

  <ellipse cx="200" cy="160" rx="65" ry="35" class="unit-box" />
  <text x="200" y="155" class="unit-text">BASE UNIT</text>
  <text x="200" y="175" class="symbol-text">(g, l, m, mol)</text>

  <ellipse cx="300" cy="240" rx="55" ry="30" class="unit-box" />
  <text x="300" y="235" class="unit-text">CENTI</text>
  <text x="300" y="255" class="symbol-text">(c)</text>

  <ellipse cx="400" cy="320" rx="55" ry="30" class="unit-box" />
  <text x="400" y="315" class="unit-text">MILLI</text>
  <text x="400" y="335" class="symbol-text">(m)</text>

  <ellipse cx="500" cy="400" rx="65" ry="35" class="unit-box" />
  <text x="500" y="395" class="unit-text">MICRO</text>
  <text x="500" y="415" class="symbol-text">(mc)</text>

  <path d="M160,85 Q220,85 220,120" class="arrow" marker-end="url(#head)" />
  <text x="230" y="105" class="math-text">× 1,000</text>
  <path d="M270,165 Q320,165 320,200" class="arrow" marker-end="url(#head)" />
  <text x="330" y="185" class="math-text">× 100</text>
  <path d="M360,245 Q410,245 410,285" class="arrow" marker-end="url(#head)" />
  <text x="420" y="265" class="math-text">× 10</text>
  <path d="M460,325 Q530,325 530,360" class="arrow" marker-end="url(#head)" />
  <text x="540" y="345" class="math-text">× 1,000</text>

  <path d="M440,400 Q380,400 380,360" class="arrow" marker-end="url(#head)" />
  <text x="315" y="385" class="math-text">÷ 1,000</text>
  <path d="M340,320 Q290,320 290,285" class="arrow" marker-end="url(#head)" />
  <text x="245" y="305" class="math-text">÷ 10</text>
  <path d="M240,240 Q190,240 190,205" class="arrow" marker-end="url(#head)" />
  <text x="145" y="225" class="math-text">÷ 100</text>
  <path d="M140,160 Q80,160 80,125" class="arrow" marker-end="url(#head)" />
  <text x="20" y="145" class="math-text">÷ 1,000</text>

  <path d="M265,160 Q340,110 400,285" class="shortcut" marker-end="url(#s-head)" />
  <text x="350" y="135" class="shortcut-text">× 1,000</text>

  <path d="M345,320 Q280,380 200,195" class="shortcut" marker-end="url(#s-head)" />
  <text x="250" y="375" class="shortcut-text">÷ 1,000</text>
</svg>

</center>

</section>

---

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Questions</h2>
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
<script src="{{ '/assets/js/4-conversions.js' | relative_url }}"></script>

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
