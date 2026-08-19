import { Metadata } from 'next';
import Image from 'next/image';
import B2BContactForm from '@/components/B2BContactForm/B2BContactForm';
import FaqSection from '@/components/FaqSection/FaqSection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'B2B Partnerschaften - Autoschlüssel für Flotten & Werkstätten | FC-KEY',
  description: 'Zuverlässiger B2B-Partner für Autoschlüssel-Nachmachen. Speziell für Leasinggesellschaften, Flottenmanagement, Autohäuser und Werkstätten. Express-Service vor Ort.',
};

const B2B_FAQS = [
  {
    question: "Welche Vorteile bietet FC-KEY für Autohäuser?",
    answer: "Wir bieten unseren mobilen Express-Vor-Ort-Service, damit Ihre Gebrauchtwagen mit fehlenden Schlüsseln schnell wieder komplett und verkaufsbereit sind. Mit unseren B2B-Konditionen profitieren Sie zudem von attraktiven Mengenrabatten und können Ihren eigenen Kunden einen echten Mehrwert bieten, ohne in teure Programmiergeräte investieren zu müssen."
  },
  {
    question: "Bieten Sie den Service direkt bei uns auf dem Betriebsgelände an?",
    answer: "Ja, absolut. Unser Markenzeichen ist der mobile Service. Wir kommen mit komplett ausgestatteten Servicefahrzeugen zu Ihrem Autohaus, Ihrer Werkstatt oder auf den Parkplatz Ihrer Flotte. Sie sparen sich das mühsame Abschleppen der Fahrzeuge."
  },
  {
    question: "Wie funktioniert die Abrechnung für Geschäftskunden?",
    answer: "Nach erfolgreicher Registrierung und Bonitätsprüfung als offizieller B2B-Partner können wir Ihre Aufträge bequem per Rechnung oder monatlicher Sammelrechnung abwickeln. Dies reduziert Ihren administrativen Aufwand erheblich."
  },
  {
    question: "Welche Automarken und Systeme können Sie bearbeiten?",
    answer: "Wir decken über 95% aller gängigen Automarken ab. Unsere Diagnosetechnik ermöglicht es uns, sowohl klassische Transponderschlüssel als auch modernste Smart Keys (Keyless Go) zu programmieren und anzulernen, selbst wenn alle Originalschlüssel verloren gingen (AKL - All Keys Lost)."
  }
];

const BENEFITS = [
  {
    title: "Express-Service",
    description: "Ihre Aufträge werden priorisiert behandelt. Häufig am selben Tag erledigt.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    title: "Mobiler Vor-Ort-Service",
    description: "Unsere Techniker kommen zu Ihrem Standort. Sie sparen Zeit und Transportkosten.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    )
  },
  {
    title: "Mengenrabatte",
    description: "Profitieren Sie von exklusiven B2B-Konditionen für regelmäßige Aufträge.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    title: "Einfache Abrechnung",
    description: "Rechnungskauf und Sammelabrechnungen für registrierte Partner möglich.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  }
];

const TARGETS = [
  {
    id: "flotte",
    title: "Flotten & Leasing",
    description: "Reduzieren Sie Ausfallzeiten Ihrer Fahrzeuge. Wir ersetzen verlorene Schlüssel direkt am Standort, damit Ihre Flotte einsatzbereit bleibt."
  },
  {
    id: "werkstatt",
    title: "Kfz-Werkstätten",
    description: "Erweitern Sie Ihr Serviceangebot ohne Investition in teure Programmiergeräte. Lagern Sie komplexe Schlüssel- und Wegfahrsperren-Arbeiten an uns aus."
  },
  {
    id: "autohaus",
    title: "Autohäuser & Fahrzeughandel",
    description: "Gebrauchtwagen mit nur einem Schlüssel? Steigern Sie den Wiederverkaufswert durch schnelle Anfertigung eines Zweitschlüssels vor der Übergabe."
  }
];

export default function PartnerPage() {
  return (
    <main className={styles.main}>
      
      <section className={styles.heroWrapper}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/ueber-uns-servicebusse.jpg"
            alt="First Class Key Servicebusse"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContentWrapper}>
          <header className={styles.pageHeader}>
            <h1>Ihr B2B-Partner für Autoschlüssel</h1>
            <p>Spezialisierter Service für Flotten, Leasinggesellschaften, Autohäuser und Werkstätten in der Region Stuttgart.</p>
          </header>

          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.trustCard}>
                <h2>Vertrauen & Professionalität</h2>
                <p>
                  Als Unternehmen im Kfz-Bereich kennen Sie das Problem: Verlorene oder defekte Autoschlüssel 
                  führen zu Verzögerungen, unzufriedenen Kunden und finanziellen Einbußen. 
                </p>
                <p>
                  <strong>First Class Key</strong> ist Ihr professioneller Partner, wenn es um das schnelle, mobile 
                  Nachmachen, Reparieren und Programmieren von Autoschlüsseln geht. Wir arbeiten diskret, 
                  zuverlässig und direkt bei Ihnen vor Ort.
                </p>
                <ul className={styles.benefitsList}>
                  {BENEFITS.map((benefit, idx) => (
                    <li key={idx} className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>{benefit.icon}</span>
                      <div>
                        <strong>{benefit.title}</strong>
                        <p>{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.heroForm}>
              <B2BContactForm theme="light" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.targetSection}>
        <div className={styles.targetContainer}>
          <h2 className={styles.targetHeading}>Lösungen für Ihre Branche</h2>
          <div className={styles.targetGrid}>
            {TARGETS.map(target => (
              <div key={target.id} className={styles.targetCard}>
                <h3>{target.title}</h3>
                <p>{target.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.faqWrapper}>
        <FaqSection customFaqs={B2B_FAQS} />
      </div>

    </main>
  );
}
