import React from 'react';

export default function Privacy() {
  return (
    <div style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', color: '#1e293b', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px' }}>Informativa sulla Privacy</h1>
      <p style={{ marginBottom: '25px', color: '#64748b', fontSize: '14px' }}>Ultimo aggiornamento: Novembre 2026</p>
      
      <p style={{ marginBottom: '20px' }}>
        La presente Informativa descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito e utilizzano i servizi legati alla vendita, installazione e assistenza di sistemi di depurazione e trattamento dell'acqua (ATECO 46.71.00), ai sensi del Regolamento UE 2016/679 (GDPR).
      </p>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>1. Titolare del Trattamento dei Dati</h2>
      <p style={{ marginBottom: '10px' }}>
        Il Titolare del trattamento è la ditta/società commerciale di sistemi di depurazione acqua.
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li><strong>Partita IVA / Codice Fiscale:</strong> [Inserisci la tua P.IVA]</li>
        <li><strong>Sede Legale:</strong> [Inserisci il tuo Indirizzo]</li>
        <li><strong>Email di contatto Privacy:</strong> [Inserisci la tua Email]</li>
      </ul>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>2. Tipologie di Dati Raccolti e Finalità</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={{ marginBottom: '8px' }}>
          <strong>Dati inviati volontariamente:</strong> Nome, cognome, indirizzo email, numero di telefono e indirizzo fisico forniti tramite form di contatto per richiedere preventivi, analisi dell'acqua o sopralluoghi tecnici.
        </li>
        <li style={{ marginBottom: '8px' }}>
          <strong>Dati tecnici e Cookie:</strong> Dati di navigazione e memorizzazione locale (<code>localStorage</code>) utilizzati esclusivamente per salvare la tua preferenza riguardo al consenso dei cookie.
        </li>
      </ul>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>3. Base Giuridica del Trattamento</h2>
      <p style={{ marginBottom: '20px' }}>
        I dati vengono trattati per l'esecuzione di misure precontrattuali o contrattuali (es. elaborazione preventivi per impianti di filtrazione) e sulla base del consenso esplicito dell'utente fornito in fase di invio dei moduli.
      </p>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>4. Diritti dell'Utente (Art. 15-22 GDPR)</h2>
      <p style={{ marginBottom: '20px' }}>
        Hai il diritto in qualsiasi momento di accedere ai tuoi dati, chiederne la rettifica, la cancellazione, la limitazione del trattamento o l'opposizione, inviando una semplice richiesta all'indirizzo email del Titolare.
      </p>
    </div>
  );
}