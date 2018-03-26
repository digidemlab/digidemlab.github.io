---
title: Projektstart
layout: form
form:
- id: namn
  title: Ditt namn
  type: text
  placeholder: Ditt namn
- id: _replyto
  title: Mailadress
- id: meddelande
  title: Meddelande
  type: textarea
- id: bilaga
  title: Bilaga
  type: file
- id: _subject
  value: Ämnesrad mail
  type: hidden
- id: _after
  value: http://digidemlab.org
  type: hidden
- id: _honeypot
  value: ''
  type: hidden
- id: send
  type: submit
  value: Skicka
  title: Skicka
---

<!--
<form action="https://mailthis.to/you@mail.com"
    method="POST" encType="multipart/form-data">
    <input type="text" name="name" placeholder="Your name">
    <input type="email" name="_replyto" placeholder="Your email">
    <textarea name="message" placeholder="Enter your message here"></textarea>
    <input type="file" name="file" placeholder="Attachments (optional)">
    <input type="hidden" name="_subject" value="Contact form submitted">
    <input type="hidden" name="_after" value="https://myhomepage.net/">
    <input type="hidden" name="_honeypot" value="">
    <input type="hidden" name="_confirmation" value="">
    <input type="submit" value="Send">
</form>
-->
