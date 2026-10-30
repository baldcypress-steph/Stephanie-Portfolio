import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    tanstackStart(),
    nitro({
      hooks: {
        "rollup:before": (_nitro, config) => {
          const onwarn = config.onwarn;
          config.onwarn = (warning, warn) => {
            if (warning.code === "INEFFECTIVE_DYNAMIC_IMPORT") return;
            onwarn?.(warning, warn);
          };
        },
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": `${import.meta.dirname}/src`,
    },
  },
  build: isSsrBuild
    ? undefined
    : {
        rollupOptions: {
          output: {
            codeSplitting: {
              groups: [
                {
                  test: /node_modules\/(motion|framer-motion)\//,
                  name: "motion",
                },
                { test: /node_modules\/@tanstack\//, name: "tanstack" },
                { test: /node_modules\/@radix-ui\//, name: "radix" },
                { test: /node_modules\/lucide-react\//, name: "icons" },
                { test: /node_modules\/marked\//, name: "markdown" },
                { test: /node_modules\//, name: "vendor" },
              ],
            },
          },
        },
      },
}));
