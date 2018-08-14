---
title: New project - presentation for the website
excerpt: Presentation form for new projects.
ref: project-start
layout: form
ingress-text: Let's get started! These short questions are to showcase your project
  at digidemlab.org. Please write a couple of sentences for each question. During
  the project you can build on this presentation by sending images, videos and other
  material <a href="mailto:petter@digidemlab.org">petter@digidemlab.org</a> to be
  posted on the website.
form:
- id: namn
  title: Your name
  type: text
  required: required
- id: _replyto
  title: Your email address
  required: required
  type: email
- id: projectName
  title: What do you want to call your project?
  description: Something short and catchy!
- id: projectDate
  title: What date do you want to start?
  description: The project will last for three months from that date.
- id: projectDesc
  title: What will you do during the project?
  description: Two to three sentences.
  type: textarea
- id: projectResult
  title: What kind of results do you hope for?
  type: textarea
  description: Two to three sentences.
- id: projectLeader
  title: Tell us a little bit about yourself...
  type: textarea
  description: Two to three sentences.
- id: file
  title: "... and send a picture of yourself!"
  type: file
- id: _subject
  value: Start på projekt
  type: hidden
- id: _after
  value: https://digidemlab.org
  type: hidden
- id: _honeypot
  value: ''
  type: hidden
- id: send
  type: submit
  title: Send
---

