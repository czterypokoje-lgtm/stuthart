"use client";

// GDPR Art. 7(3): withdrawing consent must be as easy as giving it.
export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => {
        localStorage.removeItem("cookie_consent");
        location.reload();
      }}
      style={{
        background: 'var(--navy-800)', color: '#fff', border: 'none',
        padding: '0.7rem 1.4rem', borderRadius: '8px', fontWeight: 600,
        fontSize: '0.9rem', cursor: 'pointer',
      }}
    >
      Cookie-Einwilligung widerrufen
    </button>
  );
}
