import React from 'react';

export default function Privacy() {
  return (
    <div style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', color: '#1e293b', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Informativa sulla Privacy</h1>
      <p style={{ marginBottom: '15px' }}>Ultimo aggiornamento: Novembre 2026</p>
      
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>1. Titolare del Trattamento dei Dati</h2>
      <p style={{ marginBottom: '15px' }}>Per qualsiasi informazione o richiesta riguardo al trattamento dei tuoi dati personali, puoi contattarci direttamente tramite la nostra pagina Contatti.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>2. Tipologie di Dati Raccolti e Cookie</h2>
      <p style={{ marginBottom: '15px' }}>Questo sito utilizza i cookie per garantire il corretto funzionamento delle procedure e migliorare l'esperienza d'uso delle applicazioni. I dati di navigazione vengono memorizzati localmente sul tuo dispositivo (tramite <code>localStorage</code>) esclusivamente per ricordare la tua preferenza riguardo al consenso dei cookie.</p>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>3. Diritti dell'Utente</h2>
      <p style={{ marginBottom: '15px' }}>In conformità al Regolamento UE 2016/679 (GDPR), l'utente ha il diritto di accedere in ogni momento ai propri dati, verificarne l'esattezza o chiederne la cancellazione.</p>
    </div>
  );
}