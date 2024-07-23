import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), eslint()],
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PORT = `${env.PORT ?? "8080"}`;
  console.log(env.PORT);
  return {
    plugins: [react(), eslint()],

    preview: {
      port: PORT,
      strictPort: true,
    },
    server: {
      port: PORT,
      host: true,
      origin: `http://0.0.0.0:${PORT}`,
    },
  };
});
