import { permanentRedirect, notFound } from 'next/navigation';
import { BRANDS } from '@/config/brands';
import { LEISTUNGEN } from '@/config/leistungen';

export default async function LegacyCombinatorialRedirect(props: { params: Promise<{ citySlug: string, slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug).toLowerCase();
  
  // 1. Is it a brand? (e.g. bmw-autoschluessel-nachmachen or bmw)
  const brandMatch = BRANDS.find(b => {
    const base = b.nameSlug.toLowerCase();
    return decodedSlug === `${base}-autoschluessel-nachmachen` || decodedSlug === base;
  });

  if (brandMatch) {
    permanentRedirect(`/marken/${brandMatch.nameSlug.toLowerCase()}-autoschluessel-nachmachen`);
  }

  // 2. Is it a service? (e.g. contactslot-auto-vervangen)
  const serviceMatch = LEISTUNGEN.find(s => s.slug.toLowerCase() === decodedSlug);
  
  if (serviceMatch) {
    permanentRedirect(`/leistungen/${serviceMatch.slug}`);
  }

  // If it's neither, return 404
  notFound();
}
