import React from 'react';
import Image from 'next/image';
import FeatureCards from './FeatureCards';
import { SITE_CONFIG } from '@/config/site.config';

export default function GlobalFeatureCards() {
  return (
    <div style={{ backgroundColor: '#f3f4f6', padding: '1px 0' }}>
      <FeatureCards 
        title="Nachmachen. Ersetzen. Programmieren."
        subtitle={<><span style={{ color: 'var(--orange-500)' }}>First Class Key</span> macht alles, wo immer Sie sind.</>}
        features={[
          {
            id: 'feature-1',
            icon: <Image src="/images/icon_van.jpg" alt="Autoschlüssel Verloren? Direkte Hilfe" width={90} height={90} style={{ borderRadius: '12px' }} />,
            title: 'Autoschlüssel Verloren? Direkte Hilfe',
            description: 'Wir kommen direkt zu Ihrem Standort für eine Reparatur oder den Ersatz.',
            linkText: 'Mehr über den mobilen Service',
            linkUrl: '/leistungen'
          },
          {
            id: 'feature-2',
            icon: <Image src="/images/icon_map.jpg" alt="Auto verschlossen? Zerstörungsfrei öffnen" width={90} height={90} style={{ borderRadius: '12px' }} />,
            title: 'Auto verschlossen? Zerstörungsfrei öffnen',
            description: `Innerhalb von 15-30 Minuten vor Ort. Unser lokaler Monteur ist immer in der Nähe.`,
            linkText: 'Einsatzgebiete ansehen',
            linkUrl: '/standorte'
          },
          {
            id: 'feature-3',
            icon: <Image src="/images/icon_price.jpg" alt="Fester Preis im Voraus" width={90} height={90} style={{ borderRadius: '12px' }} />,
            title: 'Fester Preis im Voraus',
            description: 'Keine Überraschungen im Nachhinein. Sie wissen genau, was Sie zahlen, bevor wir beginnen.',
            linkText: 'Unsere Preise ansehen',
            linkUrl: '/preise'
          },
          {
            id: 'feature-4',
            icon: <Image src="/images/icon_car_check.jpg" alt="12 Monate Garantie" width={90} height={90} style={{ borderRadius: '12px' }} />,
            title: '12 Monate Garantie',
            description: 'Wir bieten standardmäßig 12 Monate volle Garantie auf alle unsere Schlüssel.',
            linkText: 'Mehr erfahren',
            linkUrl: '/leistungen'
          },
          {
            id: 'feature-5',
            icon: <Image src="/images/icon_insurance.jpg" alt="24/7 Notdienst" width={90} height={90} style={{ borderRadius: '12px' }} />,
            title: '24/7 Notdienst',
            description: 'Sie sind zu 100% abgesichert. Tag und Nacht erreichbar für alle Notfälle.',
            linkText: 'Direkt anrufen',
            linkUrl: `tel:${SITE_CONFIG.phoneTel}`
          }
        ]}
      />
    </div>
  );
}
