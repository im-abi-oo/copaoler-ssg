import React, { useState } from 'react';

export default function LandingPage() {
  const [active, setActive] = useState(false);

  return (
    <div style={{
      background: active ? '#2c3e50' : '#ecf0f1',
      color: active ? '#fff' : '#333',
      padding: '40px',
      borderRadius: '20px',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1>این یک صفحه کامپایل شده مستقل است</h1>
      <p>وضعیت فعلی: {active ? 'حالت شب' : 'حالت روز'}</p>
      <button 
        onClick={() => setActive(!active)}
        style={{
          padding: '10px 25px',
          fontSize: '1rem',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '50px',
          backgroundColor: '#3498db',
          color: 'white'
        }}
      >
        تغییر تم صفحه
      </button>
    </div>
  );
}
