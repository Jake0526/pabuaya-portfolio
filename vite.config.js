import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      'process.env': {
        appVersion: process.env.appVersion
      }
    }
  });
}
