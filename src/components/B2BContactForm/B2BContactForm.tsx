"use client";
import { useState } from "react";
import { SITE_CONFIG } from "@/config/site.config";
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
  const [submitted, setSubmitted] = useState(false);

  function buildEmailUrl() {
    const subject = `B2B Anfrage: ${company || ''}`;
    const parts = [
      "Neue B2B Partnerschaft Anfrage",
      "------------------------------",
      company ? `Firma: ${company}` : null,
      contactPerson ? `Ansprechpartner: ${contactPerson}` : null,
      email ? `E-Mail: ${email}` : null,
      phone ? `Telefon: ${phone}` : null,
      industry ? `Branche: ${industry}` : null,
      "",
      message ? `Nachricht:\n${message}` : null,
    ].filter(p => p !== null).join("\n");
    return `mailto:info@fc-key.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(parts)}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = buildEmailUrl();
      setSubmitted(false);
    }, 200);
  }

  return (
    <div className={`${styles.wrapper} ${theme === 'light' ? styles.light : styles.dark}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Partner werden</h3>
        <p className={styles.subtitle}>Unverbindliche Anfrage stellen</p>
      </div>
      
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

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={submitted || !company || !contactPerson || !phone || !industry || !email}
        >
          {submitted ? "Leitet weiter..." : "Jetzt anfragen"}
        </button>
      </form>
    </div>
  );
}
