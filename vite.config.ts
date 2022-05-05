import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import laravel from "vite-plugin-laravel";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            postcss: [tailwindcss(), autoprefixer()],
        }),
        vue(),
    ],
    resolve: {
        alias: {
            "#app": path.resolve(__dirname, "./resources/scripts"),
        },
    },
});
