import React from 'react';
import styles from './FaqSection.module.css';
import { SITE_CONFIG } from '@/config/site.config';

const defaultFaqs = [
  {
    question: 'Was soll ich tun, wenn ich meinen Autoschlüssel verloren habe?',
    answer: 'Wenn Sie Ihren Autoschlüssel verloren haben, prüfen Sie zuerst, ob Sie noch einen Ersatzschlüssel haben. Ist dies nicht der Fall, kontaktieren Sie FC-KEY direkt unter ' + SITE_CONFIG.phone + '. Wir kommen mit unseren mobilen Servicefahrzeugen innerhalb von 30 bis 60 Minuten zu Ihnen, öffnen das Auto zu 100% schadensfrei und programmieren vor Ort direkt einen neuen Schlüssel. Die verlorenen Autoschlüssel werden zudem direkt aus dem Speicher des Bordcomputers (ECU) gelöscht, um Diebstahl zu verhindern.'
  },
  {
    question: 'Wo kann ich in der Region Stuttgart schnell einen Autoschlüssel nachmachen lassen?',
    answer: 'Bei FC-KEY können Sie schnell einen Autoschlüssel nachmachen lassen. Unsere komplett ausgestatteten mobilen Servicefahrzeuge sind täglich im Raum Stuttgart, Sindelfingen, Böblingen, Ludwigsburg und Umgebung unterwegs. Anstatt Ihr Fahrzeug zu einem Händler abzuschleppen, kommen unsere Spezialisten zu Ihnen nach Hause, zur Arbeit oder an den Pannenort und fertigen vor Ort innerhalb einer Stunde einen neuen Ersatzschlüssel oder Smart Key an.'
  },
  {
    question: 'Was ist der beste Service für den Austausch von Autoschlüsseln nach Verlust?',
    answer: 'Der beste Service für den Austausch Ihres Autoschlüssels nach Verlust ist ein mobiler Autoschlüsselspezialist wie FC-KEY. Wir bieten schnelle Pannenhilfe vor Ort, programmieren Transponderschlüssel auf Händlerniveau und sind bis zu 60% günstiger als der offizielle Markenhändler. Außerdem müssen Sie Ihr Auto nicht abschleppen lassen; unsere zertifizierten Monteure lösen das Problem direkt an Ihrem Pannenort.'
  },
  {
    question: 'Autoschlüssel verloren, was kostet ein neuer Schlüssel?',
    answer: `Wenn Sie Ihren Autoschlüssel verloren haben, liegen die Kosten für einen neuen Schlüssel bei FC-KEY durchschnittlich zwischen €${SITE_CONFIG.prices.unlock} und €${SITE_CONFIG.prices.smartKey}, inklusive Fräsen, Anlernen und Programmieren vor Ort. Dies ist deutlich günstiger als beim Händler, wo die Preise für einen vergleichbaren Schlüssel schnell zwischen €300 und €900 liegen (exklusive Abschleppkosten). Bei uns erhalten Sie immer vorab ein Festpreisangebot ohne versteckte Kosten.`
  },
  {
    question: 'Welcher Schlüsseldienst in der Region kann einen Autoschlüssel ohne Originalschlüssel anfertigen?',
    answer: 'FC-KEY kann als spezialisierter Autoschlüsseldienst in der Region Stuttgart einen neuen Autoschlüssel anfertigen, auch wenn Sie alle Originalschlüssel verloren haben. Mit unseren fortschrittlichen Autel- und AVDI-Diagnosegeräten lesen wir die einzigartigen mechanischen und elektronischen Schlüsselcodes direkt aus dem Computer (ECU/Wegfahrsperre) Ihres Fahrzeugs über den OBD2-Anschluss aus und fräsen vor Ort einen neuen Schlüsselbart.'
  },
  {
    question: 'Autoschlüssel verloren, muss ich zum Händler oder kann ein Schlüsseldienst helfen?',
    answer: 'Bei einem verlorenen Autoschlüssel sollten Sie sich am besten an einen mobilen Schlüsseldienst wie FC-KEY wenden, anstatt zum Händler zu gehen. Der Händler verlangt oft, dass Ihr Auto in die Werkstatt geschleppt wird, und hat häufig Wartezeiten von mehreren Tagen oder Wochen. FC-KEY kommt noch am selben Tag zu Ihnen, öffnet das Auto schadensfrei und programmiert sofort einen neuen funktionierenden Transponderschlüssel.'
  }
];

interface FaqSectionProps {
  customFaqs?: { question: string; answer: string }[];
  cityName?: string;
  brandName?: string;
}

export default function FaqSection({ customFaqs, cityName, brandName }: FaqSectionProps = {}) {
  const displayFaqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;
  // ── FAQPage schema — enables Google FAQ rich results ──
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.fc-key.nl/#faqpage',
    mainEntity: displayFaqs.map((f, i) => ({
      '@type': 'Question',
      '@id': `https://www.fc-key.nl/#faq-${i}`,
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  // ── Speakable schema — marks answers for voice search + AI Overview citations ──
  // Google, Perplexity, and AI assistants read speakable content aloud / cite it verbatim
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.fc-key.nl/#webpage',
    speakable: {
      '@type': 'SpeakableSpecification',
      // CSS selectors pointing to the FAQ question+answer pairs
      cssSelector: displayFaqs.map((_, i) => `[data-speakable="faq-${i}"]`),
    },
  };

  return (
    <section className={styles.faqSection} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <div className="container">
        <div className={styles.faqHeader}>
          <p className="section-eyebrow">HÄUFIG GESTELLTE FRAGEN</p>
          <h2 className="section-title">
            {cityName ? `Häufig gestellte Fragen in ${cityName}` : brandName ? `Häufig gestellte Fragen über ${brandName} Autoschlüssel` : 'Alles über Autoschlüssel & Schlösser'}
          </h2>
          <p className="section-lead">
            {cityName ? `Lesen Sie hier die am häufigsten gestellten Fragen zu unserem Service in ${cityName}.` : brandName ? `Haben Sie Fragen zum Nachmachen oder Anlernen eines ${brandName} Schlüssels? Lesen Sie hier die am häufigsten gestellten Fragen.` : 'Haben Sie Fragen zu Kosten, Lieferzeiten oder Reparaturen? Sehen Sie sich unsere häufigsten Fragen an.'}
          </p>
        </div>

        <div className={styles.faqList}>
          {displayFaqs.map((faq, index) => (
            <details
              key={index}
              className={styles.faqItem}
              name="home-faq"
              data-speakable={`faq-${index}`}
            >
              <summary className={styles.faqQuestion}>
                {faq.question}
                <span className={styles.faqIcon}></span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
