import type { Metadata } from 'next';
import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});
import Script from 'next/script';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import StickyCallBar from '@/components/StickyCallBar/StickyCallBar';
import PhoneConversionTracker from '@/components/PhoneConversionTracker';
import { SITE_CONFIG } from '@/config/site.config';
import CookieBanner from "@/components/CookieBanner/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    template: '%s | FC-KEY',
    default: 'Autoschlüssel Nachmachen oder Verloren? 24/7 Mobiler Service | FC-KEY',
  },
  description: `Autoschlüssel nachmachen oder alle Schlüssel verloren? Unsere mobilen Monteure kommen direkt zu Ihnen im Raum Stuttgart. Zerstörungsfrei öffnen & anlernen. Jetzt anrufen!`,
  alternates: {
    canonical: SITE_CONFIG.domain,
    languages: {
      'de-DE': SITE_CONFIG.domain,
      'x-default': SITE_CONFIG.domain,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: 'Autoschlüssel Nachmachen & Programmieren | Mobiler Spezialist 24/7',
    description: 'Mobiler Autoschlüsselspezialist für alle Marken. Stuttgart, Sindelfingen, Böblingen & Umgebung. Am selben Tag. Günstiger als der Vertragshändler. Jetzt anrufen.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'First Class Key — Mobiler Autoschlüsselspezialist Stuttgart' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoschlüssel Nachmachen & Programmieren | First Class Key',
    description: 'Mobiler Autoschlüsselspezialist für alle Marken. 24/7 Service. Jetzt anrufen.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    yandex: '94f695ae8808f677',
  },
  // Google Search Console: verify via the HTML-tag method in GSC (Settings → Ownership verification → HTML tag)
  // Paste the <meta name="google-site-verification" content="..."> tag directly in this <head> block
};

// LocalBusiness schema removed. Now handled dynamically in page components.

// ── WebSite Schema (enables Google Sitelinks Searchbox) ──
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_CONFIG.domain}/#website`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.domain,
  description: 'Mobiler Autoschlüsselspezialist — alle Marken — 24/7',
  inLanguage: 'de-DE',
  publisher: { '@id': `${SITE_CONFIG.domain}/#localbusiness` },
// SearchAction removed — Next.js has no ?s= endpoint; prevents schema error in GSC
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Google Consent Mode Default */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRT75SWX');`
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google Ads Click to call conversion snippet */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                  'event': 'conversion',
                  'send_to': 'AW-18315813515/qKjlCPGp_d0cEIvF1J1E',
                  'event_callback': callback
              });
              return false;
            };
          `}
        </Script>

        <meta name="theme-color" content="#0d2137" />

        {/* ── GEO META TAGS — Local SEO signals for Google & Bing ── */}
        <meta name="geo.region" content="DE-BW" />
        <meta name="geo.placename" content="Sindelfingen, Deutschland" />
        <meta name="geo.position" content="48.7075;9.0031" />
        <meta name="ICBM" content="48.7075, 9.0031" />

        {/* ── BUSINESS META TAGS — Open Graph extensions ── */}
        <meta property="business:contact_data:street_address" content={SITE_CONFIG.address.street} />
        <meta property="business:contact_data:locality" content={SITE_CONFIG.address.city} />
        <meta property="business:contact_data:postal_code" content={SITE_CONFIG.address.postal} />
        <meta property="business:contact_data:country_name" content="Deutschland" />
        <meta property="business:contact_data:phone_number" content={SITE_CONFIG.phoneTel} />
        <meta property="business:contact_data:email" content={SITE_CONFIG.email} />
        <meta property="business:contact_data:website" content={SITE_CONFIG.domain} />

        {/* ── SERVICE TYPE META ── */}
        <meta name="classification" content="Autoschlüsselspezialist, Schlüsseldienst, Auto Locksmith" />
        <meta name="category" content="Automotive, Locksmith Services, Mobile Car Key Programming" />
        <meta name="coverage" content="Stuttgart, Sindelfingen, Böblingen, Ludwigsburg, Deutschland" />
        {/* distribution, rating, revisit-after removed — not recognised by Google, add noise to head */}

        {/* ── GOOGLE BUSINESS PROFILE LINK ── */}
        <link rel="me" href={SITE_CONFIG.social.google} />

        {/* ── FONTS ── */}
        
        {/* ── STRUCTURED DATA ── */}
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={ibmPlexSans.variable}>
        <PhoneConversionTracker />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRT75SWX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div style={{ overflowX: 'hidden', position: 'relative' }}>
          <Navigation />
          {children}
          <Footer />
          <WhatsAppButton />
          <StickyCallBar />
        </div>
        {/* ── Cookie Solution & Privacy Controls ── */}
        <CookieBanner />
      </body>
    </html>
  );
}
