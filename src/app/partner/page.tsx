import { Metadata } from 'next';
import Image from 'next/image';
import B2BContactForm from '@/components/B2BContactForm/B2BContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'B2B Partnerschaften - Autoschlüssel für Flotten & Werkstätten | FC-KEY',
  description: 'Zuverlässiger B2B-Partner für Autoschlüssel-Nachmachen. Speziell für Leasinggesellschaften, Flottenmanagement, Autohäuser und Werkstätten. Express-Service vor Ort.',
};

const BENEFITS = [
  {
    title: "Express-Service",
    description: "Ihre Aufträge werden priorisiert behandelt. Häufig am selben Tag erledigt.",
    icon: "⚡"
  },
  {
    title: "Mobiler Vor-Ort-Service",
    description: "Unsere Techniker kommen zu Ihrem Standort. Sie sparen Zeit und Transportkosten.",
    icon: "🚐"
  },
  {
    title: "Mengenrabatte",
    description: "Profitieren Sie von exklusiven B2B-Konditionen für regelmäßige Aufträge.",
    icon: "💰"
  },
  {
    title: "Einfache Abrechnung",
    description: "Rechnungskauf und Sammelabrechnungen für registrierte Partner möglich.",
    icon: "📄"
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
      <header className={styles.pageHeader}>
        <h1>Ihr B2B-Partner für Autoschlüssel</h1>
        <p>Spezialisierter Service für Flotten, Leasinggesellschaften, Autohäuser und Werkstätten in der Region Stuttgart.</p>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
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

          <div className={styles.heroForm}>
            <B2BContactForm theme="light" />
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
    </main>
  );
}
