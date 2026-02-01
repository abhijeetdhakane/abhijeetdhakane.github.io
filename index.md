---
layout: home
title: Home
jsarr:
- js/scripts.js
---

<!-- <div id ="intro-wrapper" class="l-page">
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
</div> -->

<div id ="intro-wrapper" class="l-page">
	<div id="intro-title-wrapper" class="intro-left">
		<h1 id="intro-title">{{ site.title }}</h1>
		<div id="intro-subtitle">
			{{ site.tagline }} 
		</div>
	</div>
	<div class="intro-left">
	<div class="intro-left">
		I am a computational materials scientist trained at the intersection of atomistic simulation, artificial intelligence, and high-performance computing. I completed my Ph.D. in Data Science and Engineering through the Bredesen Center at the University of Tennessee, with my doctoral research conducted at Oak Ridge National Laboratory. I hold a Master of Science in Mechanical Engineering from the University of Texas at Arlington (2019) and a Bachelor of Engineering in Mechanical Engineering from Savitribai Phule Pune University, Pune (2016).

	</div>
	<!-- <div style="height: 1rem"></div>
	<div class="intro-left">
        My research spans computational materials science and AI4Science, with a focus on understanding and controlling nanoscale behavior in functional materials relevant to next-generation memory, energy, and neuromorphic devices. I work across materials classes including ferroelectric oxides, polymers, 2D materials, and heterogeneous interfaces. My approach integrates large-scale molecular dynamics, ML, DL, and autonomous workflows to enable simulation-driven discovery, inverse design under uncertainty, and mechanistic interpretability of scientific deep learning models.
	</div>
	<div style="height: 1rem"></div> -->

	<div style="height: 1rem"></div>
	<div class="intro-left">
		My research spans computational materials science and AI4Science, with a focus on understanding and controlling defect-, interface-, and field-driven nanoscale behavior in functional materials relevant to next-generation memory, energy, and neuromorphic devices. I work across materials classes including ferroelectric oxides, polymers, 2D materials, and heterogeneous interfaces. My approach integrates large-scale molecular dynamics with machine learning, deep learning, and autonomous workflows to enable simulation-driven discovery, with particular interest in inverse design under uncertainty and the mechanistic interpretability of scientific machine learning models.
	</div>
	<div style="height: 1rem"></div>

	<div class="intro-left" style="font-weight: 700; color: #7a0000; background-color: #fff6f6; padding: 0.8rem 1rem; border-radius: 6px; border: 1px solid #f0caca;">
		<strong>On the job market:</strong> I am actively seeking research positions in computational materials science and AI4Science. Please feel free to reach out regarding potential opportunities.
	</div>
	<div style="height: 1rem"></div>	
</div>

<!-- <div id="intro-wrapper" class="l-page">
	<div id="intro-title-wrapper" class="intro-left">
		<h1 id="intro-title">{{ site.title }}</h1>
		<div id="intro-subtitle">
			{{ site.tagline }}
		</div>
	</div>

	<div class="intro-left">
		<div class="intro-left">
			I am a computational materials scientist trained at the intersection of atomistic simulation, artificial intelligence, and high-performance computing. I completed my Ph.D. in Data Science and Engineering through the Bredesen Center at the University of Tennessee, with my doctoral research conducted at Oak Ridge National Laboratory. I hold a Master of Science in Mechanical Engineering from the University of Texas at Arlington (2019) and a Bachelor of Engineering in Mechanical Engineering from Savitribai Phule Pune University, Pune (2016).
		</div>

		<div style="height: 1rem"></div>

		<div class="intro-left">
			My research spans computational materials science and AI for Science, with a focus on understanding and controlling nanoscale behavior in functional materials relevant to next-generation memory, energy, and neuromorphic devices. I work across materials classes including ferroelectric oxides and polymers, two-dimensional materials, and heterogeneous interfaces. My approach integrates large-scale molecular dynamics, machine learning, and autonomous workflows to enable simulation-driven discovery, inverse design under uncertainty, and mechanistic interpretability of scientific machine learning models.
		</div>

		<div style="height: 1rem"></div>

		<div class="intro-left" style="font-weight: 600; color: #b30000;">
			I am currently on the job market and actively seeking research positions in computational materials science and AI for Science. Please feel free to reach out regarding potential opportunities.
		</div>

		<div style="height: 1rem"></div>
	</div>
</div> -->

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
<div id="news-items">
{% for news in site.data.news %}
<div class="news-item">
{% include news.html news=news %}
</div>
{% endfor %}
</div>
<div id="read-more-news">
<a href="javascript:void(0)">Read more</a>
</div>


<hr class="l-page">

# Publications

{% assign selectedBoolForBibtex = true %}
{% assign selected = site.data.publications %}
{% for pub in selected %}
{% include pubentry.html pub=pub %}
{% endfor %}


<!-- ### All Publications -->

{% assign selectedBoolForBibtex = false %}

<hr class="l-page">
