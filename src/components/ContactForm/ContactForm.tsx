'use client';

import React, { useState } from 'react';

import { SITE_CONFIG } from '@/config/site.config';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'succeeded' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const car = formData.get('car') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Neue Anfrage von ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nTelefon: ${phone}\nE-Mail: ${email}\nAuto: ${car}\n\nNachricht:\n${message}`);

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setStatus('succeeded');
      form.reset();
    }, 500);
  };

  if (status === 'succeeded') {
    return (
      <div style={{ background: '#e6fffa', border: '1px solid #38b2ac', padding: '1.5rem', borderRadius: '8px', color: '#234e52', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem', color: '#2c7a7b' }}>Vielen Dank für Ihre Anfrage!</h3>
        <p>Wir haben Ihre Nachricht erfolgreich erhalten. Sie erhalten in der Regel innerhalb von 15 Minuten eine Antwort von unserem Monteur.</p>
        <button 
          onClick={() => setStatus('idle')} 
          style={{ background: 'transparent', border: '1px solid #38b2ac', padding: '0.5rem 1rem', borderRadius: '6px', color: '#2c7a7b', marginTop: '1rem', cursor: 'pointer', fontWeight: 600 }}
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} id="contact-form">
      {[
        { id: 'name', label: 'Name', type: 'text', placeholder: 'Ihr Name' },
        { id: 'phone', label: 'Telefonnummer', type: 'tel', placeholder: '017X-XXXXXXX' },
        { id: 'car', label: 'Automarke & Modell', type: 'text', placeholder: 'z.B. BMW 3er 2019' },
        { id: 'email', label: 'E-Mail-Adresse', type: 'email', placeholder: 'ihre@email.de' },
      ].map((field) => (
        <div key={field.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <label htmlFor={field.id} style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>{field.label}</label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required={field.id !== 'email'} 
            disabled={status === 'submitting'}
            style={{ padding: '0.75rem 1rem', border: '1px solid var(--color-border)', borderRadius: '8px', fontSize: '0.95rem', outline: 'none', background: status === 'submitting' ? '#f3f4f6' : '#fff' }}
          />
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <label htmlFor="message" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Nachricht / Situation</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Beschreiben Sie Ihre Situation..."
          required
          disabled={status === 'submitting'}
          style={{ padding: '0.75rem 1rem', border: '1px solid var(--color-border)', borderRadius: '8px', fontSize: '0.95rem', resize: 'vertical', outline: 'none', background: status === 'submitting' ? '#f3f4f6' : '#fff' }}
        />
      </div>

      {status === 'error' && (
        <div style={{ color: '#c53030', background: '#fff5f5', padding: '0.75rem', borderRadius: '6px', fontSize: '0.9rem', border: '1px solid #feb2b2' }}>
          Leider ist beim Senden Ihrer Nachricht ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.
        </div>
      )}

      <button
        type="submit"
        id="contact-submit"
        disabled={status === 'submitting'}
        style={{ 
          background: status === 'submitting' ? '#9ca3af' : 'var(--color-primary)', 
          color: '#fff', 
          padding: '1rem', 
          borderRadius: '8px', 
          fontWeight: 700, 
          fontSize: '1rem', 
          border: 'none', 
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer', 
          marginTop: '0.5rem',
          transition: 'background 0.2s'
        }}
      >
        {status === 'submitting' ? 'Wird gesendet...' : '📋 Angebot anfordern'}
      </button>
    </form>
  );
}
