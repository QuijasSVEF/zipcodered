import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    react({
      jsxRuntime: 'classic'
    })
  ],
  build: {
    minify: 'terser',
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('lucide')) return 'icons-vendor';
            if (id.includes('tableau')) return 'tableau-vendor';
            return 'vendor';
          }
        }
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2
      },
      format: {
        comments: false
      },
      mangle: {
        properties: false
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: ['@supabase/supabase-js']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});