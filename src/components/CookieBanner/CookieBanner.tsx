"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) return null;

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShowBanner(false);
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <p className={styles.text}>
          Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren. 
          Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className={styles.link}>Datenschutzerklärung</Link>{" "}
          und unserer{" "}
          <Link href="/cookie-richtlinie" className={styles.link}>Cookie-Richtlinie</Link>.
        </p>
        <div className={styles.buttons}>
          <button onClick={handleDecline} className={styles.declineButton}>
            Ablehnen
          </button>
          <button onClick={handleAccept} className={styles.acceptButton}>
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
