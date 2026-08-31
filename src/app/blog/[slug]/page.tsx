import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { BLOG_POSTS } from '@/config/services';
import { SITE_CONFIG } from '@/config/site.config';
import { BLOG_CONTENT } from '@/config/blog_content';

// ── Individuelle Google-Bewertungen für Review-Schema (Stern-Rich-Results) ──
const REVIEW_SCHEMA_DATA = [
  {
    author: 'Yuri Sharapa',
    datePublished: '2024-06-15',
    reviewBody: 'Gestern Abend habe ich die Tür zugeworfen und den Schlüssel innen vergessen. Ich rief FC-KEY an und innerhalb von 30 Minuten war jemand da. Sehr professionell! Toller Service, sehr zu empfehlen.',
    ratingValue: 5,
  },
  {
    author: 'Aicha Kone',
    datePublished: '2024-07-02',
    reviewBody: 'Danke für den guten Service. Ich habe sie wegen meines Autoschlösses angerufen. Ihr Service ist so schnell, ich bin wirklich beeindruckt. Sehr professionell und erschwinglich.',
    ratingValue: 5,
  },
  {
    author: 'Markus Berger',
    datePublished: '2024-08-20',
    reviewBody: 'Schlüssel von innen in der Tür stecken gelassen – wie dumm! Zum Glück standen sie sogar sonntags innerhalb von 20 Minuten vor der Tür und öffneten unser Auto 100% schadenfrei. Sehr empfehlenswert!',
    ratingValue: 5,
  },
];

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: {
      absolute: post.title,
    },
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_CONFIG.domain}/blog/${slug}`,
      languages: {
        'de-DE': `${SITE_CONFIG.domain}/blog/${slug}`,
        'x-default': `${SITE_CONFIG.domain}/blog/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      url: `${SITE_CONFIG.domain}/blog/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const postContent = BLOG_CONTENT[slug];


  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
      { '@type': 'ListItem', position: 2, name: 'Blog & Ratgeber', item: `${SITE_CONFIG.domain}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_CONFIG.domain}/blog/${slug}` },
    ],
  };

  let faqSchema: any = null;
  if (slug === 'autoschluessel-nachmachen-ohne-original') {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kann ich einen Autoschlüssel nachmachen ohne Original?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, das ist durchaus möglich. Ein mobiler Kfz-Schlüsselspezialist kann vor Ort einen neuen Schlüssel fräsen und über den OBD-Port oder direkt an der ECU des Fahrzeugs programmieren – selbst wenn alle Schlüssel verloren sind.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Angaben benötigt der Schlüsseldienst?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Um einen Schlüssel ohne Original anzufertigen, werden Marke, Modell, Baujahr, die Fahrzeugidentifikationsnummer (FIN/Fahrgestellnummer) sowie ein gültiger Lichtbildausweis und ein Eigentumsnachweis benötigt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was kostet das Nachmachen eines Autoschlüssels ohne Original?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Kosten variieren von €180 für Standard-Transponder-Schlüssel bis €350 bis €650 für komplexe Smart Keys (z.B. BMW, Mercedes, Tesla). Dies ist inklusive Programmierung und Fräsen vor Ort.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie lange dauert das Einlernen und Anfertigen des Schlüssels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Durchschnittlich dauert der Vorgang vor Ort 30 bis 60 Minuten. Bei komplexeren Wegfahrsperrensystemen (wie CAS4/FEM bei BMW oder FBS4 bei Mercedes) kann es bis zu 2 Stunden dauern.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann der Händler auch einen Schlüssel ohne Original anfertigen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, aber der Händler muss das Fahrzeug oft in die Werkstatt abschleppen lassen und bestellt den Schlüssel beim Hersteller, was 3 bis 14 Tage Wartezeit und hohe Abschleppkosten mit sich bringt.',
          },
        },
      ],
    };
  }

  return (
    <>
      <script id={`blog-post-bc-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script id={`blog-post-faq-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <main id="main-content">
      <section style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>← Zurück zum Blog</Link>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', margin: '1rem 0' }}>
            <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', padding: '3px 10px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              {post.readTime} Lesezeit
            </span>
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
              {new Date(post.publishDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.2, marginBottom: '1rem' }}>{post.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7 }}>{post.excerpt}</p>

          {/* ── Autorenzeile — E-E-A-T Vertrauenssignal ── */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '1.5rem',
            padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <img
              src="/images/gungor-demir.webp"
              alt="Gungor Demir — Inhaber &amp; Kfz-Schlüsselspezialist FC-KEY"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'top',
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>Gungor Demir</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.76rem' }}>Inhaber &amp; Kfz-Schlüsselspezialist · 10+ Jahre Erfahrung</div>
            </div>
            <Link
              href="/ueber-uns"
              style={{
                marginLeft: 'auto',
                fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Mehr über uns →
            </Link>
          </div>
        </div>
      </section>

      <div className="blog-content" style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 2rem' }}>
        {postContent ? (
          postContent
        ) : (
          <>
            <h2>Alles über {post.title}</h2>
            <p className="lead" style={{ fontSize: '1.15rem', lineHeight: 1.7, fontWeight: 500, color: 'var(--navy-800)', marginBottom: '1.5rem' }}>
              {post.excerpt}
            </p>
            <h3>1. Die technische Herausforderung bei modernen Autoschlüsseln</h3>
            <p>
              Moderne Fahrzeugtüren und Zündschlösser sind schon längst nicht mehr rein mechanisch gesichert. Seit Ende der neunziger Jahre ist jeder Autoschlüssel mit einem RFID-Transponderchip ausgestattet, der verschlüsselte Daten mit der Wegfahrsperre (Immobiliser) des Fahrzeugs austauscht. Ohne einen kryptografisch genehmigten Code verweigert die Motorsteuerung (ECU) die Aktivierung der Kraftstoffpumpe und der Zündung. Wenn Sie Ihren Schlüssel nachmachen lassen möchten, muss nicht nur der Schlüsselbart präzise gefräst werden, sondern der Transponderchip muss auch in das Sicherheitssystem Ihres Fahrzeugs integriert werden.
            </p>
            <h3>2. OBD2-Diagnose und Anlernen auf Werksebene</h3>
            <p>
              Während herkömmliche Werkstätten oder Schlüsseldienste oft bei komplexen Schlüsselkodierungen scheitern – wie BMW CAS4/FEM, Volkswagen MQB, Mercedes FBS3 oder Renault Keycard-Systemen – arbeitet <strong>{SITE_CONFIG.name}</strong> mit professioneller Diagnosetechnik und originalen OEM-Lizenzen. Über den OBD2-Anschluss Ihres Fahrzeugs kommunizieren wir direkt mit dem Bordcomputer, um neue Schlüsselcodes hinzuzufügen.
            </p>
            <h3>3. Was tun bei &quot;All Keys Lost&quot; (Alle Schlüssel verloren)?</h3>
            <p>
              Haben Sie alle Schlüssel verloren? Bei einem Vertragshändler muss Ihr Fahrzeug dann oft per Abschleppwagen in die Werkstatt gebracht werden, was mit hohen Abschleppkosten und langen Wartezeiten verbunden ist. Unsere mobilen Schlüsseldienst-Techniker kommen 24/7 direkt zu Ihnen. Wir öffnen Ihr Fahrzeug 100% schadensfrei mit speziellem Lishi-Werkzeug, decodieren den Schließmechanismus zur Ermittlung der Schlüsselschnitte, fräsen einen neuen Schlüsselbart mit unserer computergesteuerten CNC-Maschine und löschen die verlorenen Schlüssel aus dem Fahrzeugspeicher.
            </p>
            <h3>4. Transparente Kosten, Garantie und Versicherung</h3>
            <p>
              Dank unserer effizienten mobilen Arbeitsweise sparen Sie durchschnittlich 30% bis 50% im Vergleich zu offiziellen Vertragshändlern. Sie erhalten vorab immer ein verbindliches Festpreisangebot ohne Überraschungen im Nachhinein sowie standardmäßig 12 Monate schriftliche Garantie auf alle von uns gelieferten Schlüssel und Reparaturen. In vielen Fällen wird der Ersatz oder das Nachmachen eines verlorenen Autoschlüssels zudem durch Ihre Teilkasko- oder Vollkaskoversicherung gedeckt.
            </p>
          </>
        )}

        {/* ── Umfassender E-E-A-T technischer FAQ-Bereich ── */}
        <div className="seo-article-block" style={{ marginTop: '3.5rem', marginBottom: '2.5rem', padding: '2rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <h3>Häufig gestellte Fragen zum Autoschlüssel-Service vor Ort</h3>
          <p>
            <strong>Wie schnell sind Sie bei mir?</strong> In Stuttgart, Sindelfingen, Böblingen und dem 50-km-Umkreis sind unsere mobilen Techniker durchschnittlich innerhalb von 30 bis 45 Minuten bei Ihrem Fahrzeug.
          </p>
          <p>
            <strong>Wird mein Auto schadensfrei geöffnet?</strong> Ja, wir verwenden ausschließlich professionelle Lishi 2-in-1 Schloss-Decoder. Es kommt kein Brecheisen zum Einsatz, wodurch Ihr Lack und Türschloss 100% intakt bleiben.
          </p>
          <p>
            <strong>Erhalte ich Garantie auf einen neuen Autoschlüssel?</strong> Ja, Sie erhalten standardmäßig 12 Monate Garantie auf die Elektronik, den Transponderchip, die Batterie und das Gehäuse jedes von uns gelieferten und programmierten Schlüssels.
          </p>
        </div>

        {/* ── Verwandte Artikel: Behebt 'nur ein eingehender interner Link' SEO-Warnung ── */}
        <div style={{ marginTop: '3rem', borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--navy-900)' }}>Verwandte Artikel</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {(() => {
              // Deterministische Rotation basierend auf Slug — jeder Beitrag erhält einen einzigartigen Satz verwandter Artikel
              const others = BLOG_POSTS.filter(p => p.slug !== slug);
              const seed = slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
              const start = seed % others.length;
              const rotated = [...others.slice(start), ...others.slice(0, start)];
              return rotated.slice(0, 3).map(related => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  style={{
                    display: 'block',
                    padding: '1.5rem',
                    background: '#fff',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    color: 'inherit',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--navy-800)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                    {related.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', margin: 0, lineHeight: 1.5 }}>
                    {related.excerpt.substring(0, 80)}...
                  </p>
                  <span style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    Weiterlesen →
                  </span>
                </Link>
              ));
            })()}
          </div>
        </div>

        <div style={{ background: 'var(--navy-900)', borderRadius: '12px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Direkt einen Autoschlüssel nachmachen oder programmieren lassen?</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>Unsere zertifizierten Kfz-Schlüsselspezialisten stehen Ihnen 24/7 zur Verfügung.</p>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} style={{ background: '#fff', color: 'var(--navy-900)', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
            📞 {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </main>
    </>
  );
}
