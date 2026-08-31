import { SITE_CONFIG } from '@/config/site.config';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: ArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    ...(image && { image }),
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: 'de-DE',
    author: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.domain}/#specialist`,
      name: 'Gungor Demir',
      jobTitle: 'Inhaber & Kfz-Schlüsselspezialist',
      url: `${SITE_CONFIG.domain}/ueber-uns`,
      worksFor: {
        '@type': 'LocalBusiness',
        name: SITE_CONFIG.fullName,
        url: SITE_CONFIG.domain,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.fullName,
      url: SITE_CONFIG.domain,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.domain}/images/logo/fc-key-logo-slotenmaker-stuttgart.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}
