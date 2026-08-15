import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/config/services';
import { SITE_CONFIG } from '@/config/site.config';

export const metadata: Metadata = {
  title: {
    absolute: 'Autoschlüssel Blog & Ratgeber | FC-KEY Stuttgart',
  },
  description: 'Tipps, Anleitungen und Praxisfälle rund um Autoschlüssel. Alle Schlüssel verloren, Kosten je Marke, BMW BDC2, SFD-Unlock, Ghost-Wegfahrsperre und vieles mehr.',
  alternates: { canonical: `${SITE_CONFIG.domain}/blog` },
  openGraph: {
    type: 'website',
    url: `${SITE_CONFIG.domain}/blog`,
    title: 'Autoschlüssel Blog & Ratgeber | FC-KEY Stuttgart',
    description: 'Ihr Ratgeber rund um Autoschlüssel: Kosten, Transponder, Smart Key, Sicherheit und Notfallhilfe. Kostenlose Tipps vom Fachmann.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'FC-KEY Autoschlüssel Ratgeber Stuttgart' }],
  },
};

export default function BlogPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%)', padding: '5rem 2rem', textAlign: 'center' }}>
        <span className="section-label">BLOG &amp; RATGEBER</span>
        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Autoschlüssel Tipps &amp; Wissenswertes</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
          Alles, was Sie über Autoschlüssel, Kosten, Marken und Fahrzeugsicherheit wissen müssen — vom zertifizierten Kfz-Schlüsselspezialisten aus Stuttgart.
        </p>
      </section>

      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              id={`blog-${post.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: '1.5rem',
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', background: 'var(--color-primary-bg)', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '999px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {post.readTime} Lesezeit
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  {new Date(post.publishDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0, lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>{post.excerpt}</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginTop: 'auto' }}>Weiterlesen →</span>
            </Link>
          ))}
        </div>

        {/* ── Umfassender Blog-SEO-Artikel ── */}
        <div className="seo-article-block" style={{ marginTop: '3.5rem', marginBottom: '2.5rem', background: '#f8fafc', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
          <h2>Expertenwissen &amp; Praxistipps zu Autoschlüsseln, Transpondern und Fahrzeugsicherheit</h2>
          <p>
            In unserem offiziellen Ratgeber veröffentlichen unsere zertifizierten Kfz-Schlüsselspezialisten und Elektronikexperten regelmäßig tiefgehende technische Anleitungen, Schritt-für-Schritt-Pläne und Handlungsempfehlungen rund um Fahrzeugsicherheit, Wegfahrsperren, Schlüsselbatterien, Notfallverfahren und OBD-Programmierung. Moderne Personenkraftwagen und Nutzfahrzeuge setzen zunehmend auf hochentwickelte verschlüsselte Transponderchips (wie Megamos Crypto, Hitag Pro und Texas Crypto) sowie komplexe Keyless-Entry- und Keyless-Go-Systeme.
          </p>
          <h3>Warum professionelle Codierung und OEM-Geräte unerlässlich sind</h3>
          <p>
            Viele online angebotene Schlüssel und Gehäuse von inoffiziellen Marktplätzen verfügen nicht über den richtigen Transponderchip, enthalten minderwertige Platinen oder verwenden inkompatible Frequenzmodule (315 MHz statt des europäischen Standards 433 MHz oder 868 MHz). Ein falscher Schlüssel kann zur dauerhaften Blockierung Ihres CAS-, FEM- oder BSI-Moduls führen. Unsere Artikel erklären Ihnen genau, wie Sie frühe Anzeichen von Schlüsselverschleiß und Batterieproblemen erkennen und warum eine autorisierte OBD2-Programmierung unerlässlich ist, um Ihre Herstellergarantie zu erhalten.
          </p>
          <h3>Direkt Hilfe benötigt bei einem defekten oder verlorenen Autoschlüssel?</h3>
          <p>
            Benötigen Sie nach der Lektüre unserer Artikel sofort einen Rat oder einen neuen Schlüssel vor Ort? Unsere mobilen Servicefahrzeuge sind 24 Stunden am Tag, 7 Tage die Woche in Stuttgart, Sindelfingen, Böblingen und dem gesamten 50-km-Umkreis im Einsatz. Wir garantieren eine 100% schadensfreie Öffnung und programmieren vor Ort einen neuen Schlüssel mit 12 Monaten schriftlicher Garantie.
          </p>
        </div>
      </div>
    </main>
  );
}
