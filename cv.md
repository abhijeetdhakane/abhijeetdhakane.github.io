---
layout: cv
title: CV
permalink: cv/
jsarr:
- js/scripts.js
---

<h1 id="cv-title"><a href="{{ site.url }}"> {{ site.title }} </a></h1>

<p id="cv-subtitle"><i> {{ site.tagline }} </i></p>


<!-- <div>
	I am a PhD student at Bredesen Center at University of Tennessee and Oak Ridge National Laboratory. I work in AI4Science-Material Science domain towards my disseration adapting machine learning and deep learning technique to accelerate the material discovery. To solve the material science related problems in the emerging memory, energy storage and neuromorphic computing applications.   
</div> -->
<!-- <div>
	I am a computational materials scientist working at the intersection of atomistic simulation, artificial intelligence, and high-performance computing. I earned my Ph.D. in Data Science and Engineering through the Bredesen Center at the University of Tennessee, with my research conducted at Oak Ridge National Laboratory.

	My research focuses on developing physics-informed and data-driven methods to understand, predict, and control nanoscale materials behavior relevant to next-generation memory and electronic devices. I work across materials classes including two-dimensional materials, ferroelectric oxides and polymers, and complex heterogeneous interfaces. By integrating large-scale molecular dynamics, machine learning, and autonomous workflows, I develop simulation-augmented discovery and inverse design frameworks that connect atomic-scale dynamics to device-level functionality.

	I have extensive experience working in DOE user-facility environments, collaborating closely with experimentalists and computational teams to translate large-scale simulations into experimentally actionable insight. My interests include AI4Science, digital twins, agentic and closed-loop workflows, interpretable machine learning for physical systems, and energy-efficient computing for materials and device discovery.
</div> -->

<!-- <div>
	I am a computational materials scientist working at the intersection of atomistic simulation, artificial intelligence, and high-performance computing. I earned my Ph.D. in Data Science and Engineering through the Bredesen Center at the University of Tennessee, with research conducted at Oak Ridge National Laboratory. My work focuses on physics-informed and AI-driven methods for nanoscale materials and next-generation memory and electronic devices, integrating large-scale molecular dynamics, machine learning, and autonomous workflows to enable simulation-driven discovery.
</div> -->
<div>
	I am a computational materials scientist working at the intersection of atomistic simulation, artificial intelligence, and high-performance computing. I earned my Ph.D. in Data Science and Engineering through the Bredesen Center at the University of Tennessee, with research conducted at Oak Ridge National Laboratory. My work focuses on physics-informed and AI-driven approaches for nanoscale materials and next-generation memory and energy devices, integrating large-scale molecular dynamics, machine learning, and autonomous workflows, with particular interest in simulation-driven discovery and the mechanistic interpretability of scientific machine learning models.
</div>



***

<div class="cv-image-links-wrapper">
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 1 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 2 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
</div>

***

## Education
{::nomarkdown} 
{% for degree in site.data.education %}
{% include cv/degree.html degree=degree %}
{% endfor %}
{:/}

<!-- ## Work Experience
{::nomarkdown}
{% for experience in site.data.experiences %}
{% if experience.type == "industry"%}
{% include cv/experience.html experience=experience %}
{% endif %}
{% endfor %}
{:/} -->
## Academic Research Experience
{::nomarkdown}
{% for experience in site.data.experiences %}
  {% if experience.type == "industry" or experience.type == "academia" %}
    {% include cv/experience.html experience=experience %}
  {% endif %}
{% endfor %}
{:/}

<!-- ## Selected Honors and Awards

{% for award in site.data.awards %}
{% include cv/award.html award=award %}
{% endfor %} -->


## Publications

{% assign selectedBoolForBibtex = true %}
{::nomarkdown}
{% assign pubs = site.data.publications | where: "type", "journal" | sort: "year" | reverse %}
{% for pub in pubs %}
  {% include cv/publication.html pub=pub %}
{% endfor %}
{:/}


## Talks

{% assign selectedBoolForBibtex = true %}
{::nomarkdown}
{% assign talks = site.data.publications | where: "type", "conference" | sort: "year" | reverse %}
{% for pub in talks %}
  {% include cv/publication.html pub=pub %}
{% endfor %}
{:/}


## Posters

{% assign selectedBoolForBibtex = true %}
{::nomarkdown}
{% assign posters = site.data.publications | where: "type", "poster" | sort: "year" | reverse %}
{% for pub in posters %}
  {% include cv/publication.html pub=pub %}
{% endfor %}
{:/}

<!--
## Patents

{::nomarkdown}
{% assign patents = site.data.publications | where: "type", "patent" | sort: "year" | reverse %}
{% for pub in patents %}
  {% include cv/publication.html pub=pub %}
{% endfor %}
{:/}
-->



<!-- ## Publications

{% assign selectedBoolForBibtex = true %}
{::nomarkdown}
{% assign selected = site.data.publications | where: 'type', "conference" %}
{% for pub in selected %}
{% include cv/publication.html pub=pub %}
{% endfor %}
{:/}


## Patents

{% assign patent = site.data.publications | where: 'type', "patent" %}
{% for pub in patent %}
{% include cv/publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %} -->

## Academic Service
#### Reviewing

{% for venue in site.data.reviewer %} 
{% include cv/venue.html venue=venue %} 
{% endfor %}

{% assign talktitles = site.data.talks | group_by:"title" %}
{% for title in talktitles %}
{% include cv/talk.html talk=title %}
{% endfor %}


{% assign talktitles = site.data.university_lectures | group_by:"title" %}
{% for title in talktitles %}
{% include cv/university_lectures.html talk=title %}
{% endfor %}

## Collaborators 

{::nomarkdown}
{% for mentee in site.data.mentoring %}
{% include cv/mentee.html mentee=mentee %}
{% endfor %}
{:/}

<!-- ## Articles and Blogs

{% for blogs in site.data.blogs %}
{% include cv/blogs.html blogs=blogs %}
{% endfor %} -->

## Press

{% for press in site.data.press %}
{% include cv/press.html press=press %}
{% endfor %}




