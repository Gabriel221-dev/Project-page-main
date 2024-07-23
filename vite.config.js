import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PORT = `${env.PORT ?? "8080"}`;
  console.log(env.PORT);
  return {
    plugins: [react()],

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
