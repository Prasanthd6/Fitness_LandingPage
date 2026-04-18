import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// --- When true: point HMR WebSocket at port 443 (same as https://*.loca.lt in the browser) ---
// Without this, Vite builds ws URLs like wss://sub.loca.lt:/… (empty port) and the page can stay blank over localtunnel.
// While SHARE_TUNNEL=1, open the printed tunnel URL in the browser (not http://localhost), or use npm run share:preview.
const sharePublicly = process.env.SHARE_TUNNEL === '1'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Allow tools like localtunnel / ngrok to forward Host headers to the dev server
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: ['.loca.lt', '.ngrok-free.app', '.ngrok.io', '.trycloudflare.com'],
    ...(sharePublicly
      ? {
          hmr: {
            clientPort: 443,
          },
        }
      : {}),
  },
  // Preview must listen on all interfaces so localtunnel can reach it
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    allowedHosts: ['.loca.lt', '.ngrok-free.app', '.ngrok.io', '.trycloudflare.com'],
  },
})
