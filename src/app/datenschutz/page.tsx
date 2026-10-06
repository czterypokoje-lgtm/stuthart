import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site.config';

export const metadata: Metadata = {
  title: {
    absolute: 'Datenschutzerklärung (DSGVO-konform) | FC-KEY',
  },
  description: `Datenschutzerklärung von ${SITE_CONFIG.fullName}. DSGVO/GDPR-konform.`,
  alternates: { canonical: `${SITE_CONFIG.domain}/datenschutz` },
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section style={{ background: 'linear-gradient(135deg, #070e1a 0%, #0a1628 100%)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ color: '#fff' }}>Datenschutzerklärung</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Letzte Aktualisierung: 6. Oktober 2026</p>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 2rem', maxWidth: 900 }}>
        {[
          { title: '1. Verantwortlicher', content: `${SITE_CONFIG.fullName} ist verantwortlich für die Verarbeitung personenbezogener Daten, wie in dieser Datenschutzerklärung beschrieben. USt-IdNr.: ${SITE_CONFIG.kvk} | E-Mail: ${SITE_CONFIG.email}` },
          { title: '2. Welche Daten erheben wir?', content: 'Wir erheben: Name, Telefonnummer, E-Mail-Adresse, Kennzeichen/Fahrzeugdaten (zur Leistungserbringung), Rechnungsdaten. Wir erheben keine besonderen Kategorien personenbezogener Daten.' },
          { title: '3. Warum verarbeiten wir Ihre Daten? (Rechtsgrundlagen)', content: 'Zur Erfüllung des Vertrages bzw. zur Durchführung vorvertraglicher Massnahmen (Art. 6 Abs. 1 lit. b DSGVO), zur Erfüllung rechtlicher Verpflichtungen wie der steuerlichen Aufbewahrung (Art. 6 Abs. 1 lit. c DSGVO) sowie auf Grundlage Ihrer Einwilligung, soweit Sie uns diese erteilt haben (Art. 6 Abs. 1 lit. a DSGVO).' },
          { title: '4. Wie lange speichern wir Ihre Daten?', content: 'Rechnungsdaten: 10 Jahre (gesetzliche Aufbewahrungspflicht). Sonstige Kundendaten: maximal 2 Jahre nach dem letzten Kontakt.' },
          { title: '5. Ihre Rechte (DSGVO/GDPR)', content: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Widerspruch und Datenübertragbarkeit. Kontaktieren Sie uns unter ' + SITE_CONFIG.email },
          { title: '6. Cookies & lokale Speicherung', content: 'Diese Website setzt derzeit keine Analyse- oder Marketing-Cookies. Technisch notwendig speichern wir Ihre Cookie-Entscheidung lokal in Ihrem Browser. Einzelheiten und den Widerruf finden Sie in unserer Cookie-Richtlinie.' },
          { title: '7. Hosting', content: 'Diese Website wird bei der Vercel Inc. gehostet. Beim Aufruf werden technisch notwendige Server-Logfiles (IP-Adresse, Zeitpunkt, abgerufene Seite, User-Agent) verarbeitet, um den sicheren und stabilen Betrieb zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO). Es besteht ein Auftragsverarbeitungsvertrag.' },
          { title: '8. Kontaktformulare', content: 'Die Übermittlung unserer Formulare erfolgt über den Dienstleister FormSubmit, der Ihre Angaben (Name, Telefonnummer, E-Mail, Fahrzeug- und Kennzeichendaten) ausschliesslich zur Weiterleitung an unser E-Mail-Postfach verarbeitet. Dabei kann eine Übermittlung in die USA stattfinden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.' },
          { title: '9. WhatsApp-Kontakt', content: 'Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Telefonnummer und Nachrichteninhalte durch die WhatsApp Ireland Ltd. verarbeitet. Die Nutzung ist freiwillig; alternativ erreichen Sie uns per Telefon oder E-Mail.' },
          { title: '10. Kontakt & Beschwerden', content: `Fragen? E-Mail an ${SITE_CONFIG.email}. Ihnen steht ausserdem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu: Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstrasse 20, 70173 Stuttgart.` },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{section.title}</h2>
            <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{section.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
