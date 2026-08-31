import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';

export const metadata: Metadata = {
  title: {
    absolute: 'Autoschlüssel Wissensdatenbank | Transpondertechnologie & Programmierung | FC-KEY',
  },
  description:
    'Die komplette Wissensdatenbank über Autoschlüssel-Programmierung, Transponderchips (Hitag, Megamos), OBD2-Diagnose, Eeprom-Bench-Flashing und All-Keys-Lost-Verfahren.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/wissensdatenbank`,
  },
  openGraph: {
    url: `${SITE_CONFIG.domain}/wissensdatenbank`,
    type: 'website',
    title: 'Autoschlüssel Wissensdatenbank & Technischer Leitfaden | FC-KEY',
    description: 'Alles über das Anlernen, Programmieren und Fräsen von Autoschlüsseln und Transponderchips.',
    images: [{ url: `${SITE_CONFIG.domain}/og-image.png`, width: 1200, height: 630, alt: 'Autoschlüssel Wissensdatenbank — Transpondertechnologie & Programmierung | FC-KEY' }],
  },
};

export default function KennisbankPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Umfangreiche Wissensdatenbank: Autoschlüssel-Programmierung, Transpondertechnologie & Mobiler Schlüsseldienst',
    description: 'Technischer Leitfaden für Transponder, OBD2-Programmierprotokolle, CNC-Laserfräsen und Autosicherheit.',
    author: { '@type': 'Organization', name: SITE_CONFIG.fullName },
    publisher: { '@type': 'Organization', name: SITE_CONFIG.fullName },
    mainEntityOfPage: `${SITE_CONFIG.domain}/wissensdatenbank`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
      { '@type': 'ListItem', position: 2, name: 'Wissensdatenbank', item: `${SITE_CONFIG.domain}/wissensdatenbank` },
    ],
  };

  return (
    <>
      <script id="kennisbank-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script id="kennisbank-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main id="main-content">
        {/* Hero Section */}
        <section style={{ background: 'linear-gradient(160deg, var(--navy-900), var(--navy-800))', padding: '4.5rem 2rem 4rem', color: '#fff' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <nav style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link> / <span style={{ color: '#fff', fontWeight: 600 }}>Wissensdatenbank</span>
            </nav>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Umfangreiche Wissensdatenbank: Autoschlüssel-Programmierung &amp; Transpondertechnologie
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: 820 }}>
              Willkommen in unserer offiziellen technischen Enzyklopädie. Hier lesen Sie alles über Autosicherheitssysteme, kryptografische Wegfahrsperren, Eeprom/Bench-Programmierung und unsere mobile Arbeitsweise vor Ort.
            </p>
          </div>
        </section>

        {/* Pillar Content Area */}
        <section style={{ padding: '5rem 0', background: '#ffffff' }}>
          <div className="container" style={{ maxWidth: 960 }}>
            <article style={{ lineHeight: 1.85, color: '#334155', fontSize: '1.05rem' }}>
              
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '2rem', marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: '1.35rem', color: '#0f172a', marginTop: 0, marginBottom: '1rem' }}>Inhaltsverzeichnis</h2>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem', listStyle: 'none', padding: 0, margin: 0 }}>
                  <li><a href="#hoofdstuk-1" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>1. Mobiler Schlüsseldienst in Stuttgart &amp; Umgebung</a></li>
                  <li><a href="#hoofdstuk-2" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>2. Transponderchips &amp; Wegfahrsperre</a></li>
                  <li><a href="#hoofdstuk-3" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>3. Händler vs. FC-KEY Schlüsseldienst</a></li>
                  <li><a href="#hoofdstuk-4" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>4. Verfahren bei komplettem Schlüsselverlust</a></li>
                  <li><a href="#hoofdstuk-5" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>5. Autoschlüssel-Reparatur &amp; Batteriewechsel</a></li>
                  <li><a href="#hoofdstuk-6" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>6. Schadensersatz &amp; Autoversicherung</a></li>
                  <li><a href="#hoofdstuk-7" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>7. OBD2-Diagnose &amp; Eeprom Flashing</a></li>
                  <li><a href="#hoofdstuk-8" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>8. CNC-Fräsen von Notschlüsseln</a></li>
                  <li><a href="#hoofdstuk-9" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>9. Fehlercodes der Wegfahrsperre (DTCs)</a></li>
                  <li><a href="#hoofdstuk-10" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>10. Keyless Entry &amp; Relay-Attacken verhindern</a></li>
                  <li><a href="#hoofdstuk-11" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>11. Nutzfahrzeuge &amp; Flottenservice</a></li>
                  <li><a href="#hoofdstuk-12" style={{ color: 'var(--navy-900)', textDecoration: 'none', fontWeight: 600 }}>12. Qualitätsgarantie &amp; Recycling</a></li>
                </ul>
              </div>

              <section id="hoofdstuk-1" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  1. Mobiler Autoschlüssel-Service in Stuttgart, Sindelfingen und 50km Umkreis
                </h2>
                <p>
                  FC-KEY ist der spezialisierte mobile Autosicherheitsdienst für das sofortige Nachmachen, Programmieren und Reparieren von Autoschlüsseln vor Ort. Wir bedienen ein kompaktes, blitzschnelles Arbeitsgebiet in Stuttgart, Sindelfingen und 50km Umkreis (Böblingen, Leonberg, Ludwigsburg, Esslingen, Filderstadt, Leinfelden-Echterdingen). Darüber hinaus sind unsere zertifizierten Techniker täglich in Pforzheim, Heilbronn, Reutlingen, Tübingen, Göppingen und Waiblingen aktiv. Da wir ausschließlich mit voll ausgestatteten mobilen Servicefahrzeugen arbeiten, müssen Sie Ihr Fahrzeug nie zu einem teuren Vertragshändler abschleppen lassen.
                </p>
                <p>
                  Unsere mobilen Werkstätten sind mit hochmodernen computergesteuerten Schlüsselfräsmaschinen und offiziellen OEM-Diagnosegeräten ausgestattet. Dadurch können wir innerhalb von 15 bis 30 Minuten nach Ihrem Anruf an Ihrem Standort sein, egal ob Sie zu Hause in der Einfahrt, an Ihrem Arbeitsplatz oder auf einem öffentlichen Parkplatz an der Autobahn gestrandet sind. Wir garantieren eine 100% schadensfreie Arbeitsweise und liefern sofort einen getesteten Schlüssel mit voller Garantie.
                </p>
              </section>

              <section id="hoofdstuk-2" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  2. Transponderchips, Smart Keys &amp; Kryptografische Wegfahrsperre
                </h2>
                <p>
                  Moderne Pkw und Nutzfahrzeuge sind seit Ende der 90er Jahre mit einer elektronischen Wegfahrsperre (Immobilizer) ausgestattet. Im Gehäuse Ihres Autoschlüssels befindet sich ein Transponderchip oder ein fortschrittliches Smart-Key-Modul. Wenn Sie den Schlüssel in das Zündschloss stecken oder den Startknopf drücken, sendet die Ringantenne um das Schloss ein elektromagnetisches Signal aus. Der Chip antwortet mit einem einzigartigen, verschlüsselten digitalen Code (wie Hitag2, Hitag AES, Megamos Crypto ID48 oder Texas Crypto 4D). Nur wenn das Motorsteuergerät (ECU) und das Wegfahrsperrenmodul diesen Code erkennen, werden Kraftstoffpumpe und Zündung freigegeben.
                </p>
                <p>
                  FC-KEY verfügt über fortschrittliche OBD2-Programmiersoftware, um direkt mit komplexen Sicherheitsmodulen zu kommunizieren, einschließlich BMW CAS/FEM/BDC-Systemen, Volkswagen/Audi MQB-Plattformen, Renault Handsfree-Karten und Mercedes-Benz FBS3/FBS4-Zündschlössern (EZS/EIS). Wir lesen die einzigartigen Schlüsseldaten sicher aus und schreiben neue Schlüssel direkt in den Speicher Ihres Fahrzeugs.
                </p>
              </section>

              <section id="hoofdstuk-3" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  3. Kostenvorteil: Händler versus FC-KEY Schlüsseldienst
                </h2>
                <p>
                  Wenn Sie einen neuen Autoschlüssel über einen offiziellen Vertragshändler anfordern, werden Sie oft mit langen Wartezeiten von zwei bis drei Wochen konfrontiert, da der Schlüssel anhand der Fahrgestellnummer (VIN) aus einem zentralen Lager bestellt werden muss. Darüber hinaus liegen die Gesamtkosten bei Vertragshändlern durchschnittlich zwischen 350,- € und 650,- €, noch exklusive eventueller Abschleppkosten, wenn Sie keinen funktionierenden Schlüssel mehr haben.
                </p>
                <p>
                  Bei FC-KEY sparen Sie bis zu 50% der Gesamtkosten. Wir haben Schlüssel für mehr als 59 Automarken standardmäßig in unseren Servicefahrzeugen auf Lager. Wir fräsen den Schlüsselbart vor Ort passgenau und lernen Transponder und Fernbedienung sofort an. Sie zahlen einen fairen, im Voraus festgelegten All-Inclusive-Tarif ohne versteckte Kosten, inklusive Montage, Programmierung und 12 Monaten schriftlicher Garantie.
                </p>
              </section>

              <section id="hoofdstuk-4" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  4. Verfahren bei komplettem Schlüsselverlust (All-Keys-Lost)
                </h2>
                <p>
                  Haben Sie alle Ihre Autoschlüssel verloren oder wurden sie gestohlen? Dann ist eine reguläre Kopie nicht mehr möglich und unser All-Keys-Lost-Notfallverfahren tritt in Kraft. Unser Spezialist öffnet Ihre Autotür zunächst 100% schadensfrei mit Hilfe von Spezialwerkzeugen wie Lishi 2-in-1 Lockpicks. Mit diesen Präzisionsinstrumenten können wir die mechanischen Rillen und Tiefen Ihres Schließzylinders exakt auslesen, ohne Kratzer oder Schäden an der Tür zu hinterlassen.
                </p>
                <p>
                  Anschließend geben wir diesen mechanischen Schlosscode in unsere automatische CNC-Schlüsselmaschine ein, die innerhalb von Sekunden einen brandneuen Schlüsselbart fräst. Danach schließen wir unser Diagnosegerät an den OBD2-Anschluss an, um die alten, verlorenen Schlüssel endgültig aus dem Speicher der Wegfahrsperre zu löschen. So können Sie sicher sein, dass ein eventueller Finder oder Dieb Ihr Auto nicht mehr starten kann.
                </p>
              </section>

              <section id="hoofdstuk-5" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  5. Autoschlüssel-Reparatur &amp; Batteriewechsel vor Ort
                </h2>
                <p>
                  Nicht in allen Fällen ist ein komplett neuer Schlüssel erforderlich. Funktioniert Ihre Fernbedienung schlecht, sind die Druckknöpfe abgenutzt, ist das Schlüsselgehäuse gerissen oder klappt der Schlüsselbart nicht mehr aus? Unsere Mechaniker führen auch fachmännische Reparaturen durch. Wir löten lose Mikroschalter auf der Platine wieder fest, ersetzen beschädigte Gehäuse durch stabile OEM-Qualitäts-Schlüsselgehäuse und erneuern defekte Transponderspulen.
                </p>
                <p>
                  Darüber hinaus ersetzen wir alle Arten von Schlüsselbatterien, von regulären CR2032- und CR2025-Lithium-Knopfzellen bis hin zu wiederaufladbaren VL2020-Akkus, die auf der Platine von unter anderem BMW- und Ford-Schlüsseln festgelötet sind. Nach der Reparatur testen wir die Sendefrequenz (433 MHz oder 868 MHz) mit einem professionellen Frequenzmesser.
                </p>
              </section>

              <section id="hoofdstuk-6" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  6. Schadensersatz &amp; Autoversicherung
                </h2>
                <p>
                  In vielen Situationen wird der Ersatz oder das Nachmachen eines Autoschlüssels nach Diebstahl oder Verlust (teilweise) von Ihrer Autoversicherung erstattet, abhängig von Ihren Versicherungsbedingungen (Teilkasko oder Vollkasko). Versicherer stellen bei Verlust oder Diebstahl fast immer die strikte Anforderung, dass die verlorenen Schlüssel elektronisch abgemeldet werden und dass Sie eine offizielle Rechnung vorlegen können, auf der angegeben ist, dass die Wegfahrsperre neu codiert wurde.
                </p>
                <p>
                  FC-KEY ist ein anerkannter und voll zertifizierter Schlüsseldienst. Nach Abschluss unserer Arbeiten erhalten Sie sofort eine detaillierte, offizielle Rechnung mit ausgewiesener MwSt. und einen digitalen Bericht über die Neuprogrammierung. Diese Dokumente können Sie direkt bei Ihrer Versicherungsgesellschaft für eine schnelle und reibungslose Schadensabwicklung einreichen.
                </p>
              </section>

              <section id="hoofdstuk-7" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  7. OBD2-Diagnose, Eeprom-Programmierung &amp; Bench Flash Techniken
                </h2>
                <p>
                  Für die Programmierung von Autoschlüsseln verwenden wir die modernsten Diagnose- und Programmierwerkzeuge auf dem Markt, wie Autel MaxiIM IM608 Pro II, Xhorse VVDI Key Tool Plus, Abrites AVDI und OBDStar X300 DP Plus. In 90% der Fälle können wir neue Schlüssel direkt über den Standard-OBD2-Diagnoseanschluss unter dem Armaturenbrett anlernen. Hierbei kommunizieren wir auf Werksebene mit dem Motorsteuergerät (ECU), Body Control Module (BCM) oder Kombiinstrument, um die Sicherheitscodes und PIN-Codes sicher auszulesen.
                </p>
                <p>
                  Bei bestimmten Fahrzeugen, bei denen der Hersteller den OBD2-Anschluss mit einem Security Gateway (SGW) gesichert hat oder bei denen eine komplexe All-Keys-Lost-Situation vorliegt (wie bei älteren Volvo CEM-Modulen oder spezifischen BMW CAS4+ Systemen), wenden wir spezielle Eeprom- oder Bench-Programmierung an. Hierbei lesen wir den Speicherchip des Wegfahrsperrenmoduls direkt in unserer mobilen Werkstatt aus, ohne dass Steuergeräte beschädigt werden.
                </p>
              </section>

              <section id="hoofdstuk-8" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  8. Fräsen und CNC-Fräsen von Notschlüsseln (Laser Cut &amp; High Security Schlüsselbärte)
                </h2>
                <p>
                  Ein Autoschlüssel besteht nicht nur aus Elektronik; der mechanische Schlüsselbart bleibt entscheidend, um das Zündschloss zu drehen oder bei einer leeren Autobatterie das Türschloss manuell zu öffnen. Unsere mobilen Servicefahrzeuge sind mit computergesteuerten CNC-Schlüssel- und Lasermaschinen von höchster Qualität (wie der Xhorse Condor XC-Mini und Dolphin II) ausgestattet.
                </p>
                <p>
                  Dank unserer digitalen Datenbank mit Werkscodes können wir Schlüsselbärte mit mikroskopischer Präzision auf Basis der Schlüsselnummer oder durch Dekodierung Ihres bestehenden Schließzylinders fräsen. Ob es sich um einen konventionellen Bahnen-Schlüssel, einen Innenbahnschlüssel (Laser Cut Key) oder ein High Security HU66/HU162T Profil für die VAG-Gruppe handelt: das mechanische Fräsen ist immer inbegriffen und passt hundertprozentig reibungslos in Ihre Schlösser.
                </p>
              </section>

              <section id="hoofdstuk-9" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  9. Häufige Fehlercodes in der Wegfahrsperre (Immobiliser DTCs &amp; Lösungen)
                </h2>
                <p>
                  Wenn Ihr Auto nicht startet und das Schlüsselsymbol auf Ihrem Armaturenbrett schnell blinkt oder dauerhaft leuchtet, deutet dies auf eine Störung in der Wegfahrsperre hin. Häufige Fehlercodes, die wir täglich vor Ort diagnostizieren und beheben, sind unter anderem P1570 (Engine Control Module Disabled durch Immobilizer bei Volkswagen/Audi), B1000/B1001 (Elektronische Lenkradverriegelung ELV/ESL Störung bei Mercedes-Benz) und P1610/P1612 (Lock Mode oder NATS Kommunikationsfehler bei Nissan und Renault).
                </p>
                <p>
                  Unsere Techniker führen zunächst eine vollständige Systemdiagnose durch, um festzustellen, ob das Problem im Transponderchip Ihres Schlüssels, in der Lesespule (Ringantenne) um das Zündschloss oder in der Synchronisation zwischen Schlüssel und Motorsteuergerät liegt. Wir setzen die Wegfahrsperre zurück und synchronisieren die Rolling Codes direkt vor Ort.
                </p>
              </section>

              <section id="hoofdstuk-10" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  10. Keyless Entry &amp; Keyless Go Sicherheit: Relay-Attacken verhindern
                </h2>
                <p>
                  Autos mit einem Keyless Entry oder Keyless Go System bieten maximalen Komfort, da Sie den Schlüssel in Ihrer Hosentasche oder Tasche behalten können, um die Türen zu entriegeln und den Motor zu starten. Leider sind diese Systeme ohne die richtigen Maßnahmen anfälliger für sogenannte &apos;Relay Attacks&apos;, bei denen Autodiebe das Signal Ihres Schlüssels im Haus abfangen und zu Ihrem Auto in der Einfahrt verstärken.
                </p>
                <p>
                  Wenn wir einen neuen Smart Key für Ihr Fahrzeug anlernen, liefern wir ausschließlich Schlüssel mit moderner Bewegungssensor-Technologie (Sleep Mode Chip), die nach 60 Sekunden Stillstand automatisch aufhört, Signale zu senden. Darüber hinaus beraten wir unsere Kunden und können optional zusätzliche elektronische Sicherungen oder OBD-Locker installieren, um unbefugtes Auslesen zu blockieren.
                </p>
              </section>

              <section id="hoofdstuk-11" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  11. Nutzfahrzeug, Transporter &amp; Flotten-Schlüsselservice vor Ort
                </h2>
                <p>
                  Für Unternehmer, Kuriere und Fuhrparkmanager ist der Stillstand eines Nutzfahrzeugs fatal für den täglichen Geschäftsbetrieb. Haben Sie den Schlüssel für Ihren Mercedes-Benz Sprinter, Volkswagen Transporter, Ford Transit, Renault Master, Opel Vivaro oder Peugeot Boxer verloren? Wir verstehen, dass Sie keine Wochen auf einen Vertragshändler warten können.
                </p>
                <p>
                  FC-KEY bietet einen speziellen Business-Priority-Service. Wir kommen direkt zu Ihrer Baustelle, Ihrem Vertriebszentrum oder Ihrem Bürogebäude, um zusätzliche Ersatzschlüssel nachzumachen oder einen verlorenen Schlüssel zu ersetzen. Wir liefern robuste Schlüssel, die intensivem kommerziellem Gebrauch standhalten, und können auf Wunsch mehrere Fahrzeuge innerhalb eines Termins mit Ersatzschlüsseln ausstatten.
                </p>
              </section>

              <section id="hoofdstuk-12" style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '1rem' }}>
                  12. Qualitätsgarantie, CE-zertifizierte Transponder &amp; Umweltbewusstsein
                </h2>
                <p>
                  Wir machen niemals Kompromisse bei der Qualität. All unsere Schlüsselgehäuse, Transponderchips, Fernbedienungsplatinen und Knopfzellenbatterien entsprechen streng den europäischen CE- und RoHS-Richtlinien und sind qualitativ gleichwertig oder besser als die Originalteile des Herstellers. Sie erhalten standardmäßig 12 Monate volle schriftliche Garantie sowohl auf den mechanischen Schlüsselbart als auch auf die elektronische Funktion von Chip und Sender.
                </p>
                <p>
                  Darüber hinaus arbeiten wir umweltbewusst: Alte und defekte Schlüssel, die wir austauschen, werden nicht weggeworfen, sondern fachgerecht recycelt, wobei hochwertige Edelmetalle und Lithiumbatterien verantwortungsvoll über zertifizierte Recyclingpartner verarbeitet werden.
                </p>
              </section>

              {/* Call to action card inside guide */}
              <div style={{ background: 'var(--navy-900)', color: '#fff', padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', marginTop: '4rem' }}>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem' }}>Direkte Hilfe benötigt oder Fragen zu Ihrem Autoschlüssel?</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 640, margin: '0 auto 2rem', lineHeight: 1.6 }}>
                  Unsere Mechaniker stehen Tag und Nacht bereit, um Ihnen vor Ort in Stuttgart, Sindelfingen und 50km Umkreis beim Nachmachen, Anlernen oder Programmieren Ihres Autoschlüssels zu helfen.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn btn-primary btn-lg">
                    📞 Jetzt anrufen: {SITE_CONFIG.phone}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-btn" style={{ background: '#002752', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
                    💬 WhatsApp Direkt
                  </a>
                </div>
              </div>

            </article>
          </div>
        </section>
      </main>
    </>
  );
}
