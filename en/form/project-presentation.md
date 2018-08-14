---
title: Presentation for the website
excerpt: Presentation form for projects.
ref: project-presentation
layout: form
ingress-text: Here are a few questions to showcase your project at the website. Please
  send additional images, links and texts (if you have any) to <a href="mailto:petter@digidemlab.org">petter@digidemlab.org</a>!
form:
- id: namn
  title: Your name
  type: text
  required: required
- id: _replyto
  title: Your email address
  required: required
  type: email
- id: projectDesc
  title: What did you do during the project?
  description: Two to three sentences.
  type: textarea
- id: projectResult
  title: What did you learn?
  type: textarea
  description: Two to three sentences.
- id: projectFollowup
  title: How do you want to use that knowledge in the future?
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
  title: Send
---

