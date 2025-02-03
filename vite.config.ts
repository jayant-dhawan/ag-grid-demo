import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/ag-grid-community")) {
            return "ag-grid-community";
          }
          if (id.includes("node_modules/ag-grid-enterprise")) {
            return "ag-grid-enterprise";
          }
          if (id.includes("radix")) {
            return "radix";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("src/components/")) {
            return "components";
          }
        },
      },
    },
  },
});
