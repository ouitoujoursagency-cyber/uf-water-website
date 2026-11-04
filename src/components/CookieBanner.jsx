import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1e293b',
        color: '#ffffff',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 -4px 10px rgba(0,0,0,0.2)',
        zIndex: 9999,
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '14px'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          Questo sito utilizza i cookie per migliorare l'esperienza utente. Continuando la navigazione accetti l'uso dei cookie. Leggi la nostra <a href="/privacy-policy" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Privacy Policy</a>.
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleDecline}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #94a3b8',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Rifiuta
          </button>
          <button 
            onClick={handleAccept}
            style={{
              backgroundColor: '#0284c7',
              border: 'none',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </>
  );
}