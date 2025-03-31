---
layout: home
title: Home
jsarr:
- js/scripts.js
---

<div id ="intro-wrapper" class="l-page">
	<div id="intro-title-wrapper" class="intro-left">
		<h1 id="intro-title">{{ site.title }}</h1>
		<div id="intro-subtitle">
			{{ site.tagline }} 
		</div>
	</div>
	<div class="intro-left">
	<div class="intro-left">
		I am a Graduate Research Assistant at the Nanomaterials Theory Institute (NTI) within the Center for Nanophase Materials Sciences at Oak Ridge National Laboratory and a Bredesen Center Fellow in Data Science and Engineering at the University of Tennessee. I hold an Master of Science (MS) in Mechanical Engineering from the University of Texas at Arlington (2019) and a Bachelor of Engineering (BE) in Mechanical Engineering from Savitribai Phule Pune University, Pune (2016). During Master's I did internship at Oak Ridge National Laboratory.

	</div>
	<div style="height: 1rem"></div>
	<div class="intro-left">
        I specialize in interdisciplinary research that merges theoretical condensed matter physics (computational physics) with machine learning and artificial intelligence. My primary focus is on the development and atomistic-level understanding of novel ferroelectric materials particularly perovskites, and wurtzites, which are critical for memory, energy storage, and neuromorphic computing applications. I leverage my expertise in machine learning/artificial intelligence and computational physics to analyze complex atomistic events intelligently and enhance the understanding of these novel materials.
	</div>
	<div style="height: 1rem"></div>
</div>

<div class="intro-right">
	<img id="intro-image" class="intro-right" src="/images/portrait.jpg">
	<div style="height: 0.5rem"></div>
	<div id="intro-image-links" class="intro-right">
		{% for link in site.data.social-links %}
			{% if link.on-homepage == true %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div style="height: 0.5rem"></div>
	<div id="intro-cv-wrapper" class="intro-right">
		{% for link in site.data.social-links %}
			{% if link.id == "cv-web" %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	</div>
</div>




<hr class="l-page">

# News
{% for news in site.data.news %}
{% include news.html news=news %}
{% endfor %}


<hr class="l-page">

# Publications and Patents

{% assign selectedBoolForBibtex = true %}
{% assign selected = site.data.publications %}
{% for pub in selected %}
{% include pubentry.html pub=pub %}
{% endfor %}


<!-- ### All Publications -->

{% assign selectedBoolForBibtex = false %}

<hr class="l-page">
