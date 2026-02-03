import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/~suvimyn/2026/jakso3/hybrid/forms/',
  // test: {
  //   environment: 'jsdom',
  //   globals: true,
  //   setupFiles: './vitest.setup.ts',
  // },
});
