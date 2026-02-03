/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa' // Temporarily disabled
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    // PWA temporarily disabled during development
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
    //   manifest: {
    //     name: 'Aether Studio - 以太工作室',
    //     short_name: 'Aether Studio',
    //     description: '专注于高性能Web架构与工业级交互设计的技术工作室',
    //     theme_color: '#000000',
    //     background_color: '#000000',
    //     display: 'standalone',
    //     orientation: 'portrait',
    //     scope: '/',
    //     start_url: '/',
    //     icons: [
    //       {
    //         src: '/icon-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable'
    //       }
    //     ]
    //   },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/api\.dicebear\.com\/.*/i,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'dicebear-api-cache',
    //           expiration: {
    //             maxEntries: 32,
    //             maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200]
    //           }
    //         }
    //       },
    //       {
    //         urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'google-fonts-cache',
    //           expiration: {
    //             maxEntries: 16,
    //             maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200]
    //           }
    //         }
    //       }
    //     ]
    //   },
    //   devOptions: {
    //     enabled: true,
    //     type: 'module'
    //   }
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3005,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'lucide': ['lucide-react'],
        },
      },
    },
  },
})
