'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Dynamically load the client-side app script
    const script = document.createElement('script');
    script.src = '/app.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Script might already be removed
      }
    };
  }, []);

  return (
    <>
      <div id="app">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'Inter, sans-serif',
          background: '#F4ECE0',
          color: '#3A2B26'
        }}>
          <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
            Happy Care · Istefada Ilmiyah
          </div>
          <div style={{ fontSize: '14px', color: '#6E5E56' }}>
            Connecting to cloud database...
          </div>
        </div>
      </div>
      <div id="modal-root"></div>
      <div id="toast"></div>
    </>
  );
}
