/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from "dotenv";

const config = dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(config.parsed?.VITE_PORT_SERVER) || 4000
  },
  preview: {
    port: Number(config.parsed?.VITE_PORT_PREVIEW) || 5000
  }
});
