import os

file_path = '/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/app/marken/[merkSlug]/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 2. Replace CLEAN 3-COLUMN MODEL LIST with Timpson Section
start_str = '{/* ── CLEAN 3-COLUMN MODEL LIST (NEW DESIGN) ── */}'
end_str = '{/* ── KEY PHOTOS SECTION (ANTI-THIN CONTENT) ── */}'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    actual_start = content.rfind('\n', 0, start_idx) + 1
    actual_end = content.rfind('\n', 0, end_idx) + 1
    
    new_timpson_section = """        {/* ── TIMPSON STYLE MODEL LIST ── */}
        <section id="modellen" style={{ padding: '4.5rem 0', background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: 1200 }}>
            <style dangerouslySetInnerHTML={{__html: `
              .timpson-section-wrap {
                display: flex;
                gap: 4rem;
                align-items: center;
                background: #ffffff;
                border-radius: 16px;
                padding: 3.5rem;
                box-shadow: 0 4px 20px rgba(0,0,0,0.03);
              }
              .model-link-hover:hover {
                text-decoration: underline !important;
                color: var(--orange-500) !important;
              }
              .models-list {
                color: #475569;
                font-size: 1.05rem;
                line-height: 2;
                padding-left: 1.5rem;
                margin-bottom: 1.5rem;
                font-weight: 600;
                list-style-type: disc;
                column-count: 2;
                column-gap: 2rem;
              }
              @media (max-width: 900px) {
                .timpson-section-wrap {
                  flex-direction: column;
                  padding: 2rem;
                  gap: 2rem;
                }
                .models-list {
                  column-count: 1;
                }
                .timpson-image-wrap {
                  flex: none !important;
                  width: 100%;
                }
              }
            `}} />

            <div className="timpson-section-wrap">
              <div style={{ flex: '1 1 500px' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Neue {brand.name} Schlüssel für die beliebtesten Modelle
                </h2>
                
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Das Ersetzen Ihres {brand.name} Schlüssels geht bei First Class Key immer schnell und einfach. Unsere erfahrenen Monteure können {brand.name} Schlüssel fräsen, anlernen und reparieren vor Ort im ganzen Einsatzgebiet.
                </p>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Wir liefern schnelle und günstige {brand.name} Ersatzschlüssel für alle Modelle, darunter:
                </p>

                <ul className="models-list">
                  {brand.models?.map(m => (
                    <li key={m.slug} style={{ breakInside: 'avoid' }}>
                      <Link href={`/marken/${brand.nameSlug.toLowerCase()}-autoschluessel-nachmachen/${m.slug}-schluessel-nachmachen`} style={{ color: '#1e293b', textDecoration: 'none' }} className="model-link-hover">
                        {brand.name} {m.name} Schlüssel
                      </Link>
                    </li>
                  ))}
                  {brand.specialIntents?.map(intent => (
                    <li key={intent.slug} style={{ breakInside: 'avoid' }}>
                      <Link href={`/marken/${brand.nameSlug.toLowerCase()}-autoschluessel-nachmachen/${intent.slug}`} style={{ color: 'var(--orange-600)', textDecoration: 'none' }} className="model-link-hover">
                        {intent.name}
                      </Link>
                    </li>
                  ))}
                  {(!brand.models || brand.models.length === 0) && (
                    <li>Alle {brand.name} Modelle unterstützt</li>
                  )}
                </ul>
              </div>

              <div className="timpson-image-wrap" style={{ flex: '1 1 0%', width: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={carPhotoSrc} alt={`${brand.name} car`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Bottom: Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#fff7ed', border: '2px solid #fb923c', color: '#ea580c', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem', minWidth: '250px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Jetzt anrufen: {SITE_CONFIG.phone}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#f0fdf4', border: '2px solid #6ee7b7', color: '#16a34a', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem', minWidth: '250px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                WhatsApp
              </a>
            </div>

          </div>
        </section>\n\n"""

    content = content[:actual_start] + new_timpson_section + content[actual_end:]
    print("Replaced Timpson section.")
else:
    print("Could not find start or end index for model list")


# 3. Replace BrandModelsList with WHY CHOOSE US
bm_start_str = '{/* ── MODELS LIST ── */}'
bm_end_str = '<BrandModelsList brand={brand} />'

bm_start_idx = content.find(bm_start_str)
bm_end_idx = content.find(bm_end_str)

if bm_start_idx != -1 and bm_end_idx != -1:
    bm_actual_start = content.rfind('\n', 0, bm_start_idx) + 1
    bm_actual_end = bm_end_idx + len(bm_end_str)

    new_why_choose_us = """        {/* ── TIMPSON STYLE 'WHY CHOOSE US' SECTION ── */}
        <section style={{ padding: '4.5rem 0', background: '#ffffff' }}>
          <div className="container" style={{ maxWidth: 1200 }}>
            
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '3.5rem', textAlign: 'center' }}>
              Warum unseren {brand.name} Autoschlüssel Service wählen?
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              
              {/* Column 1: Affordable */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '5/4', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #f1f5f9', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/why_choose_us_1.jpg" alt="Bezahlbares Kartenterminal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Bezahlbar</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Unsere {brand.name} Ersatzschlüssel sind bis zu 50% günstiger als bei den offiziellen Vertragshändlern.
                </p>
              </div>

              {/* Column 2: Convenient */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '5/4', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #f1f5f9', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/why_choose_us_2.png" alt="Schlüssel vor Ort programmieren" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Einfach</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Erhalten Sie Ihren neuen {brand.name} Autoschlüssel schnell und einfach vor Ort im gesamten Einsatzgebiet.
                </p>
              </div>

              {/* Column 3: Quality */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '5/4', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #f1f5f9', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/why_choose_us_3.png" alt="Schlüssel Werkstatt" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Qualität</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Unsere Monteure fräsen präzise {brand.name} Schlüssel und lernen diese fachgerecht an Ihrem Fahrzeug an.
                </p>
              </div>

            </div>

          </div>
        </section>\n"""
    content = content[:bm_actual_start] + new_why_choose_us + content[bm_actual_end:]
    print("Replaced BrandModelsList.")
else:
    print("Could not find start or end index for brand models list")

import re
content = re.sub(r'import BrandModelsList.*?\n', '', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved!")
