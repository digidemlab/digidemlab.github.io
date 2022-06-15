---
title: We are Digidem Lab
description: We work to improve citizen participation according to the UN Global Goals.
ref: about
image: "/uploads/medialab.jpg"
ingress-text: We work to improve citizen participation according to the UN Global
  Goals.
---

We do this by providing methods and platforms for citizen participation and decision making with a focus on under-represented groups.

The aim is to create sustainable frameworks for citizen participaton. Citizens should feel reassured and empowered in their participation and civil servants should have access to effective tools to administer participation.

<div class="box">
  <h2>The Global Goals</h2>
  <p class="is-medium">We work according to UN's Global Goals for Sustainable Development, focusing on:</p>
  <p><strong>10.2</strong> By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status.</p>
  <p><strong>16.7</strong> Ensure responsive, inclusive, participatory and representative decision-making at all levels.</p>
  <p><strong>11.3</strong> By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries.</p>
</div>

An important part of our work is also to be a lab - a place to test and develop new methods and platforms. Digidem Lab has sponsored [over 30 projects](/lab/en/) by young people, and are founders of  [Civic Tech Sweden](http://civictech.se/en), a network for strengthening the civic tech sector.

# Our team

{% assign crew=site.crew | where:"lang", page.lang %}

<div class="columns">
  <div class="column is-offset-1-widescreen is-10-widescreen">
    <div class="columns is-desktop is-multiline">
      {% for item in crew %}
        <div class="column is-half-desktop teaser-crew">
          <figure class="image is-4by3">
            <img src="{{site.baseurl}}{{item.image}}">
          </figure>
          <h3 class="title is-6">{{item.title}}</h3>
          <p>
            {% if item.job %}{{item.job}}<br>{% endif %}
            {% if item.phone %}<a href="tel:{{item.phone}}" class="text-white">{{item.phone}}</a><br>{% endif %}
            {% if item.mail %}<a href="mailto:{{item.mail}}" class="text-white">{{item.mail}}</a>{% endif %}
          </p>
          {{item.content}}
        </div>
      {% endfor %}
    </div>
  </div>
</div>
