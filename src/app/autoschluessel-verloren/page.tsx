import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import { BRANDS } from '@/config/brands';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';

export const metadata: Metadata = {
  title: {
    absolute: 'Autoschlüssel verloren? | 24/7 Mobiler Service | FC-KEY',
  },
  description: `Autoschlüssel verloren? Wir helfen sofort. Neuen Schlüssel vor Ort programmieren. Alle Marken. 24/7. Rufen Sie an: ${SITE_CONFIG.phone}`,
  keywords: ['autoschlüssel verloren','alle schlüssel verloren auto','autoschlüssel verloren was tun','neuen autoschlüssel machen lassen','autoschlüssel verloren schlüsseldienst'],
  alternates: {
    canonical: `${SITE_CONFIG.domain}/autoschluessel-verloren`,
    languages: {
      'nl-NL': `${SITE_CONFIG.domain}/autoschluessel-verloren`,
      'x-default': `${SITE_CONFIG.domain}/autoschluessel-verloren`,
    },
  },
  openGraph: {
    type: 'website',
    url: `${SITE_CONFIG.domain}/autoschluessel-verloren`,
    title: 'Autoschlüssel verloren? | 24/7 Mobiler Service | FC-KEY',
    description: `Autoschlüssel verloren? Wir helfen sofort. Neuen Schlüssel vor Ort programmieren. Alle Marken. 24/7. Rufen Sie an: ${SITE_CONFIG.phone}`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Autoschlüssel verloren — FC-KEY' }],
  },
};

const faqItems = [
  { q: 'Autoschlüssel verloren, was tun?', a: 'Wenn Sie Ihren Autoschlüssel verloren haben, prüfen Sie zuerst, ob Sie das Auto mit einem Ersatzschlüssel öffnen können. Ist kein Ersatzschlüssel verfügbar? Kontaktieren Sie direkt FC-KEY. Unsere mobilen Techniker kommen sofort zu Ihnen, öffnen das Auto 100% schadenfrei und fertigen vor Ort einen neuen Autoschlüssel mit Fernbedienung an.' },
  { q: 'Was tun, wenn man seinen Autoschlüssel verloren hat?', a: 'Lassen Sie Ihr Auto an einem sicheren Ort stehen. Kontaktieren Sie einen mobilen Autoschlüsseldienst wie FC-KEY, um den verlorenen Schlüssel aus dem Bordcomputer löschen zu lassen. Dies verhindert, dass Unbefugte Ihr Auto mit dem gefundenen Schlüssel stehlen können.' },
  { q: 'Autoschlüssel verloren, wer bietet Ersatz an?', a: 'Sowohl Vertragshändler als auch spezialisierte mobile Autoschlüsseldienste (wie FC-KEY) bieten Ersatz an. Während Sie beim Händler das Auto abschleppen lassen müssen und oft tagelang warten, erledigt FC-KEY den Ersatz direkt vor Ort in Stuttgart, Sindelfingen und 50km Umkreis noch am selben Tag.' },
  { q: 'Schritt-für-Schritt-Plan bei verlorenem Autoschlüssel?', a: 'Gehen Sie wie folgt vor: 1. Prüfen Sie, ob das Auto verschlossen und sicher geparkt ist. 2. Sammeln Sie die Fahrzeugdaten (Marke, Modell, Baujahr, Kennzeichen). 3. Kontaktieren Sie FC-KEY per Telefon oder WhatsApp. 4. Der Techniker kommt zu Ihnen, öffnet das Auto schadenfrei und liest die Wegfahrsperre aus. 5. Der verlorene Schlüssel wird blockiert und der neue Schlüssel angelernt.' },
  { q: 'Wie schnell kann ein Autoschlüssel nachgemacht werden?', a: 'Bei FC-KEY kann ein neuer Autoschlüssel meist innerhalb von 30 bis 60 Minuten vor Ort nachgemacht und programmiert werden. Sie müssen also nicht tagelang warten wie beim offiziellen Vertragshändler.' },
  { q: 'Kosten für einen neuen Autoschlüssel?', a: 'Die Kosten variieren durchschnittlich von €149 bis €350, abhängig von Automarke, Baujahr und ob es sich um einen Transponderschlüssel, Klappschlüssel oder Smart Key handelt. FC-KEY bietet diesen Service bis zu 60% günstiger an als der Händler.' },
  { q: 'Wo finde ich einen Autoschlüsseldienst in meiner Nähe?', a: 'Einen mobilen Autoschlüsseldienst finden Sie bei FC-KEY. Wir fahren durch die gesamte Region Stuttgart, Sindelfingen und im 50km Umkreis. Unsere Techniker kommen direkt zu Ihrem Standort.' },
  { q: 'Wo kann ich einen Autoschlüssel nachmachen lassen?', a: 'Sie können einen Autoschlüssel bei einem spezialisierten mobilen Schlüsseldienst (wie FC-KEY) oder beim Händler nachmachen lassen. Ein mobiler Schlüsseldienst ist die komfortabelste Option, da der Schlüssel direkt bei Ihnen zu Hause oder am Arbeitsplatz angelernt wird.' },
  { q: 'Kosten für das Nachmachen ohne Ersatzschlüssel?', a: 'Wenn Sie alle Autoschlüssel verloren haben und keinen Ersatzschlüssel besitzen, beginnen die Kosten bei FC-KEY ab €190. Der Schlüsseldienst muss in diesem Fall zuerst das Türschloss dekodieren und die Wegfahrsperre (EEPROM/OBD) programmieren.' },
  { q: 'Notdienst für verlorene Autoschlüssel?', a: 'Ja, FC-KEY bietet einen 24/7 Notdienst für verlorene Autoschlüssel. Bei Notfällen oder wenn Sie ausgesperrt sind, bemühen sich unsere Techniker, innerhalb von 30 bis 45 Minuten bei Ihnen vor Ort zu sein.' },
  { q: 'Kann ein Autoschlüssel mit Fernbedienung ohne Originalschlüssel gemacht werden?', a: 'Ja, das ist möglich. Unsere Spezialisten können den einzigartigen mechanischen Einschnitt bestimmen, indem sie den Zylinder der Autotür dekodieren. Den Transponder und die Fernbedienung programmieren wir anschließend direkt über den OBD2-Diagnoseanschluss in den Bordcomputer.' },
  { q: 'Auto ohne Schlüssel vom Profi öffnen lassen?', a: 'Ja, FC-KEY öffnet Ihr Auto 100% schadenfrei ohne Schlüssel. Wir verwenden professionelle Lishi-Dekoder, um den Schließzylinder mechanisch zu öffnen, wodurch Türen, Lack und Dichtungsgummis völlig unbeschädigt bleiben.' },
  { q: 'Autoschlüssel verloren, kann der Händler einen neuen machen?', a: 'Ja, der Händler kann einen neuen machen, aber das erfordert, dass Sie das Auto auf eigene Kosten zum Händler abschleppen lassen. Außerdem müssen Sie oft 3 bis 10 Werktage warten, bis der Schlüssel aus der Fabrik geliefert und angelernt ist.' },
  { q: 'Ersatz-Autoschlüssel online bestellen?', a: 'Sie können online ein Schlüsselgehäuse bestellen, aber ein funktionierender Transponderschlüssel mit Elektronik kann nicht einfach online bestellt werden. Der Schlüssel muss nämlich physisch im Auto mit professionellen OBD-Geräten programmiert werden, um starten zu können.' },
  { q: 'Wie funktioniert das Programmieren eines Autoschlüssels nach Verlust?', a: 'Beim Programmieren schließt der Techniker einen Programmiercomputer an den OBD-Anschluss des Autos an. Damit werden die alten Schlüsselcodes aus der Wegfahrsperre (Immobilizer) gelöscht und der Transponderchip sowie die Fernbedienung des neuen Schlüssels gekoppelt.' },
  { q: 'Wie lange dauert es, einen neuen Autoschlüssel zu bekommen?', a: 'Beim Händler dauert dies meist 3 bis 10 Werktage. Bei FC-KEY erhalten Sie Ihren neuen Autoschlüssel noch am selben Tag. Innerhalb von 45 bis 60 Minuten, nachdem der Techniker an Ihrem Standort eingetroffen ist, können Sie wieder fahren.' },
  { q: 'Ist ein verlorener Autoschlüssel durch die Versicherung gedeckt?', a: 'Ja, bei einer Teil- oder Vollkaskoversicherung ist der Verlust oder Diebstahl von Autoschlüsseln oft gedeckt. Sie erhalten von FC-KEY eine offizielle, detaillierte Rechnung, die Sie direkt bei Ihrer Versicherung einreichen können.' },
  { q: 'Welche Firmen bieten einen 24/7 Autoschlüsselservice?', a: 'FC-KEY bietet einen 24/7 mobilen Autoschlüsselservice in Stuttgart, Sindelfingen und 50km Umkreis. Sie können uns Tag und Nacht telefonisch oder per WhatsApp für sofortige Hilfe erreichen.' },
  { q: 'Was sind die Optionen, wenn alle Autoschlüssel verloren sind?', a: 'Wenn Sie alle Autoschlüssel verloren haben, gibt es zwei Optionen: 1. Das Auto zum Händler schleppen lassen für einen teuren und langwierigen Prozess. 2. FC-KEY einschalten. Wir kommen zu Ihnen, öffnen das Auto, fräsen einen neuen Schlüsselbart und programmieren den Transponder vor Ort.' },
  { q: 'Wie finde ich einen günstigen Autoschlüsseldienst?', a: 'Einen günstigen Autoschlüsseldienst finden Sie, indem Sie sich für einen unabhängigen mobilen Autoschlüsselspezialisten wie FC-KEY entscheiden. Wir haben feste Preise vorab und sind bis zu 60% günstiger als der offizielle Vertragshändler, da wir keine Abschleppkosten und teure Händler-Gemeinkosten weitergeben.' },
  { q: 'Rat bei Verlust eines Autoschlüssels mit Wegfahrsperre?', a: 'Bei Verlust eines Schlüssels mit Wegfahrsperre ist es wichtig, den verlorenen Schlüssel sofort aus dem Autocomputer ausprogrammieren zu lassen. Unsere Techniker können dies direkt vor Ort für Sie tun, sodass der verlorene Schlüssel das Auto nicht mehr starten kann.' },
  { q: 'Kann ich einen Autoschlüssel online bestellen und programmieren lassen?', a: 'Ja, Sie können online einen Universalschlüssel kaufen, aber viele unabhängige Schlüsseldienste können diese aufgrund von Kompatibilitätsproblemen mit den Transponderchips nicht programmieren. Es ist sicherer und schneller, direkt einen kompletten Schlüssel inklusive Programmierung bei FC-KEY zu erwerben.' },
  { q: 'Autoschlüssel programmieren lassen nach Verlust?', a: 'Das Programmieren eines Autoschlüssels nach Verlust geschieht direkt an Ihrem Standort. Der Techniker generiert einen neuen Transpondercode, schreibt diesen über OBD2-Diagnosegeräte in den Speicher der Wegfahrsperre und synchronisiert die Fernbedienung.' },
  { q: 'Autoschlüssel verloren, was kostet der Ersatz durch einen Universalschlüssel?', a: 'Der Ersatz Ihres verlorenen Schlüssels durch einen Universalschlüssel in Erstausrüsterqualität kostet bei FC-KEY durchschnittlich zwischen €149 und €249, inklusive Fräsen des Schlüsselbarts und Programmieren des Transponders. Dies ist die günstigste und schnellste Lösung.' }
];

const steps = [
  { n:'1', title:'Gründlich prüfen', desc:'Prüfen Sie Jackentaschen, Taschen, Zuhause, Arbeit. Prüfen Sie, ob Sie einen Ersatzschlüssel haben.' },
  { n:'2', title:'Versicherung anrufen', desc:'Prüfen Sie Ihre Police — viele Vollkaskoversicherungen decken Schlüsselverlust. Wir stellen eine versicherungstaugliche Rechnung aus.' },
  { n:'3', title:'Rufen Sie uns direkt an', desc:`Wir sind 24/7 erreichbar. Geben Sie Automarke, Modell und Standort an. Wir nennen Ihnen sofort einen Festpreis.` },
  { n:'4', title:'Wir kommen zu Ihnen', desc:'Unser ausgestatteter Transporter fährt zu Ihrem Standort. Durchschnittlich 30–60 Minuten. Keine Abschleppkosten.' },
  { n:'5', title:'Neuer Schlüssel fertig', desc:'Wir programmieren den neuen Schlüssel vor Ort. Der alte gestohlene Schlüssel wird deaktiviert. Sie fahren los.' },
];

const brandPrices = BRANDS.filter(b => b.priority === 'P1').slice(0, 8);

const schema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
    { '@type': 'ListItem', position: 2, name: 'Autoschlüssel verloren', item: `${SITE_CONFIG.domain}/autoschluessel-verloren` },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Was tun, wenn Sie Ihren Autoschlüssel verloren haben',
  description: 'Befolgen Sie diesen 5-Schritte-Plan, um bei verlorenen oder gestohlenen Autoschlüsseln sofortige Hilfe zu erhalten.',
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.desc,
  })),
};

export default function AutosleutelKwijt() {
  return (
    <>
      <Script id="akl-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="akl-bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="akl-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <main>
        {/* EMERGENCY HERO — CTA absolute top priority */}
        <section style={{ background:'var(--color-danger)', padding:'2rem', textAlign:'center' }}>
          <p style={{ color:'rgba(255,255,255,0.9)', fontSize:'0.875rem', fontWeight:600, margin:'0 0 0.5rem' }}>
            NOTFALL — SOFORTIGE HILFE VERFÜGBAR
          </p>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} id="akl-emergency-phone"
            style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'#fff', color:'var(--color-danger)', padding:'1rem 2.5rem', borderRadius:'4px', fontWeight:700, fontSize:'1.3rem', textDecoration:'none' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            Jetzt anrufen: {SITE_CONFIG.phone}
          </a>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'0.875rem', marginTop:'0.75rem', marginBottom:0 }}>
            Durchschnittlich {SITE_CONFIG.responseTime} · 24/7 · Alle Marken
          </p>
        </section>

        {/* Hero */}
        <section style={{ background:'linear-gradient(160deg, var(--navy-900), var(--navy-800))', padding:'3rem 2rem' }}>
          <div style={{ maxWidth:1000, margin:'0 auto' }}>
            <h1 style={{ color:'#fff', fontSize:'clamp(1.6rem, 3.5vw, 2.4rem)', marginBottom:'1rem' }}>
              Autoschlüssel verloren? Soforthilfe — 24/7 Mobiler Service
            </h1>
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:'1rem', lineHeight:1.7, marginBottom:'1.5rem', maxWidth:680 }}>
              Autoschlüssel verloren? Wir programmieren einen neuen Schlüssel vor Ort — zu Hause, bei der Arbeit oder am Straßenrand.
              Alle Marken. Gestohlener Schlüssel wird deaktiviert. Versicherungstaugliche Rechnung.
            </p>
            <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap' }}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn btn-primary btn-lg" id="akl-hero-phone">{SITE_CONFIG.phone}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', background:'#002752', color:'#fff', padding:'0.85rem 1.5rem', borderRadius:'4px', fontWeight:700, textDecoration:'none', fontSize:'1rem' }} id="akl-hero-wa">WhatsApp</a>
            </div>
          </div>
        </section>

        <BrandsMarquee />

        {/* 3 steps HowTo */}
        <div style={{ padding: '3.5rem 0', background: '#ffffff' }}>
          <div className="container">
            <HowItWorks variant="akl" />
          </div>
        </div>

        {/* Pricing by brand */}
        <section style={{ padding:'3.5rem 0', background:'var(--gray-50)' }}>
          <div className="container">
            <h2>Kosten für einen neuen Schlüssel nach Marke</h2>
            <p>Richtpreise. Genauer Preis nach telefonischer Diagnose. Immer Festpreis vor Beginn.</p>
            <div style={{ overflowX:'auto', borderRadius:'6px', overflow:'hidden', boxShadow:'var(--shadow-md)', marginTop:'1.5rem' }}>
              <table className="price-table">
                <thead><tr><th>Marke</th><th>System</th><th>AKL Startpreis</th><th>Händler Schätzung</th></tr></thead>
                <tbody>
                  {brandPrices.map(b => (
                    <tr key={b.slug}>
                      <td><Link href={`/marken/${b.nameSlug}-autoschluessel-nachmachen`} style={{ fontWeight:600, color:'var(--navy-600)' }}>{b.name}</Link></td>
                      <td style={{ fontSize:'0.82rem', color:'var(--gray-400)' }}>{b.system.split('/')[0]}</td>
                      <td className="price-col">Anrufen für Preis</td>
                      <td style={{ color:'var(--gray-400)', fontSize:'0.85rem' }}>+40–60%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding:'3.5rem 0' }}>
          <div className="container" style={{ maxWidth:900 }}>
            <h2>Häufig gestellte Fragen — Autoschlüssel verloren</h2>
            {faqItems.map((f, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">
                  {f.q}
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── COMPREHENSIVE AKL SEO GUIDE ARTICLE ── */}
        <section style={{ padding: '3.5rem 0', background: '#ffffff' }}>
          <div className="container">
            <div className="seo-article-block" style={{ marginTop: 0 }}>
              <h2>Alle Autoschlüssel verloren (All Keys Lost): Wie wir Ihnen direkt ohne Abschleppen helfen</h2>
              <p>
                Der Verlust Ihres einzigen oder letzten Autoschlüssels ist eine stressige Situation. Bei den meisten Autohändlern bedeutet dies, dass Sie Ihr Auto mit einem Abschleppwagen in die Werkstatt bringen lassen müssen, wonach Sie Tage bis Wochen auf neue Schlüssel aus der Fabrik warten. Außerdem werden oft komplette Schlosssätze und ECU-Module zu Kosten von über tausend Euro ausgetauscht. <strong>{SITE_CONFIG.name}</strong> löst dieses Problem komplett mobil und an Ihrem Standort in Stuttgart und Umgebung.
              </p>
              <h3>100% Schadenfreie Türöffnung &amp; Mechanische Dekodierung</h3>
              <p>
                Unsere Techniker öffnen Ihr verschlossenes Auto ohne jegliche Schäden an Lack oder Schließmechanismus mit professionellem Lishi-Werkzeug. Anschließend lesen wir die Stifte im Türschloss aus, um den genauen Schnittcode Ihres Schlüsselbarts zu ermitteln. Mit unserer computergesteuerten CNC-Laserschneidemaschine fräsen wir direkt vor Ort einen perfekt passenden mechanischen Schlüssel.
              </p>
              <h3>Wegfahrsperre anlernen und verlorene Schlüssel löschen</h3>
              <p>
                Über den OBD2-Diagnoseanschluss verbinden wir unsere Diagnosestation mit dem Bordcomputer (ECU, BSI oder Wegfahrsperrenmodul) Ihres Autos. Wir programmieren den neuen Transponderchip und eventuelle Keyless Go Fernbedienungen direkt ein. Entscheidend für Ihre Sicherheit: Wir löschen umgehend alle verlorenen Schlüssel aus dem Speicher des Autos. Sollte jemand Ihren verlorenen Schlüssel finden, kann diese Person Ihr Auto nicht mehr starten oder öffnen.
              </p>
              <h3>Versicherung, Garantie und Abdeckung in der Region</h3>
              <p>
                Unser All Keys Lost Service wird in Stuttgart, Sindelfingen und 50km Umkreis angeboten. Sie erhalten standardmäßig 12 Monate schriftliche Garantie und eine offizielle Rechnung. In vielen Fällen erstattet Ihre Autoversicherung (unter Teil- oder Vollkaskoschutz) den Ersatz verlorener oder gestohlener Autoschlüssel.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom emergency CTA */}
        <section style={{ background:'var(--color-danger)', padding:'3rem 2rem', textAlign:'center' }}>
          <h2 style={{ color:'#fff', marginBottom:'0.5rem' }}>Autoschlüssel verloren? Rufen Sie direkt an</h2>
          <p style={{ color:'rgba(255,255,255,0.8)', marginBottom:'1.5rem' }}>Wir sind 24/7 erreichbar. Durchschnittlich {SITE_CONFIG.responseTime} bei Ihnen vor Ort.</p>
          <div style={{ display:'flex', gap:'0.75rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`tel:${SITE_CONFIG.phoneTel}`} style={{ background:'#fff', color:'var(--color-danger)', padding:'1rem 2.5rem', borderRadius:'4px', fontWeight:700, fontSize:'1.1rem', textDecoration:'none', display:'inline-flex', alignItems:'center' }} id="akl-bottom-phone">
              {SITE_CONFIG.phone}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ background:'#002752', color:'#fff', padding:'1rem 2rem', borderRadius:'4px', fontWeight:700, fontSize:'1rem', textDecoration:'none', display:'inline-flex', alignItems:'center' }} id="akl-bottom-wa">
              WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
