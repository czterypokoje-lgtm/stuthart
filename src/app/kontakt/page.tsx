import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import ContactForm from '@/components/ContactForm/ContactForm';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';

export const metadata: Metadata = {
  title: {
    absolute: 'Kontakt & 24/7 Notdienst | FC-KEY',
  },
  description: `Kontaktieren Sie ${SITE_CONFIG.fullName}. Anrufen, WhatsApp oder Nachricht senden. 24/7 erreichbar. Reaktionszeit: ${SITE_CONFIG.responseTime}.`,
  alternates: {
    canonical: `${SITE_CONFIG.domain}/kontakt`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: `${SITE_CONFIG.domain}/contact` },
  ],
};

const faqItems = [
  {
    q: "Was, wenn Sie meinen Autoschlüssel nicht nachmachen können?",
    a: "Wir bedienen 95%+ aller Automarken. Wenn es uns aus technischen Gründen nicht gelingt, zahlen Sie überhaupt nichts. No cure, no pay."
  },
  {
    q: "Muss ich im Voraus bezahlen?",
    a: "Nein. Sie zahlen erst nach Fertigstellung und wenn Sie den Schlüssel selbst getestet haben. Der Festpreis wird immer im Voraus vereinbart, damit Sie wissen, woran Sie sind."
  },
  {
    q: "Kommen Sie auch nachts?",
    a: "Ja, unser mobiler Service ist 24/7 verfügbar, auch am Wochenende. Und wir berechnen keine absurden Zuschläge für Abend- oder Nachtstunden."
  },
  {
    q: "Funktioniert das auch ohne Originalschlüssel?",
    a: "Ja. Selbst wenn Sie alle Schlüssel verloren haben (All Keys Lost), dekodieren wir Ihr Schloss mechanisch und programmieren einen brandneuen Schlüssel direkt in Ihr Zündschloss oder ECU (Bordcomputer) ein."
  }
];

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage(props: Props) {
  const searchParams = await props.searchParams;
  const q = typeof searchParams?.q === 'string' ? searchParams.q : null;
  
  const defaultH1 = `Autoschlüssel nachmachen? Durchschnittlich in ${SITE_CONFIG.responseTime} bei Ihnen`;
  let h1Text = defaultH1;
  if (q) {
    // Capitalize each word from the query to make it look like a natural Title
    const formattedQuery = q.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    h1Text = `${formattedQuery}? Durchschnittlich in ${SITE_CONFIG.responseTime} bei Ihnen`;
  }

  const steps = [
    { num: "1", title: "Anrufen oder ausfüllen", icon: "📞" },
    { num: "2", title: `Techniker unterwegs (Ø ${SITE_CONFIG.responseTime})`, icon: "🚐" },
    { num: "3", title: "Schlüssel vor Ort gemacht", icon: "🔑" },
    { num: "4", title: "Testen + Garantie", icon: "✅" },
  ];

  return (
    <>
      <script id="contact-bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        
        {/* ── HERO & SUBHEADLINE ─────────────────────────────────────── */}
        <section style={{ background: 'linear-gradient(135deg, #070e1a 0%, #0a1628 100%)', padding: '5rem 1.5rem', textAlign: 'center', color: '#fff' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              {h1Text}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', lineHeight: 1.5, maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Ersatzschlüssel, Schlüssel verloren oder Zündschloss defekt — unser Techniker kommt 24/7 zu Ihnen. 
              <strong> Festpreis vorab, keine Abschleppkosten.</strong>
            </p>

            <div style={{ marginBottom: '3rem' }}>
              <LeadCaptureForm phone={SITE_CONFIG.phoneTel} />
            </div>

            {/* ── CTAs Side by Side ── */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'var(--color-primary)', color: '#fff', padding: '1.25rem 2rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 15px rgba(0, 39, 82, 0.3)' }}>
                <span>📞 Direkt anrufen: {SITE_CONFIG.phone}</span>
              </a>
              <a href="#form-section" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#fff', color: 'var(--navy-900)', padding: '1.25rem 2rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none', border: '2px solid transparent' }}>
                <span>📝 Kostenloses Angebot anfordern</span>
              </a>
            </div>

            {/* ── Trust Strip ── */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> 24/7 Verfügbar</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Festpreis ab €{SITE_CONFIG.prices.unlock}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> 12 Monate Garantie</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Versichert</span>
            </div>
          </div>
        </section>

        {/* 3 steps HowTo (Full Width) */}
        <div style={{ padding: '3.5rem 0', background: '#ffffff', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <HowItWorks variant="default" />
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1100px', padding: '4rem 1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'start' }}>
            
            {/* ── LEFT COLUMN: SOCIAL PROOF, PRICING, HOW IT WORKS ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* Pricing Table */}
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Tarife</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontWeight: 600 }}>Keine Überraschungen im Nachhinein. Das zahlen Sie — Punkt.</p>
                <div style={{ overflowX: 'auto', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
                  <table style={{ width: '100%', minWidth: '500px', borderCollapse: 'collapse', background: '#fff', textAlign: 'left' }}>
                    <thead style={{ background: 'var(--navy-900)', color: '#fff' }}>
                      <tr>
                        <th style={{ padding: '1rem' }}>Schlüssel Typ</th>
                        <th style={{ padding: '1rem' }}>Händler Preis</th>
                        <th style={{ padding: '1rem', background: 'var(--color-primary)' }}>Unser Preis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '1rem' }}>Standard Schlüssel</td>
                        <td style={{ padding: '1rem', color: '#64748b', textDecoration: 'line-through' }}>€250 - €350</td>
                        <td style={{ padding: '1rem', fontWeight: 700 }}>Ab €{SITE_CONFIG.prices.unlock}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '1rem' }}>Klappschlüssel / Flip Key</td>
                        <td style={{ padding: '1rem', color: '#64748b', textDecoration: 'line-through' }}>€350 - €450</td>
                        <td style={{ padding: '1rem', fontWeight: 700 }}>Ab €199</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '1rem' }}>Smart Key / Keyless</td>
                        <td style={{ padding: '1rem', color: '#64748b', textDecoration: 'line-through' }}>€450 - €700</td>
                        <td style={{ padding: '1rem', fontWeight: 700 }}>Ab €299</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '1rem' }}>Alle Schlüssel verloren (kein funktionierender Schlüssel)</td>
                        <td style={{ padding: '1rem', color: '#64748b', textDecoration: 'line-through' }}>€600+</td>
                        <td style={{ padding: '1rem', fontWeight: 700 }}>Ab €299</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Social Proof */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '1.25rem', color: '#fbbf24' }}>★★★★★</div>
                  <span style={{ fontWeight: 700 }}>{SITE_CONFIG.rating}/5</span>
                  <span style={{ color: 'var(--color-text-muted)' }}>({SITE_CONFIG.reviewCount} Google Bewertungen)</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ padding: '1.5rem', background: '#fff', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                    <div style={{ color: '#fbbf24', marginBottom: '0.5rem', fontSize: '1.1rem' }}>★★★★★</div>
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>&ldquo;Schlüssel meines Audi A4 verloren, Händler hatte 8 Tage Wartezeit. Innerhalb von 40 Minuten vor Ort, Schlüssel funktionierte sofort.&rdquo;</p>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>— Mark D., Stuttgart</div>
                  </div>
                  
                  <div style={{ padding: '1.5rem', background: '#fff', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                    <div style={{ color: '#fbbf24', marginBottom: '0.5rem', fontSize: '1.1rem' }}>★★★★★</div>
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>&ldquo;Samstagabend angerufen, dachte, niemand würde abnehmen. Innerhalb von 35 Minuten stand der Techniker vor der Tür.&rdquo;</p>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>— Sanne V., Sindelfingen</div>
                  </div>

                  <div style={{ padding: '1.5rem', background: '#fff', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                    <div style={{ color: '#fbbf24', marginBottom: '0.5rem', fontSize: '1.1rem' }}>★★★★★</div>
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>&ldquo;Ehrlicher Preis, keine Überraschungen. Genau das, was im Voraus vereinbart wurde.&rdquo;</p>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>— Thomas B., Ludwigsburg</div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN: FORM & FAQ ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* Form Section */}
              <div id="form-section" style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-lg)' }}>
                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.75rem' }}>Kostenloses Angebot anfordern</h2>
                <ContactForm />
                {/* We add the microcopy right here via a small wrapper since the form is untouched */}
                <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '1rem', fontWeight: 500 }}>
                  🕒 Wir rufen Sie innerhalb von 5 Minuten zurück — auch abends und am Wochenende.
                </p>
              </div>

              {/* FAQ Section */}
              <div style={{ background: 'var(--color-bg-alt)', padding: '2rem', borderRadius: '12px' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Häufig gestellte Fragen</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqItems.map((item, idx) => (
                    <details key={idx} style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                      <summary style={{ fontWeight: 700, cursor: 'pointer', outline: 'none', color: 'var(--navy-900)' }}>
                        {item.q}
                      </summary>
                      <p style={{ marginTop: '0.75rem', color: 'var(--color-text-primary)', lineHeight: 1.5, fontSize: '0.95rem' }}>
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ── FINAL CTA BLOCK ────────────────────────────────────────── */}
        <section style={{ background: 'var(--navy-900)', padding: '4rem 1.5rem', textAlign: 'center', color: '#fff' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: '#fff', fontSize: '2.25rem', fontWeight: 800, marginBottom: '1rem' }}>Immer noch ohne Schlüssel? Wir stehen bereit.</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              24/7 erreichbar — auch jetzt. Kontaktieren Sie uns direkt für einen Festpreis und ETA.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'var(--color-primary)', color: '#fff', padding: '1.25rem 2.5rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 15px rgba(0, 39, 82, 0.3)' }}>
                <span>📞 Anrufen: {SITE_CONFIG.phone}</span>
              </a>
              <a href="#form-section" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'transparent', border: '2px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1.25rem 2.5rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none' }}>
                <span>📝 Angebot anfordern</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
