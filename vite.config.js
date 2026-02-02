import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, join } from 'path';
import { readdirSync, statSync } from 'fs';

// تابع برای پیدا کردن تمام پوشه‌های صفحات
const pagesPath = resolve(__dirname, 'src/pages');
const pages = readdirSync(pagesPath).filter(f => 
  statSync(join(pagesPath, f)).isDirectory()
);

// ساخت آبجکت ورودی برای کامپایلر
const entryPoints = {};
pages.forEach(page => {
  entryPoints[page] = resolve(pagesPath, page, 'index.jsx');
});

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-pages',
    emptyOutDir: true,
    rollupOptions: {
      input: entryPoints,
      output: {
        // هر صفحه در پوشه مخصوص خود ذخیره می‌شود
        entryFileNames: `[name]/[name].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `[name]/[name].[ext]`,
        format: 'iife', // برای اجرای مستقل در مرورگر
        name: 'PageBundle'
      }
    }
  }
});
