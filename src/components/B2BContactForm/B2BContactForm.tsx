"use client";
import { useState } from "react";
import styles from "./B2BContactForm.module.css";

interface Props {
  theme?: 'dark' | 'light';
}

const INDUSTRIES = [
  "Flottenmanagement & Leasing",
  "Autohaus / Fahrzeughandel",
  "Kfz-Werkstatt",
  "Pflegedienst / Soziales",
  "Logistik & Transport",
  "Sonstiges",
];

export default function B2BContactForm({ theme = 'light' }: Props) {
  const [company, setCompany] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@fc-key.de", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            _subject: `Neue B2B Partnerschaft Anfrage: ${company}`,
            Firma: company,
            Ansprechpartner: contactPerson,
            Email: email,
            Telefon: phone,
            Branche: industry,
            Nachricht: message,
        })
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMsg("Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut.");
      }
    } catch (error) {
       setErrorMsg("Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`${styles.wrapper} ${theme === 'light' ? styles.light : styles.dark}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Partner werden</h3>
        <p className={styles.subtitle}>Unverbindliche Anfrage stellen</p>
      </div>
      
      {isSuccess ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h4 style={{ fontSize: '1.25rem', color: 'var(--navy-900)', marginBottom: '0.5rem', fontWeight: 700 }}>Vielen Dank für Ihre Anfrage!</h4>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Wir haben Ihre Daten erhalten und werden uns in Kürze bei Ihnen melden.
          </p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} id="b2b-lead-form">
          <div className={styles.field}>
            <input
              type="text"
              className={styles.input}
              placeholder="Firmenname *"
              value={company}
              onChange={e => setCompany(e.target.value)}
              required
              aria-label="Firmenname"
            />
          </div>

          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <input
                type="text"
                className={styles.input}
                placeholder="Ansprechpartner *"
                value={contactPerson}
                onChange={e => setContactPerson(e.target.value)}
                required
                aria-label="Ansprechpartner"
              />
            </div>
            <div className={styles.field}>
              <input
                type="email"
                className={styles.input}
                placeholder="E-Mail Adresse *"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="E-Mail Adresse"
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <input
                type="tel"
                className={styles.input}
                placeholder="Telefonnummer *"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                aria-label="Telefonnummer"
              />
            </div>
            <div className={styles.field}>
              <select
                className={styles.select}
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                required
                aria-label="Branche"
              >
                <option value="">Branche auswählen *</option>
                {INDUSTRIES.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <textarea
              className={styles.textarea}
              placeholder="Ihr Anliegen / Ihre Nachricht"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={4}
              aria-label="Nachricht"
            ></textarea>
          </div>

          {errorMsg && (
            <div style={{ color: 'red', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
              {errorMsg}
            </div>
          )}

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting || !company || !contactPerson || !phone || !industry || !email}
          >
            {isSubmitting ? "Wird gesendet..." : "Jetzt anfragen"}
          </button>
        </form>
      )}
    </div>
  );
}
