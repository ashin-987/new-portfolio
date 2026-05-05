import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",

  build: {
    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
        pure_funcs: ["console.log"], // Remove specific console methods
      },
    },

    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react")) {
            return "react-vendor";
          }
          if (id.includes("framer-motion")) {
            return "motion-vendor";
          }
          if (id.includes("react-icons")) {
            return "icons-vendor";
          }
        },
      },
    },

    // Chunk size warnings
    chunkSizeWarningLimit: 500,

    // Source maps for debugging (optional - remove in production)
    sourcemap: false,
  },

  // Optimize deps
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
