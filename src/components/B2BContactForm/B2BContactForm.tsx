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
  const [industry, setIndustry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function buildWhatsAppUrl() {
    const parts = [
      "B2B Partnerschaft Anfrage",
      "",
      company ? `Firma: ${company}` : null,
      contactPerson ? `Ansprechpartner: ${contactPerson}` : null,
      industry ? `Branche: ${industry}` : null,
      phone ? `Telefon: ${phone}` : null,
      "",
      message ? `Nachricht: ${message}` : null,
    ].filter(p => p !== null).join("\n");
    return `https://wa.me/${SITE_CONFIG.phoneTel.replace(/\D/g,"")}?text=${encodeURIComponent(parts)}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
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
              type="tel"
              className={styles.input}
              placeholder="Telefonnummer *"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              aria-label="Telefonnummer"
            />
          </div>
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
          disabled={submitted || !company || !contactPerson || !phone || !industry}
        >
          {submitted ? "Leitet weiter..." : "Jetzt anfragen"}
        </button>
      </form>
    </div>
  );
}
