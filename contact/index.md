---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Welcome to JC STEM Lab of Smart Cyber-Physical Industrial Systems at The University of Hong Kong! Our research explores deep integration and interaction between cyber systems and physical systems to tackle practical challenges, leveraging the state-of-the-art robotic systems such as humanoid, quadruped robots, robotic arms, hexapods, and automated vehicles. Highly motivated students interested in our research are encouraged to contact us.

We are located at Room 103M, Haking Wong Building, Pok Fu Lam Road, Hong Kong.

<div style="text-align: left;">
{%
  include button.html
  type="email"
  text="hkucpslab@gmail.com"
  link="hkucpslab@gmail.com"
%}
{%
  include button.html
  type="address"
  tooltip="Room 103M, Haking Wong Building, Pok Fu Lam Road, Hong Kong"
  link="https://www.google.com/maps/search/?api=1&query=Haking+Wong+Building+University+of+Hong+Kong"
%}
</div>

{% include section.html %}

{% capture col1 %}

<figure class="figure">
  <div style="width: 100%; height: 300px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
    <img src="{{ 'images/hw_building_full.png' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;" alt="Haking Wong Building">
  </div>
  <figcaption class="figure-caption">Haking Wong Building</figcaption>
</figure>

{% endcapture %}

{% capture col2 %}

<figure class="figure">
  <div style="width: 100%; height: 300px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
    <img src="{{ 'images/hw_building.jpg' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover;" alt="Our Lab Location">
  </div>
  <figcaption class="figure-caption">View Of Haking Wong Building Location from HKU METRO A2 EXIT</figcaption>
</figure>

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}
