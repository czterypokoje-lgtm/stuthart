import Image from 'next/image';
import styles from './BrandModelsList.module.css';
import { Brand } from '@/config/brands';

interface BrandModelsListProps {
  brand: Brand;
}

const brandImageMap: Record<string, string> = {
  audi: 'audi.jpg',
  citroen: 'citroen.jpg',
  fiat: 'fiat.avif',
  ford: 'ford.jpg',
  honda: 'honda.jpg',
  hyundai: 'hyundai.jpg',
  kia: 'kia.jpg',
  lexus: 'lexus.jpg',
  mazda: 'mazda.jpg',
  mercedes: 'mercedes.avif',
  mini: 'mini.jpg',
  nissan: 'nissan.jpg',
  opel: 'opel.avif',
  peugeot: 'peugeot.jpg',
  renault: 'renault.jpg',
  seat: 'seat.webp',
  skoda: 'skoda.jpg',
  toyota: 'toyota.jpg',
  volkswagen: 'volkswagen.jpg',
  volvo: 'volvo.jpg'
};

export default function BrandModelsList({ brand }: BrandModelsListProps) {
  const models = brand.models || [];
  
  // If there are no specific models for this brand, don't show the section.
  if (models.length === 0) return null;

  const imageName = brandImageMap[brand.nameSlug.toLowerCase()] || 'fallback.jpg';
  const imageSrc = `/images/brands/${imageName}`;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.split}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Neue {brand.name} Schlüssel für die beliebtesten Modelle
            </h2>
            <p className={styles.lead}>
              Das Ersetzen Ihres {brand.name} Schlüssels geht bei First Class Key immer schnell und einfach. Unsere erfahrenen Monteure können {brand.name} Schlüssel fräsen, anlernen und reparieren vor Ort im ganzen Einsatzgebiet.
            </p>
            <h3 className={styles.subtitle}>Wir liefern schnelle und günstige {brand.name} Ersatzschlüssel für alle Modelle, darunter:</h3>
            <ul className={styles.modelList}>
              {models.map((model, idx) => (
                <li key={idx} className={styles.modelItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="3" aria-hidden="true"><circle cx="12" cy="12" r="5" fill="var(--gray-500)" stroke="none" /></svg>
                  {brand.name} {model.name} Schlüssel
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src={imageSrc}
                alt={`${brand.name} Autoschlüssel nachmachen - Ersatzschlüssel und Programmierung vor Ort`}
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
