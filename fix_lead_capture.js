const fs = require('fs');

let content = fs.readFileSync('src/components/LeadCaptureForm/LeadCaptureForm.tsx', 'utf8');

const oldSubmit = `  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
      setSubmitted(false);
    }, 200);
  }`;

const newSubmit = `  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Open WhatsApp synchronously to bypass popup blockers
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
    
    // Server-side lead capture
    setSubmitted(true);
    try {
      await fetch("https://formsubmit.co/ajax/info@fc-key.de", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
            _subject: \`Neue Lead-Anfrage: \${brand || 'Unbekannt'} \${model || ''}\`,
            Marke: brand || 'Nicht angegeben',
            Modell: model || 'Nicht angegeben',
            Baujahr: year || 'Nicht angegeben',
            Leistung: service || 'Nicht angegeben',
            Ort: location || 'Nicht angegeben',
        })
      });
    } catch (err) {
      console.error(err);
    }
    setSubmitted(false);
  }`;

if (content.includes(oldSubmit)) {
  content = content.replace(oldSubmit, newSubmit);
  fs.writeFileSync('src/components/LeadCaptureForm/LeadCaptureForm.tsx', content);
  console.log('Fixed LeadCaptureForm.tsx');
} else {
  console.log('Error: oldSubmit not found in LeadCaptureForm.tsx');
}
