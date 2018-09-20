---
title: Ansökan kommunikatörstjänst
excerpt: Ansökan kommunikatörstjänst
layout: form
ingress-text: Här följer några frågor för att presentera ditt projekt på hemsidan.
  Om du har bilder, länkar, texter eller annan dokumentation av det som du gjort,
  skicka gärna det till <a href="mailto:petter@digidemlab.org">petter@digidemlab.org</a>!
form:
- id: namn
  title: Ditt namn
  type: text
  required: required
- id: _replyto
  title: Din mailadress
  required: required
  type: email
- id: projectDesc
  title: Vad var syftet med projektet?
  description: Två till tre meningar.
  type: textarea
- id: projectResult
  title: Vad har du kommit fram till?
  type: textarea
  description: Två till tre meningar.
- id: projectFollowup
  title: Hur kommer du att följa upp det du har gjort i projektet?
  type: textarea
  description: Två till tre meningar.
- id: projectLeader
  title: Berätta om dig själv...
  type: textarea
  description: Två till tre meningar.
- id: file
  title: "... och skicka med en bild på dig själv!"
  type: file
- id: _subject
  value: Dokumentation av projekt
  type: hidden
- id: _after
  value: https://digidemlab.org
  type: hidden
- id: _honeypot
  value: ''
  type: hidden
- id: send
  type: submit
  title: Skicka
---
