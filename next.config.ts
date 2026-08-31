import type { NextConfig } from "next";

const brands = [
  'volkswagen', 'bmw', 'mercedes', 'audi', 'toyota', 'peugeot', 'ford', 'renault', 
  'opel', 'volvo', 'skoda', 'nissan', 'kia', 'hyundai', 'honda', 'fiat', 'citroen', 
  'seat', 'mazda', 'suzuki', 'mitsubishi', 'mini', 'dacia', 'land-rover', 'porsche', 
  'lexus', 'jaguar', 'alfa-romeo', 'smart', 'jeep', 'chevrolet', 'subaru', 'lancia', 
  'ds', 'chrysler', 'saab', 'dodge', 'ssangyong'
];

const brandRedirects = brands.map(brand => ({
  source: `/marken/${brand}`,
  destination: `/marken/${brand}-autoschluessel-nachmachen`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },
  async redirects() {
    return [
      ...brandRedirects,
      {
        source: "/blog/auto-oeffnen-ohne-schluessel-schadenfrei",
        destination: "/blog/autoschluessel-verloren-was-nun-anleitung",
        permanent: true,
      },
      {
        source: "/blog/schluessel-im-auto-liegen-gelassen-loesungen",
        destination: "/blog/autoschluessel-verloren-was-nun-anleitung",
        permanent: true,
      },
      {
        source: "/leistungen/notoeffnung-auto",
        destination: "/leistungen/auto-ohne-schluessel-oeffnen",
        permanent: true,
      },
      {
        source: "/leistungen/tuer-zugefallen",
        destination: "/leistungen/auto-ohne-schluessel-oeffnen",
        permanent: true,
      },
      {
        source: "/leistungen/kofferraum-oeffnen",
        destination: "/leistungen/auto-ohne-schluessel-oeffnen",
        permanent: true,
      },
      {
        source: "/leistungen/schluessel-im-auto",
        destination: "/leistungen/auto-ohne-schluessel-oeffnen",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
