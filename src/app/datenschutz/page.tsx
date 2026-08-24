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
    <main>
      <section style={{ background: 'linear-gradient(135deg, #070e1a 0%, #0a1628 100%)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ color: '#fff' }}>Datenschutzerklärung</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 2rem', maxWidth: 900 }}>
        {[
          { title: '1. Verantwortlicher', content: `${SITE_CONFIG.fullName} ist verantwortlich für die Verarbeitung personenbezogener Daten, wie in dieser Datenschutzerklärung beschrieben. USt-IdNr.: ${SITE_CONFIG.kvk} | E-Mail: ${SITE_CONFIG.email}` },
          { title: '2. Welche Daten erheben wir?', content: 'Wir erheben: Name, Telefonnummer, E-Mail-Adresse, Kennzeichen/Fahrzeugdaten (zur Leistungserbringung), Rechnungsdaten. Wir erheben keine besonderen Kategorien personenbezogener Daten.' },
          { title: '3. Warum verarbeiten wir Ihre Daten?', content: 'Zur Erfüllung des Vertrages (Dienstleistungserbringung), zur Rechnungsstellung, zur Erfüllung rechtlicher Verpflichtungen und auf Ihre Anfrage für Garantieansprüche.' },
          { title: '4. Wie lange speichern wir Ihre Daten?', content: 'Rechnungsdaten: 10 Jahre (gesetzliche Aufbewahrungspflicht). Sonstige Kundendaten: maximal 2 Jahre nach dem letzten Kontakt.' },
          { title: '5. Ihre Rechte (DSGVO/GDPR)', content: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Widerspruch und Datenübertragbarkeit. Kontaktieren Sie uns unter ' + SITE_CONFIG.email },
          { title: '6. Cookies', content: 'Diese Website verwendet funktionale Cookies (erforderlich für den Betrieb) und analytische Cookies (Google Analytics 4, anonymisiert). Sie können Cookies in Ihren Browsereinstellungen ablehnen.' },
          { title: '7. Kontakt & Beschwerden', content: `Fragen? E-Mail an ${SITE_CONFIG.email}. Sie können auch eine Beschwerde bei der Datenschutzbehörde einreichen.` },
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
