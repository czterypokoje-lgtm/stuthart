import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site.config';

export const metadata: Metadata = {
  title: {
    absolute: 'Cookie-Richtlinie | FC-KEY',
  },
  description: `Cookie-Richtlinie von ${SITE_CONFIG.fullName}.`,
  alternates: { canonical: `${SITE_CONFIG.domain}/cookie-richtlinie` },
};

export default function CookiePage() {
  return (
    <main id="main-content">
      <section style={{ background: 'linear-gradient(135deg, #070e1a 0%, #0a1628 100%)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ color: '#fff' }}>Cookie-Richtlinie</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 2rem', maxWidth: 900 }}>
        {[
          { title: '1. Was sind Cookies?', content: 'Cookies sind kleine Textdateien, die beim Besuch unserer Website auf Ihrem Computer oder mobilen Gerät gespeichert werden. Sie helfen uns, die Website ordnungsgemäß funktionieren zu lassen und die Benutzererfahrung zu verbessern.' },
          { title: '2. Welche Cookies verwenden wir?', content: 'Wir verwenden funktionale Cookies (die für den Betrieb der Website zwingend erforderlich sind) und analytische Cookies (wie Google Analytics, in anonymisierter Form), um zu verstehen, wie Besucher mit unserer Website interagieren.' },
          { title: '3. Google Analytics', content: 'Wir nutzen Google Analytics, um das Nutzerverhalten auszuwerten. Dabei haben wir IP-Anonymisierung aktiviert, sodass keine Rückschlüsse auf Ihre Person gezogen werden können. Die gesammelten Daten werden nicht mit anderen Diensten von Google geteilt.' },
          { title: '4. Cookies verwalten oder löschen', content: 'Sie können Cookies jederzeit über die Einstellungen Ihres Webbrowsers verwalten oder löschen. Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität unserer Website einschränken kann.' },
          { title: '5. Kontakt', content: `Haben Sie Fragen zu unserer Cookie-Richtlinie? Kontaktieren Sie uns unter ${SITE_CONFIG.email}.` },
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
