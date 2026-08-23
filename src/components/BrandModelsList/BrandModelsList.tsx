import Image from 'next/image';
import styles from './BrandModelsList.module.css';
import { Brand } from '@/config/brands';

interface BrandModelsListProps {
  brand: Brand;
}

export default function BrandModelsList({ brand }: BrandModelsListProps) {
  const models = brand.models || [];
  
  // If there are no specific models for this brand, don't show the section.
  if (models.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.split}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Warum unseren {brand.name} Service wählen?
            </h2>
            <p className={styles.lead}>
              First Class Key ist Ihr erfahrener Spezialist für alle <strong>{brand.name}</strong> Modelle. Egal, ob Sie einen älteren {brand.name} mit traditionellem Schlüssel oder ein modernes Modell mit Keyless-Go haben – wir haben die originalen Diagnosegeräte und Rohlinge an Bord.
            </p>
            <h3 className={styles.subtitle}>Wir helfen Ihnen bei diesen {brand.name} Modellen:</h3>
            <ul className={styles.modelList}>
              {models.map((model, idx) => (
                <li key={idx} className={styles.modelItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--orange-500)" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {model.name}
                </li>
              ))}
              <li className={styles.modelItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--orange-500)" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                <em>Und viele mehr...</em>
              </li>
            </ul>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src={`/images/seo/autoschluessel_nachmachen_home.jpg`} // Fallback generic image
                alt={`${brand.name} Autoschlüssel Service`}
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
