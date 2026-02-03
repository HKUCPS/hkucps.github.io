---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## Principal Investigator

{% include portrait.html lookup="sy-hu" %}

---

## RPG Students

{% assign phd_students = site.members | where: "role", "phd" | sort: "name" %}

{% if phd_students.size > 0 %}
{% capture content %}
{% for member in phd_students %}
{% include portrait.html lookup=member.slug %}
{% endfor %}
{% endcapture %}
{% include grid.html content=content %}
{% else %}
Openings available! If you are interested in joining our lab, please contact us.
{% endif %}

---

<!-- ## Master Students

{% assign master_students = site.members | where: "role", "master" | sort: "name" %}

{% if master_students.size > 0 %}
{% capture content %}
{% for member in master_students %}
{% include portrait.html lookup=member.slug %}
{% endfor %}
{% endcapture %}
{% include grid.html content=content %}
{% else %}
Openings available! If you are interested in joining our lab, please contact us.
{% endif %}

---

## Research Assistants

{% assign research_assistants = site.members | where: "role", "ra" | sort: "name" %}

{% if research_assistants.size > 0 %}
{% capture content %}
{% for member in research_assistants %}
{% include portrait.html lookup=member.slug %}
{% endfor %}
{% endcapture %}
{% include grid.html content=content %}
{% else %}
Openings available! If you are interested in joining our lab, please contact us.
{% endif %}

---

## Alumni

{% assign alumni = site.members | where: "group", "alum" | sort: "name" %}

{% if alumni.size > 0 %}
{% capture content %}
{% for member in alumni %}
{% include portrait.html lookup=member.slug %}
{% endfor %}
{% endcapture %}
{% include grid.html content=content %}
{% else %}
No alumni records yet.
{% endif %}

--- -->
