import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './client/src'),
		},
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
		// Ensure _redirects is copied to build output
		copyPublicDir: true,
	},
	server: {
		port: 3000,
	},
	// Add this to copy _redirects to build output
	publicDir: 'public',
});
