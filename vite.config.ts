import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@services": path.resolve(__dirname, "src/services"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@providers": path.resolve(__dirname, "src/providers"),
    },
  },
});
