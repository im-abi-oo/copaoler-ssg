import React from 'react';

export default function ContactPage() {
  return (
    <div style={{ padding: '20px', background: '#e3f2fd', borderRadius: '8px' }}>
      <h2>صفحه تماس با ما</h2>
      <p>این یک کامپوننت مستقل است که از پوشه ContactPage کامپایل شده.</p>
      <button onClick={() => alert('پیام ارسال شد!')}>ارسال فرم</button>
    </div>
  );
}
