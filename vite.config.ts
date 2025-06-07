import viteI18nLoader from '@jswork/vite-i18n-loader';
import banner from '@jswork/vite-plugin-html-banner';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Inspect from 'vite-plugin-inspect';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

import { RouteMatchCallbackOptions } from 'workbox-core/src/types';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('command:', command);
  console.log('mode:', mode);
  const isDevelopment = mode === 'development';

  const plugins: any = [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    }),
    svgr(),
    banner(),
    ViteImageOptimizer({}),
    viteI18nLoader(),
    VitePWA({
      injectRegister: 'inline',
      // registerType: 'prompt',
      workbox: {
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        globPatterns: ['**/**/*.{js,css,html,ico,png,jpg,jpeg,gif,svg}'],
        globIgnores: ['**/index.html', '**/sw.js'],
        ignoreURLParametersMatching: [/^v$/, /^t$/, /^queryKey$/, /^hash$/],
        skipWaiting: false,
        clientsClaim: false,
        runtimeCaching: [
          {
            urlPattern: ({ url }: RouteMatchCallbackOptions) => url.pathname.startsWith('/locales/'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'locales-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: ({ url }: RouteMatchCallbackOptions) => url.pathname.startsWith('/static/data/'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'local-json-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // 匹配 unpkg.com 和 cdn.jsdelivr.net 的所有子域名
            urlPattern: /^https:\/\/(?:\w+\.)?(unpkg\.com|cdn\.jsdelivr\.net)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'unpkg-jsdelivr-cache',
              cacheableResponse: {
                statuses: [0, 200]
              },
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
          }
        ]
      }
    }),
    // analyzer({analyzerMode: 'static'}),
  ];
  if (isDevelopment) {
    plugins.push(Inspect());
  }
  return {
    envDir: './config/envs',
    build: {
      manifest: true,
      sourcemap: isDevelopment,
      rollupOptions: {
        output: {
          manualChunks: {
            'react': ['react'],
            'react-dom': ['react-dom'],
            'react-router-dom': ['react-router-dom'],
            'lodash': ['lodash'],
            'marked': ['marked'],
            'dayjs': ['dayjs'],
            'html2canvas': ['html2canvas'],
            'framer-motion': ['framer-motion'],
            'qrcode-react': ['qrcode.react'],
            'mantine-core': ['@mantine/core', '@mantine/hooks'],
            'mantine-extensions': [
              '@mantine/carousel',
              '@mantine/dates',
              '@mantine/dropzone',
              '@mantine/form',
              '@mantine/modals',
              '@mantine/notifications'
            ]
          }
        }
      }
    },
    plugins,
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      host: '0.0.0.0',
      port: 5174
    }
  };
});
