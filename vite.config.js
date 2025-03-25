import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ParkProtectors/',  // MAKE SURE THIS IS THE SAME AS YOUR GITHUB REPO NAME
});