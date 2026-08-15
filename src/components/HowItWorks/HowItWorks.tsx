import Image from 'next/image';
import styles from './HowItWorks.module.css';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';

interface HowItWorksProps {
  cityName?: string;
  variant?: 'default' | 'akl' | 'ignition' | 'lockout';
}

export default function HowItWorks({ cityName, variant = 'default' }: HowItWorksProps = {}) {
  const cityText = cityName ? ` in ${cityName}` : '';
  const cityTextLoc = cityName ? ` vor Ort in ${cityName}` : ' vor Ort';
  
  let steps = [];
  let sectionTitle = `So funktioniert First Class Key${cityText} - in 3 Schritten`;

  if (variant === 'akl') {
    sectionTitle = `Direkthilfe bei verlorenen Schlüsseln${cityText} - in 3 Schritten`;
    steps = [
      {
        imgSrc: '/images/steps/akl_step1_1786439600179.jpg',
        alt: `Schlüssel verloren in ${cityName || 'Stuttgart'}`,
        step: 'Schritt 1',
        title: 'Schlüssel verloren? Keine Panik',
        desc: `Prüfen Sie, ob Ihr Auto sicher steht und kontaktieren Sie uns über WhatsApp oder Telefon. Wir geben Ihnen sofort einen Preis für die Hilfe${cityText}.`,
      },
      {
        imgSrc: '/images/steps/akl_step2_1786439617601.jpg',
        alt: `Monteur direkt vor Ort${cityTextLoc}`,
        step: 'Schritt 2',
        title: `Monteur direkt vor Ort${cityTextLoc}`,
        desc: `Wir kommen mit unserem ausgestatteten Servicefahrzeug zu Ihrem Standort. Sie sparen hohe Abschleppkosten, da Ihr Auto nicht abgeschleppt werden muss.`,
      },
      {
        imgSrc: '/images/steps/akl_step3_1786439623637.jpg',
        alt: 'Neuer Schlüssel programmiert',
        step: 'Schritt 3',
        title: 'Neuer Schlüssel & Alter gelöscht',
        desc: 'Wir öffnen Ihr Auto schadensfrei, fertigen einen neuen Schlüssel an und löschen den verlorenen Schlüssel zu Ihrer Sicherheit direkt aus dem Speicher des Autocomputers.',
      },
    ];
  } else if (variant === 'ignition') {
    sectionTitle = `Zündschloss defekt? So lösen wir das${cityText}`;
    steps = [
      {
        imgSrc: '/images/steps/ignition_step1_1786439640448.jpg',
        alt: `Schlüssel dreht sich nicht im Zündschloss`,
        step: 'Schritt 1',
        title: 'Schlüssel dreht sich nicht mehr?',
        desc: `Steckt der Schlüssel fest oder dreht das Zündschloss nicht mehr? Kontaktieren Sie uns direkt und senden Sie die Daten Ihres Autos.`,
      },
      {
        imgSrc: '/images/steps/ignition_step2_1786439648237.jpg',
        alt: `Zündschloss Reparatur vor Ort`,
        step: 'Schritt 2',
        title: `Reparatur${cityTextLoc}`,
        desc: `Unser Spezialist kommt zu Ihnen und demontiert oder repariert Ihr klemmendes oder blockiertes Zündschloss professionell vor Ort.`,
      },
      {
        imgSrc: '/images/steps/ignition_step3_1786439655474.jpg',
        alt: 'Wieder sicher unterwegs mit repariertem Schloss',
        step: 'Schritt 3',
        title: 'Wieder sicher unterwegs',
        desc: 'Sie erhalten ein perfekt funktionierendes (neues oder überholtes) Zündschloss und bei Bedarf einen neu gefrästen Schlüsselbart. Sie können sofort weiterfahren.',
      },
    ];
  } else if (variant === 'lockout') {
    sectionTitle = `Ausgesperrt? Schnell wieder hinein${cityText}`;
    steps = [
      {
        imgSrc: '/images/steps/lockout_step1_1786439672567.jpg',
        alt: `Schlüssel im Auto vergessen`,
        step: 'Schritt 1',
        title: 'Schlüssel im Auto?',
        desc: `Stehen Sie draußen und der Schlüssel liegt noch im verschlossenen Auto oder Kofferraum? Rufen Sie uns sofort für den 24/7 Notdienst an${cityText}.`,
      },
      {
        imgSrc: '/images/steps/lockout_step2_1786439679636.jpg',
        alt: `Auto schadensfrei öffnen`,
        step: 'Schritt 2',
        title: '100% Schadensfrei öffnen',
        desc: `Unser Monteur ist schnell vor Ort und nutzt spezielles Entschlüsselungswerkzeug, um das Schloss Ihrer Autotür oder Ihres Kofferraums völlig schadensfrei zu manipulieren.`,
      },
      {
        imgSrc: '/images/steps/lockout_step3_1786439686206.jpg',
        alt: 'Auto geöffnet',
        step: 'Schritt 3',
        title: 'Tür offen & Direkt weiterfahren',
        desc: 'Ihr Auto ist wieder offen, ohne Schäden an Lack, Schloss oder Dichtungen. Sie können Ihre Schlüssel wieder nehmen und sofort weiterfahren.',
      },
    ];
  } else {
    // default / autosleutel bijmaken
    steps = [
      {
        imgSrc: '/images/steps/step_1_contact_1786407570135.jpg',
        alt: `Nehmen Sie Kontakt mit First Class Key auf${cityText}`,
        step: 'Schritt 1',
        title: `Fahrzeugdaten durchgeben & Termin vereinbaren`,
        desc: `Geben Sie Ihre Automarke, das Modell, das Baujahr und den Standort${cityText} über WhatsApp oder Telefon durch. Wir sagen Ihnen sofort, was es kostet und wann wir da sind.`,
      },
      {
        imgSrc: '/images/steps/step_2_mechanic_1786407578137.jpg',
        alt: `Monteur kommt direkt zu Ihnen${cityTextLoc}`,
        step: 'Schritt 2',
        title: `Monteur kommt direkt zu Ihnen${cityTextLoc}`,
        desc: `Unser mobiler Monteur kommt an Ihren angegebenen Standort${cityText}. Sie müssen Ihr Auto nicht zu einem Händler oder in eine Werkstatt abschleppen lassen. Wir kommen zu Ihnen.`,
      },
      {
        imgSrc: '/images/steps/step_3_payment_1786407585732.jpg',
        alt: `Direkt ein neuer Schlüssel und sicher bezahlen${cityText}`,
        step: 'Schritt 3',
        title: `Direkt ein neuer Schlüssel & sicher bezahlen`,
        desc: `Wir fräsen und programmieren Ihren neuen Schlüssel sofort. Sie bezahlen erst, wenn alles perfekt funktioniert, sicher${cityTextLoc} über Karte oder bar.`,
      },
    ];
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{sectionTitle}</h2>
      <div className={styles.grid}>
        {steps.map((step, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={step.imgSrc} alt={step.alt} fill />
            </div>
            <div className={styles.stepNum}>{step.step}</div>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.ctaWrapper}>
        <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn btn-primary btn-lg">
          Jetzt anrufen für Soforthilfe
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
          WhatsApp für Soforthilfe
        </a>
      </div>
    </section>
  );
}
