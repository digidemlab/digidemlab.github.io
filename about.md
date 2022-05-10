---
title: Vi är Digidem Lab
description: Vi arbetar utifrån FN:s hållbarhetsmål och beprövade internationella
  erfarenheter inom medborgardeltagande.
ref: about
image: "/uploads/medialab.jpg"
ingress-text: Vi arbetar utifrån FN:s hållbarhetsmål och beprövade internationella
  erfarenheter inom medborgardeltagande.
links:
- title: Digidem Lab ideell förening
  url: "/foreningen/"
---

Det gör vi genom att erbjuda metoder och verktyg för medborgardeltagande som inkluderar underrepresenterade grupper i beslutsfattande.

Utgångspunkter är att skapa långsiktiga strukturer för dialogprocesser. Medborgare ska känna sig trygga och stärkta i sitt deltagande och tjänstepersoner få effektiva verktyg för att förankra arbetssätt och metodik internt.

<div class="box">
  <h2>Globala målen</h2>
  <p class="is-medium">Vi arbetar för att uppnå FN:s hållbarhetsmål, med fokus på följande punkter:</p>
  <p><strong>10.2</strong> ...verka för att alla människor, oavsett ålder, kön, funktions­ned­sättning, ras, etnicitet, ur­­sprung, religion eller ekonomisk eller annan ställning, blir inkluderade i det sociala, ekonomiska och ­politiska livet.</p>
  <p><strong>16.7</strong> Säkerställa ett lyhört, inkluderande, deltagande­baserat och representativt beslutsfattande på alla nivåer.</p>
  <p><strong>11.3</strong> ...verka för en inkluderande och hållbar urba­n­isering samt förbättra kapaciteten för del­tagande­baserad, integrerad och hållbar planering och förvaltning av bosättningar i alla länder.</p>
</div>

En viktig del av vårt arbete är att vi också är ett labb - en plats för att utveckla och testa framtidens verktyg och metoder. Vi har hittills stöttat [över 30 projekt](/lab/), genomförda av unga personer, och genom nätverket [Civic Tech Sweden](http://civictech.se) ordnar vi hackathons och meetups för att utveckla nya digitala tjänster för samhällsnytta.

# Vårt team

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
            {{item.job}}<br>
            {{item.phone}}<br>
            <a href="mailto:{{item.mail}}" class="text-white">{{item.mail}}</a>
          </p>
          {{item.content}}
        </div>
      {% endfor %}
    </div>
  </div>
</div>
