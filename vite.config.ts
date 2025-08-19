import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks based on npm packages
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('three') || id.includes('ogl')) {
              return 'three';
            }
            if (id.includes('react-vertical-timeline')) {
              return 'timeline';
            }
            if (id.includes('react-hook-form') || id.includes('yup')) {
              return 'forms';
            }
            if (id.includes('gsap') || id.includes('typewriter')) {
              return 'animation';
            }
            // Group other vendors
            return 'vendor';
          }
        },
      },
    },
    // Enable compression
    cssCodeSplit: true,
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
    ],
    exclude: [
      'ogl', // Heavy WebGL library
      'three', // Heavy 3D library
    ],
  },
  // Enable preload for critical resources
  server: {
    preTransformRequests: false,
  },
});
