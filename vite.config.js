import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                demo: resolve(__dirname, 'demo.html'),
                premium: resolve(__dirname, 'demo-premium.html'),
                live: resolve(__dirname, 'live-demo.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
