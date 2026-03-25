---
layout: default
title: Numeracy Skills Revision
---

<section class="revision-container" aria-labelledby="revision-heading">
    <div class="revision-header">
        <h2 id="revision-heading">Numeracy Skills Revision</h2>
        <p>Practice 10 random questions from various topics. Check your answer after each question.</p>
    </div>

    <!-- This container will hold dynamically generated questions -->
    <div id="revision-questions-container">
        <!-- Questions will be injected here as fieldsets for accessibility -->
    </div>

    <div class="revision-footer">
        <button type="button" onclick="window.location.reload()" class="btn">Generate New Set of Questions</button>
    </div>
</section>

<!-- Load the specific logic for this revision mode -->
<script src="{{ '/assets/js/numeracy-revision-logic.js' | relative_url }}"></script>
