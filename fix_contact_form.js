const fs = require('fs');

let content = fs.readFileSync('src/components/ContactForm/ContactForm.tsx', 'utf8');

// Replace handleSubmit
const oldSubmit = `  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const car = formData.get('car') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(\`Neue Anfrage von \${name}\`);
    const body = encodeURIComponent(\`Name: \${name}\\nTelefon: \${phone}\\nE-Mail: \${email}\\nAuto: \${car}\\n\\nNachricht:\\n\${message}\`);

    window.location.href = \`mailto:\${SITE_CONFIG.email}?subject=\${subject}&body=\${body}\`;
    
    setTimeout(() => {
      setStatus('succeeded');
      form.reset();
    }, 500);
  };`;

const newSubmit = `  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const car = formData.get('car') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@fc-key.de", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            _subject: \`Neue Kunden-Anfrage von \${name}\`,
            Name: name,
            Telefon: phone,
            Auto: car,
            Email: email,
            Nachricht: message,
        })
      });
      
      if (response.ok) {
        setStatus('succeeded');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };`;

if (content.includes(oldSubmit)) {
  content = content.replace(oldSubmit, newSubmit);
  fs.writeFileSync('src/components/ContactForm/ContactForm.tsx', content);
  console.log('Fixed ContactForm.tsx successfully.');
} else {
  console.log('Error: Could not find oldSubmit block in ContactForm.tsx. Did it change?');
}
