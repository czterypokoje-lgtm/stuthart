const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

// 1. Add IBM Plex Sans import
content = content.replace("import './globals.css';", "import './globals.css';\nimport { IBM_Plex_Sans } from 'next/font/google';\n\nconst ibmPlexSans = IBM_Plex_Sans({\n  subsets: ['latin'],\n  weight: ['400', '500', '600', '700'],\n  display: 'swap',\n  variable: '--font-ibm-plex-sans',\n});");

// 2. Remove external font links
content = content.replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com" \/>\s*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossOrigin="anonymous" \/>\s*<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=IBM\+Plex\+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" \/>/g, "");

// 3. Apply class to body
content = content.replace('<body>', '<body className={ibmPlexSans.variable}>');

// 4. Remove standalone gtag snippets
const gtagStandalone = /\{\/\* Google tag \(gtag\.js\) \*\/\}\s*<Script[^>]*src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-C4WR7TYCTV"[^>]*\/>\s*<Script id="google-analytics"[^>]*>[\s\S]*?<\/Script>/g;
content = content.replace(gtagStandalone, "");

// 5. Update gtag_report_conversion snippet to use dataLayer
const oldGtagReport = /<Script id="google-ads-conversion" strategy="afterInteractive">\s*\{\`\s*window\.gtag_report_conversion = function\(url\) \{\s*var callback = function \(\) \{\s*if \(typeof\(url\) != 'undefined'\) \{\s*window\.location = url;\s*\}\s*\};\s*gtag\('event', 'conversion', \{\s*'send_to': 'AW-18315813515\/qKjlCPGp_d0cEIvF1J1E',\s*'event_callback': callback\s*\}\);\s*return false;\s*\};\s*\`\}\s*<\/Script>/g;

const newGtagReport = `<Script id="google-ads-conversion" strategy="afterInteractive">
          {\`
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
          \`}
        </Script>`;
content = content.replace(oldGtagReport, newGtagReport);

// 6. Insert Google Consent default state just before GTM
const gtmScript = /\{\/\* Google Tag Manager \*\/\}\s*<script\s*dangerouslySetInnerHTML=\{\{\s*__html: `\(function\(w,d,s,l,i\)\{/g;
const gtmWithConsent = `{/* Google Consent Mode Default */}
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            \`
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: \`(function(w,d,s,l,i){\`;`;
content = content.replace(gtmScript, gtmWithConsent);

fs.writeFileSync('src/app/layout.tsx', content);
console.log('Fixed layout.tsx');
