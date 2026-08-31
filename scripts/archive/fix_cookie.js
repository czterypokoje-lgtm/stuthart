const fs = require('fs');
let content = fs.readFileSync('src/components/CookieBanner/CookieBanner.tsx', 'utf8');

const oldAccept = `  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
  };`;

const newAccept = `  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    window.dispatchEvent(new Event("cookie_consent_accepted"));
    const win = window as any;
    if (win.dataLayer) {
      win.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_state': 'granted'
      });
      win.gtag && win.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
      });
    }
    setShowBanner(false);
  };`;

content = content.replace(oldAccept, newAccept);
fs.writeFileSync('src/components/CookieBanner/CookieBanner.tsx', content);
console.log('Fixed CookieBanner.tsx');
