'use client';

import { FormEvent } from 'react';

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`Kontaktanfrage von ${name || 'Website'}`);
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
    window.location.href = `mailto:info@fuehrungsfrauen-hn.de?subject=${subject}&body=${body}`;
  }

  return <form className="contact-form" onSubmit={submit}>
    <div><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" required /></div>
    <div><label htmlFor="contact-email">E-Mail</label><input id="contact-email" name="email" type="email" required /></div>
    <div><label htmlFor="contact-message">Nachricht</label><textarea id="contact-message" name="message" rows={4} required /></div>
    <button className="btn" type="submit">Anfrage per E-Mail öffnen</button>
  </form>;
}
