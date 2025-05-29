import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.js'],
    include: [
      'src/testsCases/**/*.{test,spec}.{js,jsx,ts,tsx}'
    ],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      'next.config.mjs'
    ],
    coverage: {
      exclude: [
        // Configuration files
        '*.config.*',
        'eslint.config.*',
        'vitest.config.*',
        'next.config.*',
        'jsconfig.json',
        
        // Directories
        '**/node_modules/**',
        '**/coverage/**',
        '**/.next/**',
        '**/dist/**',
        
        // Root level files
        'setupTests.js',
        'src/setupTests.js'
      ]
    }
  },
}) 